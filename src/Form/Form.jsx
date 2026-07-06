import React, { useState, useRef, useEffect } from "react";
import formstyle from "./Form.module.css";
import CustomDatePicker from "./dat";
import Fan from "./Fan";
import Motor from "./Motor";
import PowerTools from "./PowerTools";
import { MdAddAPhoto } from "react-icons/md";

const Form = () => {
  const [activeTab, setActiveTab] = useState("fan");
  const [sliderStyle, setSliderStyle] = useState({
    left: 0,
    width: 0,
  });

  const navRef = useRef(null);

  // Move the slider to the active tab
  useEffect(() => {
    const activeItem = navRef.current?.querySelector('[data-active="true"]');

    if (activeItem) {
      setSliderStyle({
        left: activeItem.offsetLeft,
        width: activeItem.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
	<dialog className={formstyle.modalOverlay}>
		<div className={formstyle.formContainer}>
			<div className={formstyle.formHeader}>
				this is header
			</div>
			<div className={formstyle.formContent}>
				{/* Left Form Card */}
				<div className={formstyle.customerCard}>
					<div className={formstyle.customerCardHeader}>
						<h3>Customer Information</h3>
					</div>

					<div className={formstyle.infoGrid}>
						<div className={formstyle.inputHolder}>
							<input type="text" placeholder=" " className={formstyle.infoInput} id="cname" />
							<span for="cname" >Customer Name</span>
						</div>
						<div className={formstyle.inputHolder}>
							<input type="text" placeholder=" " className={formstyle.infoInput} id="cmobile" />
							<span for="cmobile" >Mobile Number</span>
						</div>
						<div className={formstyle.inputHolder}>
							<input type="text" placeholder=" " className={formstyle.infoInput} id="delivery-challan"/>
							<span for="delivery-challan" >Delivery Challan</span>
						</div>
						<div className={formstyle.inputHolder}>
							<input type="text" placeholder=" " className={formstyle.infoInput} id="advance"/>
							<span for="advance">Advance Amount</span>
						</div>
						<div className={formstyle.inputHolder}>
							<span>Date Given :</span>
							<CustomDatePicker />
						</div>
					</div>
				</div>

				{/* Right Side */}
				<aside className={formstyle.navCard}>
						<nav className={formstyle.glassNav} ref={navRef}>
							{/* Sliding Highlighter */}
							<div
							className={formstyle.navSlider}
							style={{
								left: sliderStyle.left,
								width: sliderStyle.width,
								top: '5%'
							}}
							></div>

							<ul className={formstyle.nav1}>
								<li
									className={activeTab === "fan" ? formstyle.active : ""}
									data-active={activeTab === "fan"}
									onClick={() => setActiveTab("fan")}
								>
									Fan
								</li>

								<li
									className={activeTab === "motor" ? formstyle.active : ""}
									data-active={activeTab === "motor"}
									onClick={() => setActiveTab("motor")}
								>
									Motor
								</li>

								<li className={activeTab === "power-tools" ? formstyle.active : ""} data-active={activeTab === "power-tools"} onClick={() => setActiveTab("power-tools")}>
									Power Tools
								</li>
							</ul>
						</nav>
					<section key={activeTab} className={formstyle.machineForm}>
						<div className={formstyle["image-container"]}>
							
							<div className={formstyle["image-view"]}>
								Add your images
								<MdAddAPhoto className={formstyle["camera-icon"]} />
							</div>
							
							<div className={formstyle["image-thumbnails"]}>
								image controls	
							</div>
							<div className={formstyle["image-controls"]}>
								image controls	
							</div>
						</div>
						<div className={formstyle["machine-specific-content"]}>
							{activeTab === "fan" && <Fan />}
							{activeTab === "motor" && <Motor />}
							{activeTab === "power-tools" && <PowerTools />}
						</div>
					</section>
				</aside>
			</div>
		</div>
	</dialog>
  );
};

export default Form;