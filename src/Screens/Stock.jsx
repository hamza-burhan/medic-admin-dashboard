import "../Styles/Stock.css"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Home from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import 'animate.css';
import { useDialogueContext } from "../assets/context";
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import BlockIcon from '@mui/icons-material/Block';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CountUp from "react-countup";
import { Howl } from 'howler';
import clickSound from '../assets/click-button.mp3';
import { useState } from 'react';

import {
    createTheme,
    ThemeProvider,
    alpha,
    getContrastRatio,
} from '@mui/material/styles';

export default function Stock(props) {

    const clicksound = new Howl({
        src: [clickSound],
    });

    const { isDialogueOpen, setisDialogueOpen } = useDialogueContext();
    const blackBase = '#000000';
    const blackMain = alpha(blackBase, 0.7);
    const theme = createTheme({
        palette: {
            black: {
                main: blackMain,
                light: alpha(blackBase, 0.5),
                dark: alpha(blackBase, 0.9),
                contrastText: getContrastRatio(blackMain, '#fff') > 4.5 ? '#fff' : '#111',
            },
        },
    });
    const handleAddProduct = () => {
        setisDialogueOpen(true)
        console.log(isDialogueOpen)
        clicksound.play()
    }
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 10,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));



    return (

        <div className="stock-container">
            <ThemeProvider theme={theme}>
                <div className="top-bar">
                    <CssBaseline />
                    <ElevationScroll {...props} >
                        <AppBar style={{ transition: "background-color 0.3s, box-shadow 0.3s" }}>
                            <Toolbar >
                                <div className="breadcrubms">
                                    <Breadcrumbs aria-label="breadcrumb" >
                                        <Link
                                            underline="hover"
                                            sx={{ display: 'flex', alignItems: 'center' }}
                                            color="inherit"
                                            to={"/dashboard"}
                                        >
                                            <Home fontSize="small" style={{ marginTop: "5px", color: "gray" }} />
                                        </Link>
                                        <Link
                                            underline="hover"
                                            sx={{ display: 'flex', alignItems: 'center' }}
                                            color="inherit"
                                            to={"/dashboard/stock"}
                                        >
                                            <Typography color="text.primary" style={{ color: "#344767" }}>Stock</Typography>
                                        </Link>
                                    </Breadcrumbs>
                                    <Typography color="text.primary" style={{ fontWeight: "600", color: "#344767", fontSize: "17px" }}>Stock</Typography>
                                </div>
                                <div>
                                    <StyledBadge badgeContent={1} color="primary">
                                        <NotificationsIcon fontSize="medium" style={{ marginTop: "5px", color: "gray" }} />

                                    </StyledBadge>
                                </div>
                            </Toolbar>
                        </AppBar>
                    </ElevationScroll>
                    <Toolbar />
                </div>
                <div className="cards-container">

                    <div className="in-stock shadow-drop-2-center"  >
                        <div className="card-info-container">
                            <div className="box-icon" style={{ background: "linear-gradient(195deg, #42424a, #191919)" }}>
                                <Inventory2Icon />
                            </div>
                            <div className="card-info">
                                <span className="card-info-tilte">In-Stock</span>
                                <CountUp duration={1} className="card-info-number tracking-in-expand" end={2300} />
                            </div>
                        </div>
                        <div className="divider-parent">
                            <div className="divider-child" style={{ boxShadow: props.color }}></div>
                        </div>
                        <div className="card-percentage">
                            <span><i>+<CountUp duration={1} className="percent tracking-in-expand" end={55} />%</i> than lask week</span>
                        </div>

                    </div>

                    <div className="in-stock shadow-drop-2-center" >
                        <div className="card-info-container">
                            <div className="box-icon" style={{ background: "linear-gradient(195deg, #49a3f1, #1A73E8)" }}>
                                <BlockIcon />
                            </div>
                            <div className="card-info">
                                <span className="card-info-tilte">Out of Stock</span>
                                <CountUp duration={1} className="card-info-number tracking-in-expand" end={1023} />
                            </div>
                        </div>
                        <div className="divider-parent">
                            <div className="divider-child" style={{ boxShadow: props.color }}></div>
                        </div>
                        <div className="card-percentage">
                            <span><i>+<CountUp duration={1} className="percent tracking-in-expand" end={10} />%</i> than lask month</span>
                        </div>
                    </div>
                    <div className="in-stock shadow-drop-2-center" >
                        <div className="card-info-container">
                            <div className="box-icon" style={{ background: "linear-gradient(195deg, #66BB6A, #43A047)" }}>
                                <FireTruckIcon />
                            </div>
                            <div className="card-info">
                                <span className="card-info-tilte">Incoming Stock</span>
                                <CountUp duration={1} className="card-info-number tracking-in-expand" end={223} />
                            </div>
                        </div>
                        <div className="divider-parent">
                            <div className="divider-child" style={{ boxShadow: props.color }}></div>
                        </div>
                        <div className="card-percentage">
                            <span><i>+<CountUp duration={1} className="percent tracking-in-expand" end={4} />%</i> than lask month</span>
                        </div>
                    </div>
                    <div className="in-stock shadow-drop-2-center" >
                        <div className="card-info-container">
                            <div className="box-icon" style={{ background: "linear-gradient(195deg, #EC407A, #D81B60)" }}>
                                <ShoppingBagIcon />
                            </div>
                            <div className="card-info">
                                <span className="card-info-tilte">All available</span>
                                <CountUp duration={1} className="card-info-number tracking-in-expand" end={2502} />
                            </div>
                        </div>
                        <div className="divider-parent">
                            <div className="divider-child" style={{ boxShadow: props.color }}></div>
                        </div>
                        <div className="card-percentage">
                            <span><i>+<CountUp duration={1} className="percent tracking-in-expand" end={10} />%</i> than lask year</span>
                        </div>
                    </div>
                </div>
                <div className="products-table shadow-drop-2-center">
                    <div className="table-header">
                        <span style={{ fontSize: "18px", marginLeft: "10px" }}>Available Products</span>
                    </div>
                </div>
                <div className="add-new-bt shadow-drop-2-center">
                    <div className="title-bt">
                        <span style={{ fontSize: "20px", fontWeight: "600", marginLeft: "10px" }}>Add New</span>
                        <span style={{ fontSize: "15px", fontWeight: "400", marginLeft: "10px", color: "gray" }}>Add a new product select quantity and price</span>
                    </div>
                    <div className="add-bt" >
                        <Button onClick={handleAddProduct} className="bt" variant="contained" color="black" startIcon={<AddIcon />}>Add new</Button>
                    </div>
                </div>
            </ThemeProvider >
        </div >
    )
}
function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    })
    const backgroundColor = trigger ? "rgba(255, 255, 255, 0.8)" : "transparent";
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        style: {
            backgroundColor: backgroundColor,
            width: "80%",
            borderRadius: "10px",
            marginRight: "30px",
            marginTop: "20px",
            color: "black",
        }

    });
}