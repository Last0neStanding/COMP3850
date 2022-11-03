import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link , useNavigate} from 'react-router-dom'



function StaffProfile({user,setUser}) {

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
        "width": "69px",
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

    const signOutBtnStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "64px",
        "height": "27px",
        "left": "19px",
        "top": "108px",
        
        "background": "#FFFFFF",
        "border": "1px solid #000000",
        "borderRadius": "20px"
    }
    
    const signOutBtnTxtStyle={
        "position": "absolute",
        "width": "57px",
        "height": "16px",
        "left": "4px",
        "top": "-9px",
        
        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "500",
        "fontSize": "13px",
        "lineHeight": "16px",
        
        "textAlign": "center",
        
        "color": "#000000"
    }
    
    const AdsBorderStyle0={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "176px",
        "height": "104px",
        "left": "159px",
        "top": "31px",
        
        "background": "#FFFFFF",
        "border": "1px solid #F5F3E6",
        "borderRadius": "20px"
    }
    
    const adsStyle0={
        "position": "absolute",
        "width": "167px",
        "height": "92px",
        "left": "5px",
        "top": "6px",
        
        "background": "url(Chanel-the-chanel-iconic-Spring-21-handbags-ad-The-Impression-002-1024x668.jpg)",
        "borderRadius": "20px"
    }
    
    const EngagementBorderStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "60px",
        "height": "55px",
        "left": "23px",
        "top": "169px",
        
        "background": "#FFFFFF",
        "border": "1px solid #000000",
        "borderRadius": "20px"
    }
    
    const EngagementImgStyle={
        "position": "absolute",
        "width": "44px",
        "height": "44px",
        "left": "8px",
        "top": "5px"
    }
    
    const EngagementTxtStyle={
        "position": "absolute",
        "width": "79px",
        "height": "12px",
        "left": "23px",
        "top": "224px",
        
        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "500",
        "fontSize": "11px",
        "lineHeight": "13px",
        "display": "flex",
        "alignItems": "center",
        "textAlign": "center",
        
        "color": "#000000"
    }
    
    const BudgetBorderStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "60px",
        "height": "54px",
        "left": "100px",
        "top": "170px",
        
        "background": "#FFFFFF",
        "border": "1px solid #000000",
        "borderRadius": "20px"
    }
    
    const BudgetImgStyle={
        "position": "absolute",
        "width": "44px",
        "height": "44px",
        "left": "8px",
        "top": "5px"
    }
    
    const BudgetTxtStyle={
        "position": "absolute",
        "width": "59px",
        "height": "13px",
        "left": "113px",
        "top": "224px",
        
        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "500",
        "fontSize": "11px",
        "lineHeight": "13px",
        "display": "flex",
        "alignItems": "center",
        "textAlign": "center",
        
        "color": "#000000" 
    }
    
    const TasksBorderStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "59px",
        "height": "54px",
        "left": "177px",
        "top": "170px",

        "background": "#FFFFFF",
        "border": "1px solid #000000",
        "borderRadius": "20px"
    }
    
    const TasksImgStyle={
        "position": "absolute",
        "width": "44px",
        "height": "44px",
        "left": "8px",
        "top": "5px"
    }
    
    const TasksTxtStyle={
        "position": "absolute",
        "width": "59px",
        "height": "13px",
        "left": "196px",
        "top": "224px",
        
        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "500",
        "fontSize": "11px",
        "lineHeight": "13px",
        "display": "flex",
        "alignItems": "center",
        "textAlign": "center",
        
        "color": "#000000"       
    }
    
    const QRBorderStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "76px",
        "height": "74px",
        "left": "259px",
        "top": "162px",
        
        "background": "#FFFFFF",
        "border": "1px solid #000000"
    }
    
    const InteractionBorderStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "226px",
        "height": "221px",
        "left": "20px",
        "top": "258px",
        
        "background": "#FFFFFF",
        "border": "1px solid #000000",
        "borderRadius": "10px"
    }
    
    const InteractionTitleStyle={
        "position": "absolute",
        "width": "80px",
        "height": "24px",
        "left": "5px",
        "top": "7px",
        
        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "700",
        "fontSize": "14px",
        "lineHeight": "17px",
        "display": "flex",
        "alignItems": "center",
        
        "color": "#000000"
    }
    
    const ActiveTxtStyle={
        "position": "absolute",
        "width": "39px",
        "height": "15px",
        "left": "7px",
        "top": "44px"
    }
    
    const activeMemberBorderStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "37px",
        "height": "38px",
        "left": "7px",
        "top": "78px",
        
        "background": "#FFFFFF",
        "border": "1px solid #000000",
        "borderRadius": "18.5px"
    }
    
    const RecentTxtStyle={
        "position": "absolute",
        "width": "44px",
        "height": "16px",
        "left": "7px",
        "top": "140px",
        
        "fontFamily": "'Jost'",
        "fontStyle": "normal",
        "fontWeight": "700",
        "fontSize": "13px",
        "lineHeight": "19px",
        "display": "flex",
        "alignItems": "center",
        
        "color": "#000000"
    }
    
    const RecentMemberBorderStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "37px",
        "height": "38px",
        "left": "7px",
        "top": "169px",
        
        "background": "#FFFFFF",
        "border": "1px solid #000000",
        "borderRadius": "18.5px"
    }
    
    const MeetingBorderStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "86px",
        "height": "221px",
        "left": "254px",
        "top": "258px",
        
        "background": "#FFFFFF",
        "border": "1px solid #000000"
    }
    
    const LiveChatBorderStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "45px",
        "height": "50px",
        "left": "21px",
        "top": "22px",
        
        "background": "#FFFFFF",
        "border": "1px solid #000000",
        "borderRadius": "10px"
    }
    
    const LiveChatImgStyle={
        "position": "absolute",
        "width": "41px",
        "height": "44px",
        "left": "2px",
        "top": "2px"
    }
    
    const LiveChatTxtStyle={
        "position": "absolute",
        "width": "69px",
        "height": "17px",
        "left": "23px",
        "top": "65px",
        
        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "500",
        "fontSize": "11px",
        "lineHeight": "13px",
        "display": "flex",
        "alignItems": "center",
        "textAlign": "center",
        
        "color": "#000000"
    }
    
    const OSIDBorderStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "45px",
        "height": "50px",
        "left": "21px",
        "top": "131px",

        "background": "#FFFFFF",
        "border": "1px solid #000000",
        "borderRadius": "10px"
    }
    
    const OSIDImgStyle={
        "position": "absolute",
        "width": "39px",
        "height": "40px",
        "left": "2px",
        "top": "2px"
    }
    
    const OSIDTxtStyle={
        "position": "absolute",
        "width": "61px",
        "height": "18px",
        "left": "27px",
        "top": "175px",
        
        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "500",
        "fontSize": "11px",
        "lineHeight": "13px",
        "display": "flex",
        "alignItems": "center",
        "textAlign": "center",
        
        "color": "#000000"
    }
    
    const AdsBorderStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "320px",
        "height": "90px",
        "left": "20px",
        "top": "490px",
        
        "background": "#FFFFFF",
        "border": "1px solid #FFFFFF",
        "boxShadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "borderRadius": "20px"
    }
    
    const adsStyle={
        "position": "absolute",
        "width": "292px",
        "height": "70px",
        "left": "14px",
        "top": "10px",
        "borderRadius": "20px"
    }
    
    
    

    // let userDisplayName = user.prefix+" "+user.firstName+" "+user.lastName;
    useEffect(() => {
        if (user.status=="logged in"){
            setUserDisplayName(user.userPrefix+" "+user.firstName+" "+user.lastName)
        }
      }, [])

    const navigate = useNavigate();
    
    const signOutFn = function(){
        setUser({"status": "logged out"})
        localStorage.clear()
        navigate("/")
    }


    return (
      <div id="StaffProfile">
            <p id="LandingTitle" style={welcomeStyle}> Welcome, </p>
            <p style={userDisplayNameStyle}> {userDisplayName} </p>
            <button onClick={signOutFn} style={signOutBtnStyle}><p style={signOutBtnTxtStyle}>Sign-Out</p></button>
            <div style={AdsBorderStyle0}>
                <img alt="image" style={adsStyle0} src={require('../assets/Chanel-the-chanel-iconic-Spring-21-handbags-ad-The-Impression-002-1024x668.png')}/>
            </div>
            <hr  style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .5,
                borderColor : '#000000'
            }}/>
            
            
            <div style={ EngagementBorderStyle}>
                <img alt="image" style={EngagementImgStyle} src={require('../assets/5760043.png')}/>
            </div>
            <p style={EngagementTxtStyle}>Engagement</p>
            <div style={ BudgetBorderStyle}>
                <img alt="image" style={BudgetImgStyle} src={require('../assets/2519276.png')}/>
            </div>
            <p style={BudgetTxtStyle}>Budget</p>
            <div style={ TasksBorderStyle}>
                <img alt="image" style={TasksImgStyle} src={require('../assets/4245307.png')}/>
            </div>
            <p style={TasksTxtStyle}>Tasks</p>

            <div style={ QRBorderStyle}>
                
            </div>

            <div style={ InteractionBorderStyle}>
                <p style={InteractionTitleStyle}>Interaction</p>

                <p style={ActiveTxtStyle}>Active</p>
                <div style={activeMemberBorderStyle}></div>

                <p style={RecentTxtStyle}>Recent</p>
                <div style={RecentMemberBorderStyle}></div>
            </div>
            <div style={ MeetingBorderStyle}>
                <div style={ LiveChatBorderStyle}>
                    <img alt="image" style={LiveChatImgStyle} src={require('../assets/4245307.png')}/>
                </div>
                <p style={LiveChatTxtStyle}>LiveChat</p>
                
                <div style={ OSIDBorderStyle}>
                    <img alt="image" style={OSIDImgStyle} src={require('../assets/4245307.png')}/>
                </div>
                <p style={OSIDTxtStyle}>OSID</p>
            </div>

            <div style={AdsBorderStyle}>
                <img alt="image" style={adsStyle} src={require('../assets/halloween-sale-promotion-poster-banner-with-halloween-pumpkin-fashion-shopping-clothes-gift-box-with-product-podium-scenewebsite-spookybackground-banner-halloween-template-3d-render_156429-3990.png')}/>
            </div>
            
      </div>
  );
}

export default StaffProfile;