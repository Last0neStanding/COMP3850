import React, { useState } from 'react';

function ResetPassPage() {

    const [NewPass, setNewPass] = useState([]);
    const [ConfirmPass, setConfirmPass] = useState([]);

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

    const newPassLabelStyle = {
        /* Security NewPass */
        "position": "absolute",
        "width": "185px",
        "height": "31px",
        "left": "24px",
        "top": "192px",

        "fontFamily": 'Inter',
        "fontStyle": "italic",
        "fontWeight": 600,
        "fontSize": "15px",
        "lineHeight": "18px",
        "display": "flex",
        "alignItems": "center",
        "textTransform": "uppercase",

        "color": "#000000"
    }
    const newPassInputStyle = {
        /* Security NewPass */
        /* Rectangle 97 */
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "311px",
        "height": "35px",
        "left": "26px",
        "top": "218px",

        "background": "#FFFFFF",
        "border": "1px solid #000000"
    }
    const confirmPassLabelStyle = {
        /* answer */
        "position": "absolute",
        "width": "185px",
        "height": "31px",
        "left": "26px",
        "top": "278px",

        "fontFamily": 'Inter',
        "fontStyle": "italic",
        "fontWeight": 600,
        "fontSize": "15px",
        "lineHeight": "18px",
        "display": "flex",
        "alignItems": "center",
        "textTransform": "uppercase",

        "color": "#000000"
    }
    const confirmPassInputStyle = {
        /* Rectangle 98 */

        "boxSizing": "border-box",

        "position": "absolute",
        "width": "311px",
        "height": "35px",
        "left": "26px",
        "top": "303px",

        "background": "#FFFFFF",
        "border": "1px solid #000000"
    }

    const confirmBtnStyle = {
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "161px",
        "height": "43px",
        "left": "100px",
        "top": "454px",

        "background": "#FFFFFF",
        "border": "1px solid #000000",

        "fontFamily": 'Inter',
        "fontStyle": "italic",
        "fontWeight": 800,
        "fontSize": "24px",
        "lineHeight": "29px",
        "alignItems": "center",
        "textAlign": "center",
        "color": "#000000"
        
    }

    const cancelBtnSyle = {
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "161px",
        "height": "43px",
        "left": "100px",
        "top": "522px",

        "background": "#FFFFFF",
        "border": "1px solid #000000",

        "fontFamily": 'Inter',
        "fontStyle": "italic",
        "fontWeight": 800,
        "fontSize": "24px",
        "lineHeight": "29px",
        "alignItems": "center",
        "textAlign": "center",
        "color": "#000000"
    }

    const btnTxtStyle = {
        "position": "absolute",
        "width": "147px",
        "height": "29px",
        "left": "8px",
        "top": "8px",

        "fontFamily": 'Inter',
        "fontStyle": "italic",
        "fontWeight": 800,
        "fontSize": "24px",
        "lineHeight": "29px",
        /* identical to box height */

        // display: flex,
        "margin": "0px",
        "alignItems": "center",
        "textAlign": "center",

        "color": "#000000"
    }

    const submitHandler = function(){

    }

    const updateNewPassField = (event)=>{
        setNewPass(event.target.value);
    }
    const updateConfirmPassField = (event)=>{
        setConfirmPass(event.target.value);
    }


    return (
        <div id="ResetPassPage">
            <p className="PageTitle" style={titleStyle}> OneStop </p>
            <form onSubmit={submitHandler}>
                    <label style={newPassLabelStyle} htmlFor="newPassInput" >NEW PASSWORD</label>
                    <input style={newPassInputStyle} name="newPassInput" onChange={updateNewPassField} value={NewPass}></input>
                    <label style={confirmPassLabelStyle} htmlFor="confirmPassInput">CONFIRM PASSWORD</label>
                    <input style={confirmPassInputStyle} name="confirmPassInput" onChange={updateConfirmPassField} value={ConfirmPass}></input>

                    <input style={confirmBtnStyle} type="submit" name="submitNewPassBtn" value="CONFIRM" ></input>
                    <input style={cancelBtnSyle} type="button" name="backNewPassBtn" value="CANCEL" ></input>
            </form>      
        </div>
    )
}

export default ResetPassPage;