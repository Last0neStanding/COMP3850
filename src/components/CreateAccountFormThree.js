import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link , useNavigate} from 'react-router-dom'

function CreateAccountFormThree() {

    const [LoginUser, setLoginUser] = useState([]);

    const titleStyle = {
        /* OneStop */
        "position": "absolute",
        "width": "178px",
        "height": "49px",
        "left": "13px",
        "top": "19px",

        "fontFamily": 'Inter',
        "fontStyle": "italic",
        "fontWeight": 800,
        "fontSize": "36px",
        "lineHeight": "44px",
        "textAlign": "center",

        "color": "#000000"
    }
    
    const welcomeStyle={
        "position": "absolute",
        "width": "345px",
        "height": "104px",
        "left": "8px",
        "top": "224px",
        
        "font-family": "Inter",
        "font-style": "italic",
        "font-weight": "600",
        "font-size": "24px",
        "line-height": "29px",
        "text-align": "center",
        
        "color": "#000000"
    }
    
    const QRLabelStyle={
        "position": "absolute",
        "width": "131px",
        "height": "36px",
        "left": "18px",
        "top": "419px",

        "font-family": "Inter",
        "font-style": "italic",
        "font-weight": "700",
        "font-size": "12px",
        "line-height": "15px",

        "color": "#000000"
    }
    
    const QRBoxStyle={
        "box-sizing": "border-box",

        "position": "absolute",
        "width": "132px",
        "height": "118px",
        "left": "19px",
        "top": "463px",

        "background": "#FFFFFF",
        "border": "1px solid #000000"
        
    }
    
    const LoginBtnLabelStyle={
        "position": "absolute",
        "width": "130px",
        "height": "37px",
        "left": "223px",
        "top": "502px",
        
        "font-family": "Inter",
        "font-style": "italic",
        "font-weight": "800",
        "font-size": "12px",
        "line-height": "15px",
        
        "color": "#000000"
        
    }
    
    const LoginBtnStyle={
        "box-sizing": "border-box",

        "position": "absolute",
        "width": "114px",
        "height": "38px",
        "left": "223px",
        "top": "543px",

        "background": "#FFFFFF",
        "border": "1px solid #000000"
    
    }

    
    const navigate = useNavigate();

    const submitHandler = function(){

    }

    const navBack = function(){
        navigate("/CustomerProfile")
    }
    
    

    return (
        <div id="CreateAccountFormThree">
            <p className="PageTitle" style={titleStyle}> OneStop </p>
            <p style={welcomeStyle}>Welcome! <br/>Enjoy your shopping <br/>experience</p> 
            <p style={QRLabelStyle}>Here is your private <br/> QR Code for log-in:</p>
            <div style={QRBoxStyle}></div>
            <p style={LoginBtnLabelStyle}>Let's start with our <br/> first step</p>
            <button onClick={navBack} style={LoginBtnStyle} type="button">Click here to log-in</button>
        </div>
    )
}

export default CreateAccountFormThree;