import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams ,useNavigate } from 'react-router-dom'
import serverRequests from '../serverRequests';

function LoginCustomerPage({user, setUser}) {

    const [loginEmail, setloginEmail] = useState([]);
    const [LoginPassword, setLoginPassword] = useState([]);

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

    const loginEmailLabelStyle = {
        /* Login */
        "position": "absolute",
        "width": "128px",
        "height": "27px",
        "left": "46px",
        "top": "174px",

        "fontFamily": 'Inter',
        "fontstyle": "normal",
        "fontWeight": 400,
        "fontSize": "14px",
        "lineheight": "17px",
        "texttransform": "uppercase",

        "color": "#000000"
    }
    const loginEmailInputStyle = {
        "boxsizing": "borderbox",

        "position": "absolute",
        "width": "269px",
        "height": "39px",
        "left": "46px",
        "top": "197px",

        "background": "#FFFFFF",
        "border": "1px solid #000000",
    }
    const LoginPasswordLabelSyle = {
        /* Password */
        "position": "absolute",
        "width": "128px",
        "height": "27px",
        "left": "47px",
        "top": "270px",

        "fontFamily": 'Inter',
        "fontstyle": "normal",
        "fontWeight": 400,
        "fontSize": "14px",
        "lineheight": "17px",
        "texttransform": "uppercase",

        "color": "#000000"
    }
    const LoginPasswordInputSyle = {
        "boxsizing": "borderbox",

        "position": "absolute",
        "width": "269px",
        "height": "39px",
        "left": "46px",
        "top": "291px",

        "background": "#FFFFFF",
        "border": "1px solid #000000"
    }

    const forgotPasswordStyle = {
        /* FOrgot */
        "position": "absolute",
        "width": "61px",
        "height": "14px",
        "left": "262px",
        "top": "336px",

        "fontFamily": 'Inter',
        "fontstyle": "normal",
        "fontWeight": 400,
        "fontSize": "11px",
        "lineheight": "13px",
        /* identical to box height */

        "display": "flex",
        "alignItems": "center",
        "textAlign": "center",
        "texttransform": "uppercase",

        "color": "#000000",
    }

    const orStyle = {
        /* OR */


        "position": "absolute",
        "width": "51px",
        "height": "15px",
        "left": "47px",
        "top": "357px",

        "fontFamily": 'Inter',
        "fontstyle": "italic",
        "fontWeight": 500,
        "fontSize": "14px",
        "lineheight": "17px",
        "texttransform": "uppercase",

        "color": "#000000"
    }

    const QRScanStyle = {
        /* qr code scan */
        "position":"absolute",
        "width":"140px",
        "height":"27px",
        "left":"46px",
        "top":"382px",
    
        "fontFamily":"Inter",
        "fontstyle":"normal",
        "fontWeight":"400",
        "fontSize":"14px",
        "lineheight":"17px",
        "texttransform":"uppercase",
    
        "color":"#000000",
    }
    
    const loginBtnStyle = {
        /* Login */
        "position":"absolute",
        "width":"70px",
        "height":"30px",
        "left":"250px",
        "top":"378px",
    
        "fontFamily":"Inter",
        "fontstyle":"normal",
        "fontWeight":"400",
        "fontSize":"15px",
        "lineheight":"18px",
        // "display":"flex",
        "alignItems":"center",
        "textAlign":"center",
        "texttransform":"uppercase",
    
        "color":"#000000",
    }
    
    const rememberMeStyle = {
        /* REMEMBER ME */
        "position":"absolute",
        "width":"111px",
        "height":"27px",
        "left":"209px",
        "top":"424px",
    
        "fontFamily":"Inter",
        "fontstyle":"normal",
        "fontWeight":"400",
        "fontSize":"14px",
        "lineheight":"17px",
        "texttransform":"uppercase",
    
        "color":"#000000",
    }
    
    const registerLabelStyle = {
        /* don’t have an account? */
        "position":"absolute",
        "width":"157px",
        "height":"27px",
        "left":"46px",
        "top":"492px",
    
        "fontFamily":"Inter",
        "fontstyle":"normal",
        "fontWeight":"400",
        "fontSize":"11px",
        "lineheight":"13px",
        "texttransform":"uppercase",
    
        "color":"#000000",
    }
    
    const rememberMeCheckBoxStyle = {
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "16px",
        "height": "15px",
        "left": "187px",
        "top": "421px",

        "background": "#FFFFFF",
        "border": "1px solid #000000"
    }

    // const registerLabelStyle={

    // }

    const registerBtnStyle = {
        "boxsizing":"borderbox",
    
        "position":"absolute",
        "width":"274px",
        "height":"53px",
        "left":"46px",
        "top":"513px",
        
        "background":"#FFFFFF",
        "border":"1px solid #000000",
    
        "fontFamily":"Inter",
        "fontstyle":"normal",
        "fontWeight":"400",
        "fontSize":"14px",
        "lineheight":"17px",
        // "display":"flex",
        "alignItems":"center",
        "textAlign":"center",
        "texttransform":"uppercase",
    
        "color":"#000000",
    }
    
    
    
    const backBtnStyle = {
        /* Rectangle 9 */
        "boxsizing":"borderbox",
    
        "position":"absolute",
        "width":"62px",
        "height":"18px",
        "left":"264px",
        "top":"596px",
    
        "background":"#FFFFFF",
        "border":"1px solid #000000",
    }

    useEffect(() => {
        // const loggedInUser = localStorage.getItem("user");
        // if (loggedInUser) {
        //   const loggedInUserJson = JSON.parse(loggedInUser);
        //   setUser(loggedInUserJson);
        // }
        if (user.status=="logged in"){
            navigate("/CustomerProfile")
        }
      }, [])

    const loginFn = (userEmail, password) => {
        serverRequests.loginUser(userEmail, password)
        .then(data => {
            if (data.status === "success") {
                const userInfo = {
                    "status": "logged in", 
                    "type": data.type,
                    "email": data.email,
                    "token": data.token,
                    "userPrefix": data.userPrefix,
                    "firstName": data.firstName,
                    "lastName": data.lastName
                }
                setUser(userInfo)
                localStorage.setItem("user", JSON.stringify(userInfo))
                // setRedirectFlag(true)
                navigate("/CustomerProfile")
            } else {
              alert("Username or password incorrect")
            }
        }).catch(error => {
          alert('Could not login, please try again later')
      })
    }

    const updateloginEmailField = (event)=>{
        setloginEmail(event.target.value)
    }
    const updateLoginPasswordField = (event)=>{
        setLoginPassword(event.target.value)
    }

    const navigate = useNavigate();

    const navBack = function(){
        navigate("/")
    }
    
    const navRegister = function(){
        navigate("/CreateAccountFormOne")
    }

    const submitHandler = function(event){
        event.preventDefault();
        if (loginEmail.length === 0) {
            alert("Please enter a username")
            return
        }
        if (LoginPassword.length === 0) {
            alert("Please enter a password")
            return
        }
        loginFn(loginEmail,LoginPassword);





        
    }


    return (
        <div id="LoginCustomerPage">
            <p className="PageTitle" style={titleStyle}> OneStop </p>
            <form onSubmit={submitHandler}>
                    <label style={loginEmailLabelStyle} htmlFor="loginEmailInput" >LOG-IN EMAIL</label>
                    <input style={loginEmailInputStyle} name="loginEmailInput" onChange={updateloginEmailField} value={loginEmail}></input>
                    <label style={LoginPasswordLabelSyle} htmlFor="LoginPasswordInput">PASSWORD</label>
                    <input style={LoginPasswordInputSyle} name="LoginPasswordInput" onChange={updateLoginPasswordField} value={LoginPassword}></input>
                    <div style={orStyle}>OR</div>
                    <Link style={forgotPasswordStyle} to="/">FORGOT</Link>

                    <Link style={QRScanStyle} to="/">QR CODE SCAN</Link>
                    <input style={loginBtnStyle} type="submit" name="submitLoginBtn" value="LOG-IN" ></input>
                    <input style={rememberMeCheckBoxStyle} type="checkbox" name="rememberMeCheckBox" value="REMEMBER ME" ></input>           
                    <label style={rememberMeStyle} htmlFor="rememberMeCheckBox">REMEMBER ME</label>

                    <div style={registerLabelStyle}> DON'T HAVE AN ACCOUNT? </div>
                    <input style={registerBtnStyle} type="button" name="cancelSecurityBtn" value="CREATE ACCOUNT" onClick={navRegister}></input>
                    <input style={backBtnStyle} type="button" name="cancelSecurityBtn" value="BACK" onClick={navBack}></input>
            </form>      
        </div>
    )
}

export default LoginCustomerPage;