import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link , useNavigate} from 'react-router-dom'



function CustomerProfile({user,setUser}) {

    const [userDisplayName, setUserDisplayName] = useState([]);

    const titleStyle = {
        /* OneStop */
        "position": "absolute",
        "width": "178px",
        "height": "49px",
        "left": "91px",
        "top": "75px",
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
        "width": "147px",
        "height": "23px",
        "left": "19px",
        "top": "25px",
        
        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "800",
        "fontSize": "24px",
        "lineHeight": "29px",
        
        "color": "#000000"
    }
    
    const userDisplayNameStyle={
        "position": "absolute",
        "width": "220px",
        "height": "31px",
        "left": "19px",
        "top": "64px",
        
        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "800",
        "fontSize": "24px",
        "lineHeight": "29px",
        
        "color": "#000000"
    }
    
    const searchBtnStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "67px",
        "height": "27px",
        "left": "19px",
        "top": "129px",

        "background": "#FFFFFF",
        "border": "1px solid #000000",
        "borderRadius": "20px"
    }
    
    const searchBtnTxtStyle={
        "position": "absolute",
        "width": "65px",
        "height": "21px",
        "left": "9px",
        "top": "-11px",

        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "500",
        "fontSize": "13px",
        "lineHeight": "16px",
        "display": "flex",
        "alignItems": "center",
        "textAlign": "center",

        "color": "#000000"
    }
    
    const historyBtnStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "65px",
        "height": "27px",
        "left": "101px",
        "top": "129px",
        
        "background": "#FFFFFF",
        "border": "1px solid #000000",
        "borderRadius": "20px"
    }
    
    const historyBtnTxtStyle={
        "position": "absolute",
        "width": "64px",
        "height": "21px",
        "left": "9px",
        "top": "-11px",
        
        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "500",
        "fontSize": "13px",
        "lineHeight": "16px",
        "display": "flex",
        "alignItems": "center",
        "textAlign": "center",
        
        "color": "#000000"
        
    }
    
    const signOutBtnStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "65px",
        "height": "27px",
        "left": "181px",
        "top": "129px",
        
        "background": "#FFFFFF",
        "border": "1px solid #000000",
        "borderRadius": "20px"
    }
    
    const signOutBtnTxtStyle={
        "position": "absolute",
        "width": "60px",
        "height": "21px",
        "left": "9px",
        "top": "-11px",
        
        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "500",
        "fontSize": "13px",
        "lineHeight": "16px",
        "display": "flex",
        "alignItems": "center",
        "textAlign": "center",
        
        "color": "#000000"
    }
    
    const VIPBorderStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "316px",
        "height": "55px",
        "left": "19px",
        "top": "170px",
        
        "background": "#FFFFFF",
        "border": "1px solid #000000",
        "borderRadius": "20px"
    }
    
    const VIPIconStyle={
        "position": "absolute",
        "width": "42px",
        "height": "42px",
        "left": "14px",
        "top": "8px",
        
        "// background": "url(5455890.png)"
    }
    
    const VIPExpirePrefixStyle={
        "position": "absolute",
        "width": "89px",
        "height": "35px",
        "left": "79px",
        "top": "-3px",
        
        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "500",
        "fontSize": "13px",
        "lineHeight": "16px",
        "display": "flex",
        "alignItems": "center",
        "textTransform": "uppercase",
        
        "color": "#000000"
    }
    
    const VIPExpireValueStyle={
        "position": "absolute",
        "width": "39px",
        "height": "31px",
        "left": "196px",
        "top": "-4px",
        
        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "700",
        "fontSize": "15px",
        "lineHeight": "18px",
        "display": "flex",
        "alignItems": "center",
        "textTransform": "uppercase",
        
        "color": "#000000"
        
    }
    
    const VIPExpiresuffixStyle={
        "position": "absolute",
        "width": "44px",
        "height": "35px",
        "left": "258px",
        "top": "-3px",
        
        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "500",
        "fontSize": "13px",
        "lineHeight": "16px",
        "display": "flex",
        "alignItems": "center",
        "textTransform": "uppercase",
        
        "color": "#000000"
    }
    
    const AdsBorderStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "313px",
        "height": "173px",
        "left": "19px",
        "top": "234px",
        
        "background": "#FFFFFF",
        "border": "1px solid #F5F3E6",
        "boxShadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "borderRadius": "20px"
    }
    
    const adsStyle={
        "position": "absolute",
        "width": "275px",
        "height": "148px",
        "top": "11px",
        "left": "17px",
        
        "// background": "url(Chanel-the-chanel-iconic-Spring-21-handbags-ad-The-Impression-002-1024x668.jpg)",
        "borderRadius": "20px"
    }
    
    const InteractionBorderStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "97px",
        "height": "138px",
        "left": "19px",
        "top": "429px",
        
        "background": "#FFFFFF",
        "border": "1px solid #000000",
        "borderRadius": "20px"
    }
    
    const InteractionImgStyle={
        "position": "absolute",
        "width": "66px",
        "height": "66px",
        "left": "16px",
        "top": "20px",
        
        "// background": "url(2622321.png)"
    }
    
    const InteractionTxtStyle={
        "position": "absolute",
        "width": "71px",
        "height": "18px",
        "left": "13px",
        "top": "88px",
        
        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "500",
        "fontSize": "13px",
        "lineHeight": "16px",
        "display": "flex",
        "alignItems": "center",
        "textAlign": "center",
        
        "color": "#000000",
        "fontVariationSettings": "'slnt' -8"
    }
    
    const IdentityBorderStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "97px",
        "height": "138px",
        "left": "127px",
        "top": "429px",
        
        "background": "#FFFFFF",
        "border": "1px solid #000000",
        "borderRadius": "20px"
    }
    
    const IdentityImgStyle={
        "position": "absolute",
        "width": "66px",
        "height": "66px",
        "left": "16px",
        "top": "20px"
    }
    
    const IdentityTxtStyle={
        "position": "absolute",
        "width": "71px",
        "height": "18px",
        "left": "13px",
        "top": "88px",
        
        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "500",
        "fontSize": "13px",
        "lineHeight": "16px",
        "display": "flex",
        "alignItems": "center",
        "textAlign": "center",
        
        "color": "#000000",
        "fontVariationSettings": "'slnt' -8"
    }
    
    const ImpactBorderStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "97px",
        "height": "138px",
        "left": "235px",
        "top": "429px",
        
        "background": "#FFFFFF",
        "border": "1px solid #000000",
        "borderRadius": "20px"
    }
    
    const ImpactImgStyle={
        "position": "absolute",
        "width": "66px",
        "height": "66px",
        "left": "17px",
        "top": "20px"
    }
    
    const ImpactTxtStyle={
        "position": "absolute",
        "width": "70px",
        "height": "18px",
        "left": "13px",
        "top": "88px",
        
        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "500",
        "fontSize": "13px",
        "lineHeight": "16px",
        "display": "flex",
        "alignItems": "center",
        "textAlign": "center",
        
        "color": "#000000",
        "fontVariationSettings": "'slnt' -8"
    }

    // let userDisplayName = user.prefix+" "+user.firstName+" "+user.lastName;
    useEffect(() => {
        if (user.status=="logged in"){
            console.log("user",user)
            setUserDisplayName(user.userPrefix+" "+user.firstName+" "+user.lastName)
        }else{
            console.log("user",user)
            setUserDisplayName("Klee")
        }
      }, [])

    const navigate = useNavigate();
    
    const signOutFn = function(){
        setUser({"status": "logged out"})
        localStorage.clear()
        navigate("/LoginCustomerPage")
    }


    return (
      <div id="CustomerProfile">
            <p id="LandingTitle" style={welcomeStyle}> Welcome, </p>
            <p style={userDisplayNameStyle}> {userDisplayName} </p>
            <button style={searchBtnStyle}><p style={searchBtnTxtStyle}>Search</p></button>
            <button style={historyBtnStyle}><p style={historyBtnTxtStyle}>History</p></button>
            <button onClick={signOutFn} style={signOutBtnStyle}><p style={signOutBtnTxtStyle}>Sign-Out</p></button>
            <hr  style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .5,
                borderColor : '#000000'
            }}/>
            <div style={VIPBorderStyle}>
                <img alt="image" style={VIPIconStyle} src={require('../assets/5455890_1.png')}/>
                <p style={VIPExpirePrefixStyle}>EXPIRE DAY:</p>
                <p style={VIPExpireValueStyle}>30</p>
                <p style={VIPExpiresuffixStyle}>DAYS</p>
            </div>
            <div style={AdsBorderStyle}>
                <img alt="image" style={adsStyle} src={require('../assets/Chanel-the-chanel-iconic-Spring-21-handbags-ad-The-Impression-002-1024x668.png')}/>
            </div>
            <div style={ InteractionBorderStyle}>
                <img alt="image" style={InteractionImgStyle} src={require('../assets/2622321_1.png')}/>
                <p style={InteractionTxtStyle}>Interaction</p>
            </div>
            <div style={ IdentityBorderStyle}>
                <img alt="image" style={IdentityImgStyle} src={require('../assets/4178034_1.png')}/>
                <p style={IdentityTxtStyle}>Identify</p>
            </div>
            <div style={ ImpactBorderStyle}>
                <img alt="image" style={ImpactImgStyle} src={require('../assets/1380370_1.png')}/>
                <p style={ImpactTxtStyle}>Impact</p>
            </div>
            
      </div>
  );
}

export default CustomerProfile;