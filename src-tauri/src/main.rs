#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tokio::net::TcpListener;
use tokio_tungstenite::accept_async;
use futures_util::{StreamExt, SinkExt};
use local_ip_address::local_ip;

// Command to generate QR code
#[tauri::command]
fn generate_qr(ip: String, port: u16, token: String) -> String {
    let data = format!("ws://{}:{}/?token={}", ip, port, token);
    let code = qrcode::QrCode::new(data.as_bytes()).unwrap();
    code.render::<qrcode::render::svg::Color>()
        .min_dimensions(200, 200)
        .build()
}

// Command to get local IP address
#[tauri::command]
fn get_local_ip() -> String {
    match local_ip() {
        Ok(ip) => ip.to_string(),
        Err(_) => "127.0.0.1".to_string(),
    }
}

#[tokio::main]
async fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![generate_qr, get_local_ip])  // ← ADD BOTH HERE
        .setup(|_app| {
            tauri::async_runtime::spawn(async {
                let listener = TcpListener::bind("0.0.0.0:9000").await.unwrap();
                println!("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
                println!("🚀 WebSocket Server Running");
                println!("📍 Listening on: ws://0.0.0.0:9000");
                println!("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

                while let Ok((stream, addr)) = listener.accept().await {
                    println!("🔌 New connection from: {}", addr);
                    
                    match accept_async(stream).await {
                        Ok(ws_stream) => {
                            println!("✅ WebSocket handshake successful");
                            let (mut sender, mut receiver) = ws_stream.split();
                            
                            tokio::spawn(async move {
                                while let Some(msg) = receiver.next().await {
                                    match msg {
                                        Ok(msg) => {
                                            if let Ok(text) = msg.to_text() {
                                                println!("📨 Received: {}", text);
                                                let _ = sender.send(msg).await;
                                            }
                                        }
                                        Err(e) => {
                                            println!("❌ Error receiving message: {}", e);
                                            break;
                                        }
                                    }
                                }
                                println!("🔌 Connection closed: {}", addr);
                            });
                        }
                        Err(e) => {
                            println!("❌ WebSocket handshake failed from {}: {}", addr, e);
                        }
                    }
                }
            });
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri app");
}