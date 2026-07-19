import React, { useState, useRef, useEffect } from "react";
import formstyle from "./Form.module.css";
import CustomDateInput from "./dat";
import Fan from "./Fan";
import Motor from "./Motor";
import PowerTools from "./PowerTools";
import { MdAddAPhoto } from "react-icons/md";
import square from "../assets/square.png";
import portrait from "../assets/portrait.jpg";
import wide from "../assets/wide.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { TbUser } from "react-icons/tb";
import IconWaveCanvas from "./IconWave";

const Form = ({ formOverlay }) => {
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
  const formRef = useRef(null);

  const handleClickOutside = (formRef) => {
		if (formRef.current) {
			// scale the form element to 0
			formRef.current.style.transform = 'scale(0)';
		}	
	}
  return (
	<dialog className={formstyle.modalOverlay} ref={formRef}>
		<div className={formstyle.formContainer}>
			<div className={formstyle.formHeader}>
				<div className={formstyle.formControls}>
					<MdClose className={formstyle.closeIcon} onClick={() => formOverlay(false)} />
					<FaMinus className={formstyle.minimizeIcon} onClick={handleClickOutside(formRef)} />
				</div>
				Service Form
			</div>
			<div className={formstyle.formContent}>
				{/* Left Form Card */}
				<div className={formstyle.customerCard}>
					<div className={formstyle.customerCardHeader}>
						{/* <h3>Customer Information</h3> */}
					</div>

					<div className={formstyle.infoGrid}>
						<div className={formstyle.customerIconHolder}>
							<FaUser className={formstyle.customerIcon}/>
						</div>
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
							{/* <CustomDatePicker className={formstyle.infoInput} /> */}
							<CustomDateInput className={formstyle.infoInput} />
							{/* <input type="date" className={formstyle.infoInput} id="date" /> */}
						</div>
					</div>
					<IconWaveCanvas iconType={activeTab} />
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
								{/* <img src={square} alt="Machine" className={formstyle["machine-image"]} /> */}
								<img src={portrait} alt="Portrait" className={formstyle["machine-image"]} />
								{/* <img src={wide} alt="Wide" className={formstyle["machine-image"]} /> */}
								<MdAddAPhoto className={formstyle["camera-icon"]} />
							</div>
							
							<div className={formstyle["image-thumbnails"]}>
								<img src={square} alt="Machine" className={formstyle["thumbnail-image"]} />
								<img src={square} alt="Machine" className={formstyle["thumbnail-image"]} />
								<img src={square} alt="Machine" className={formstyle["thumbnail-image"]} />
								<img src={square} alt="Machine" className={formstyle["thumbnail-image"]} />
								<img src={square} alt="Machine" className={formstyle["thumbnail-image"]} />
								<img src={square} alt="Machine" className={formstyle["thumbnail-image"]} />
							</div>
							<div className={formstyle["image-controls"]}>
								<FaChevronLeft className={formstyle["nav-button"]}/>
								    1 of 20     
								<FaChevronRight className={formstyle["nav-button"]}/>
							</div>
						</div>
						<div className={formstyle["machine-specific-content"]}>
							{activeTab === "fan" && <Fan />}
							{activeTab === "motor" && <Motor />}
							{activeTab === "power-tools" && <PowerTools />}
							<button className={formstyle.submitButton} type="submit">Submit</button>
						</div>
					</section>
				</aside>
			</div>
		</div>
	</dialog>
  );
};

export default Form;