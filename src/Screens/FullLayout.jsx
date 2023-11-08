import React from "react";
import '../Styles/Sidebar.css'
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/white-logo.png"
import Divider from "../components/Divider";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import TimelineIcon from '@mui/icons-material/Timeline';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink, useLocation } from 'react-router-dom';
import 'animate.css';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useDialogueContext } from "../assets/context";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';
import DoneIcon from '@mui/icons-material/Done';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Howl } from 'howler';
import clickSound from '../assets/click-button.mp3';
function FullLayout() {
    const [animationClass, setAnimationClass] = useState('dialogue-container animate__animated animate__zoomInDown');
    const [activeStep, setActiveStep] = useState(1);
    const [stepInput, setstepInput] = useState(0);
    const navigate = useNavigate()
    const location = useLocation();
    const { isDialogueOpen, setisDialogueOpen } = useDialogueContext();
    const dialogueBox = document.getElementById("dialogue")
    if (isDialogueOpen) {
        console.log("dialogueBox:", dialogueBox)
    }
    const handleRoute = (route) => {
    }
    const clicksound = new Howl({
        src: [clickSound],
    });
    const handleClosebt = () => {
        setAnimationClass("dialogue-container animate__animated animate__zoomOutUp")
        setTimeout(() => {
            setAnimationClass("dialogue-container animate__animated animate__zoomInDown")
            setisDialogueOpen(false)
            setActiveStep((prevActiveStep) => {
                console.log('prevActiveStep: ', prevActiveStep);
                return 1;
            });
            setstepInput((prevActiveStep) => {
                console.log('prevActiveStep: ', prevActiveStep);
                return 0;
            });
        }, 1000)
        clicksound.play()
    }
    const handleNext = () => {
        setActiveStep((prevActiveStep) => {
            return prevActiveStep + 1;
        });
        setstepInput((prevActiveStep) => {
            return prevActiveStep + 1;
        });
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setstepInput((prevActiveStep) => {
            return prevActiveStep - 1;
        });
    };

    const steps = [
        {
            step: "Step 1",
            icon: <DescriptionIcon style={{ color: "white", marginTop: "5px" }} />,
            title: "Add Info",
            description: "Name & Description",
            inputTitle: "Add Product Info",
            inputDescription: "Please add the following Details(Name & Description)",
            inputs: (
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <TextField label="Name" variant="outlined" style={{ marginTop: "30px" }} />
                    <TextField label="Description" variant="outlined" style={{ marginTop: "30px", }} />

                </div>
            )

        },// Define step names or titles
        {
            step: "Step 2",
            icon: <DriveFileRenameOutlineIcon style={{ color: "white", marginTop: "5px" }} />,
            title: "Additional Info",
            description: "Price & Quantity",
            inputTitle: "Add Product Details",
            inputDescription: "Please add the following Details(Price & Quantity) ",
            inputs: (
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <TextField label="Price" variant="outlined" style={{ marginTop: "30px" }} />
                    <TextField label="Quantity" variant="outlined" style={{ marginTop: "30px" }} />
                </div>
            )
        }, // Define step names or titles
        {
            step: "Step 3",
            icon: <DoneIcon style={{ color: "white", marginTop: "5px" }} />,
            title: "Save Info",
            description: "Save all Details",
            inputTitle: "Finalize Product Details",
            inputDescription: "Please Click on finish 'Button' to Save all details",
            inputs: (
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <TextField label="Type" variant="outlined" style={{ marginTop: "30px" }} />
                    <TextField label="Varient" variant="outlined" style={{ marginTop: "30px" }} />
                </div>
            )
        }];
    const totalSteps = steps.length;
    const progressWidth = ((activeStep - 1) / (totalSteps - 1)) * 100;
    return (
        <div className="layout-container">
            <div className="sidebar">
                <div className="sidebar-container shadow-drop-2-center">
                    <div className="title-container">
                        <img src={logo} alt="logo" className="menu-logo" />
                        <h1 className="title">Medic Admin</h1>
                    </div>
                    <Divider />
                    <NavLink
                        to="/dashboard"
                        className={location.pathname === '/dashboard' ? 'menu-link-dashboard-active' : 'menu-link-dashboard-inactive'}
                        onClick={() => handleRoute('/dashboard')}
                    >
                        <div className="icon-container">
                            <DashboardIcon style={{ marginRight: "10px" }} />
                            <span style={{ fontSize: "15px", }}>Dashboard</span>
                        </div>

                    </NavLink>
                    <NavLink
                        to="/dashboard/stock"
                        className={location.pathname === '/dashboard/stock' ? 'menu-link-dashboard-active' : 'menu-link-dashboard-inactive'}
                    >
                        <div className="icon-container">
                            <Inventory2Icon style={{ marginRight: "10px" }} />
                            <span style={{ fontSize: "15px", }}>Stock</span>
                        </div>
                    </NavLink>
                    <NavLink
                        to="/dashboard/salesPerson"
                        className={location.pathname === '/dashboard/salesPerson' ? 'menu-link-dashboard-active' : 'menu-link-dashboard-inactive'}
                    >
                        <div className="icon-container">
                            <TimelineIcon style={{ marginRight: "10px" }} />
                            <span style={{ fontSize: "15px", }}>Sales Person</span>
                        </div>
                    </NavLink>
                    <NavLink
                        to="/"
                        className={location.pathname === '/' ? 'menu-link-dashboard-active' : 'menu-link-dashboard-inactive'}
                    >
                        <div className="icon-container">
                            <LogoutIcon style={{ marginRight: "10px" }} />
                            <span style={{ fontSize: "15px", }}>Log Out</span>
                        </div>
                    </NavLink>
                </div>
            </div>
            <Outlet />
            {isDialogueOpen && <div className="add-product-dialogue" id="dialogue">
                <div className={animationClass}>
                    <div className="close-bt">
                        <IconButton aria-label="delete" onClick={handleClosebt} style={{ marginTop: "10px" }}>
                            <CloseIcon />
                        </IconButton>

                    </div>
                    <div className="stepper-start-container">
                        <div className="stepper-start">
                            <div className="progress" style={{ width: "20%", height: "80%", position: "relative", marginTop: "30px" }}>
                                <div className="step-indicators" style={{ marginLeft: "90px" }}  >
                                    {steps.map((step, index) => (
                                        <div key={index} className="step-indicator" style={{ top: `${(100 / (totalSteps - 1)) * index}%` }}>
                                            <span className={`step ${index < activeStep ? 'active' : ''}`} >{step.icon}</span>
                                            <span className="step-title">{step.title}</span>
                                            <span className="step-description">{step.description}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="progress-bar-inner" style={{ height: `${progressWidth}%`, width: "3px", marginLeft: "90px" }}></div>
                            </div>
                            <div className="inputs-container">
                                <div className="additional-info">
                                    <span >Step <i style={{ color: "#494A7D", fontWeight: "700" }}>{activeStep} / 3</i></span>
                                    <div style={{ display: "flex", flexDirection: "column", marginTop: "50px" }}>
                                        <span style={{ marginTop: "20px", fontWeight: "900", fontSize: "20px" }}>{steps[stepInput].inputTitle}</span>
                                        <span style={{ marginTop: "5px", fontWeight: "500" }}>{steps[stepInput].inputDescription}</span>
                                    </div>
                                    {steps[stepInput].inputs}
                                    <div style={{ display: "flex", justifyContent: "end", width: "100%", marginTop: "100px" }}>



                                        <Button variant="text" disabled={activeStep === 1} onClick={handleBack} style={{ color: "black" }}>Back</Button>

                                        {activeStep < totalSteps ? (
                                            <button onClick={handleNext} style={{ marginLeft: "10px", backgroundColor: "#494A7D", border: "#494A7D" }}>Next</button>

                                        ) : (
                                            <button onClick={handleClosebt} style={{ marginLeft: "10px", backgroundColor: "#494A7D", border: "#494A7D", cursor: "pointer" }}>Finish</button>
                                        )}
                                    </div>
                                </div>

                            </div>

                        </div>



                    </div>
                </div>
            </div>}

        </div>

    )
}

export default FullLayout