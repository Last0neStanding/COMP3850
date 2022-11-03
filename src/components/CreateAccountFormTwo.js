import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link , useParams, useNavigate, useLocation} from 'react-router-dom'
import serverRequests from '../serverRequests';

function CreateAccountFormTwo({ setUser}) {


    const [LoginUser, setLoginUser] = useState([]);
    const [FirstName, setFirstName] = useState([]);
    const [LastName, setLastName] = useState([]);
    const [BOD, setBOD] = useState([]);
    const [Email, setEmail] = useState([]);
    const [Pwd, setPwd] = useState([]);

    const location = useLocation();
    let userPrefix = location.state.userPrefix;

    const titleStyle={

    }
    
    const FirstNameLabelStyle={
        "position": "absolute",
        "width": "142px",
        "height": "21px",
        "left": "21px",
        "top": "57px",

        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "600",
        "fontSize": "13px",
        "lineHeight": "16px",

        "color": "#000000"

    }
    
    const FirstNameInputStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "319px",
        "height": "31px",
        "left": "20px",
        "top": "74px",

        "background": "#FFFFFF",
        "border": "1px solid #000000"
    }
    
    const LastNameLabelStyle={
        /* LAST NAME * */
        "position": "absolute",
        "width": "137px",
        "height": "21px",
        "left": "21px",
        "top": "147px",

        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "600",
        "fontSize": "13px",
        "lineHeight": "16px",

        "color": "#000000"
    }
    
    const LastNameInputStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "318px",
        "height": "31px",
        "left": "21px",
        "top": "164px",

        "background": "#FFFFFF",
        "border": "1px solid #000000"
    }
    
    const BODLabelStyle={
        /* BIRTHDATE (DD/MM/YYYY) */

        "position": "absolute",
        "width": "273px",
        "height": "21px",
        "left": "20px",
        "top": "241px",

        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "600",
        "fontSize": "13px",
        "lineHeight": "16px",

        "color": "#000000"

    }
    
    const BODInputStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "318px",
        "height": "31px",
        "left": "22px",
        "top": "259px",

        "background": "#FFFFFF",
        "border": "1px solid #000000"
    }
    
    const EmailLabelStyle={
        /* Email * */

        "position": "absolute",
        "width": "156px",
        "height": "21px",
        "left": "21px",
        "top": "371px",

        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "600",
        "fontSize": "13px",
        "lineHeight": "16px",
        "textTransform": "uppercase",

        "color": "#000000"
    }
    
    const EmailInputStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "319px",
        "height": "31px",
        "left": "22px",
        "top": "389px",

        "background": "#FFFFFF",
        "border": "1px solid #000000"
    }
    
    const PwdLabelStyle={
        /* Password */

        "position": "absolute",
        "width": "156px",
        "height": "20px",
        "left": "21px",
        "top": "478px",

        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "600",
        "fontSize": "13px",
        "lineHeight": "16px",
        "textTransform": "uppercase",

        "color": "#000000"

    }
    
    const PwdInputStyle={
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "319px",
        "height": "31px",
        "left": "22px",
        "top": "497px",

        "background": "#FFFFFF",
        "border": "1px solid #000000"
    }


    const backBtnStyle = {
        "boxsizing":"borderbox",
        "position": "absolute",
        "width": "53px",
        "height": "18px",
        "left": "33px",
        "top": "596px",

        "color": "#000000",
        "border":"1px solid #000000"
    }
    
    const registerBtnStyle = {
        /* Rectangle 9 */
        "boxsizing":"borderbox",
    
        "position":"absolute",
        "width":"62px",
        "height":"18px",
        "left":"264px",
        "top":"596px",
    
        "background":"#FFFFFF",
        "border":"1px solid #000000"
    }



    const setFormErrorMsg = function(errMsg){
        alert(errMsg);
    }

    const updateFirstNameField = (event)=>{
        setFirstName(event.target.value)
    }
    const updateLastNameField = (event)=>{
        setLastName(event.target.value)
    }
    const updateBODField = (event)=>{
        setBOD(event.target.value)
    }
    const updateEmailField = (event)=>{
        setEmail(event.target.value)
    }
    const updatePwdField = (event)=>{
        setPwd(event.target.value)
    }

    const navigate = useNavigate();

    const navBack = function(){
        navigate("/CreateAccountFormOne")
    }

    const submitHandler = function(event){
        event.preventDefault();
        registerFn();
        //type, userPrefix, firstName, lastName, BoD, email, password
    }

    const registerFn = function(){
        console.log(userPrefix);
        serverRequests.registerNewUser(
            "client",
            userPrefix,
            FirstName,
            LastName,
            BOD,
            Email,
            Pwd
        ).then(data => {
            if (data.status === "email taken") {
                setFormErrorMsg('This email is already taken')
            } else if (data.status === "success") {
                const user = {
                    "status": "logged in", 
                    "type": data.type,
                    "email": data.email,
                    "token": data.token,
                    "userPrefix": data.userPrefix,
                    "firstName": data.firstName,
                    "lastName": data.lastName
                }
                setUser(user)
                localStorage.setItem("user", JSON.stringify(user));
                navigate("/CreateAccountFormThree")
                // setRedirectFlag(true)
            } else {
                setFormErrorMsg('Registering was unsuccessful, please try again')
            }
        }).catch(error => {
            setFormErrorMsg('Registering was unsuccessful, please try again later')
        })
    }

    return (
        <div id="CreateAccountFormTwo">
            <p className="PageTitle" style={titleStyle}> Can I call you... </p>
            <form onSubmit={submitHandler}>
                    
                    <label style={FirstNameLabelStyle} htmlFor="FirstNameInput" >FIRST NAME *</label>
                    <input style={FirstNameInputStyle} name="FirstNameInput" onChange={updateFirstNameField} value={FirstName}></input>

                    <label style={LastNameLabelStyle} htmlFor="LastNameInput" >LAST NAME *</label>
                    <input style={LastNameInputStyle} name="LastNameInput" onChange={updateLastNameField} value={LastName}></input>

                    <label style={BODLabelStyle} htmlFor="BODInput" >BIRTHDATE (DD/MM/YYYY)</label>
                    <input style={BODInputStyle} name="BODInput" onChange={updateBODField} value={BOD}></input>

                    <label style={EmailLabelStyle} htmlFor="EmailInput" >EMAIL *</label>
                    <input style={EmailInputStyle} name="EmailInput" onChange={updateEmailField} value={Email}></input>

                    <label style={PwdLabelStyle} htmlFor="PwdInput" >PASSWORD *</label>
                    <input style={PwdInputStyle} name="PwdInput" onChange={updatePwdField} value={Pwd}></input>
                    

                    <input style={backBtnStyle} onClick={navBack} type="button" name="BackBtn" value="BACK" ></input>
                    <input style={registerBtnStyle} type="submit" name="NextBtn" value="CONFIRM" ></input>

                    
                    

                    
            </form>      
        </div>
    )
}

export default CreateAccountFormTwo;