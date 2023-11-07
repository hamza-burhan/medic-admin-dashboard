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
function FullLayout() {
    const [animationClass, setAnimationClass] = useState('dialogue-container animate__animated animate__zoomInDown');

    const navigate = useNavigate()
    const location = useLocation();
    const { isDialogueOpen, setisDialogueOpen } = useDialogueContext();
    const dialogueBox = document.getElementById("dialogue")
    if (isDialogueOpen) {
        console.log("dialogueBox:", dialogueBox)
    }
    const handleRoute = (route) => {
        // navigate(route)
    }
    const handleClosebt = () => {
        setAnimationClass("dialogue-container animate__animated animate__zoomOutUp")
        setTimeout(() => {
            setAnimationClass("dialogue-container animate__animated animate__zoomInDown")
            setisDialogueOpen(false)
        }, 1000)

    }
    return (
        <div className="layout-container">
            <div className="sidebar">
                <div className="sidebar-container">
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
                        <IconButton aria-label="delete" onClick={handleClosebt}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                </div>
            </div>}

        </div>

    )
}

export default FullLayout