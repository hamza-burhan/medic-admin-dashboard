import "../Styles/Stock.css"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import 'animate.css';
import { useDialogueContext } from "../assets/context";
import {
    createTheme,
    ThemeProvider,
    alpha,
    getContrastRatio,
} from '@mui/material/styles';
export default function Stock(props) {
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
    }

    return (

        <div className="stock-container">
            <ThemeProvider theme={theme}>
                <div className="top-bar">
                    <CssBaseline />
                    <ElevationScroll {...props} >
                        <AppBar style={{ transition: "background-color 0.3s, box-shadow 0.3s" }}>
                            <Toolbar >
                                <Typography variant="h6" component="div">
                                    Scroll to elevate App bar
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </ElevationScroll>
                    <Toolbar />
                </div>
                <div className="cards-container">
                    <div className="in-stock">
                        <div className="box-icon" style={{ background: "linear-gradient(195deg, #42424a, #191919)" }}></div>
                    </div>
                    <div className="in-stock">
                        <div className="box-icon" style={{ background: "linear-gradient(195deg, #49a3f1, #1A73E8)" }}></div>
                    </div>
                    <div className="in-stock">
                        <div className="box-icon" style={{ background: "linear-gradient(195deg, #66BB6A, #43A047)" }}></div>

                    </div>
                    <div className="in-stock">
                        <div className="box-icon" style={{ background: "linear-gradient(195deg, #EC407A, #D81B60)" }}></div>

                    </div>
                </div>

                <div className="products-table">
                    <div className="table-header">
                        <span style={{ fontSize: "18px", marginLeft: "10px" }}>Available Products</span>
                    </div>
                </div>
                <div className="add-new-bt">
                    <div className="title-bt">
                        <span style={{ fontSize: "20px", fontWeight: "600", marginLeft: "10px" }}>Add New</span>
                        <span style={{ fontSize: "15px", fontWeight: "400", marginLeft: "10px", color: "gray" }}>Add a new product select quantity and price</span>
                    </div>
                    <div className="add-bt" >
                        <Button onClick={handleAddProduct} className="bt" variant="contained" color="black" startIcon={<AddIcon />}>Add new</Button>
                    </div>
                </div>
            </ThemeProvider>
        </div>
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