import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link , useParams ,useNavigate} from 'react-router-dom'

function CreateAccountFormOne() {

    const [LoginUser, setLoginUser] = useState([]);
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

    const MissStyle = { 
        "position": "absolute",
        "width": "164px",
        "height": "31px",
        "left": "52px",
        "top": "190px",

        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "600",
        "fontSize": "16px",
        "lineHeight": "19px",
        "display": "flex",
        "alignItems": "center",

        "color": "#000000"

    }

    const MissRadioBtnStyle = { 
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "24px",
        "height": "25px",
        "left": "20px",
        "top": "193px"
    }

    const MrStyle = { 
        "position": "absolute",
        "width": "164px",
        "height": "31px",
        "left": "53px",
        "top": "255px",

        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "600",
        "fontSize": "16px",
        "lineHeight": "19px",
        "display": "flex",
        "alignItems": "center",

        "color": "#000000"


    }
    
    const MrRadioBtnStyle = { 
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "24px",
        "height": "25px",
        "left": "20px",
        "top": "255px"

    }

    const MxStyle = { 
        "position": "absolute",
        "width": "164px",
        "height": "31px",
        "left": "52px",
        "top": "322px",

        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "600",
        "fontSize": "16px",
        "lineHeight": "19px",
        "display": "flex",
        "alignItems": "center",

        "color": "#000000"
    }

    const MxRadioBtnStyle = { 
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "24px",
        "height": "25px",
        "left": "19px",
        "top": "322px"

    }

    const NoSayStyle = { 
        "position": "absolute",
        "width": "207px",
        "height": "31px",
        "left": "53px",
        "top": "387px",

        "fontFamily": "'Inter'",
        "fontStyle": "italic",
        "fontWeight": "600",
        "fontSize": "16px",
        "lineHeight": "19px",
        "display": "flex",
        "alignItems": "center",

        "color": "#000000"

    }
    const NoSayRadioBtnStyle = { 
        "boxSizing": "border-box",

        "position": "absolute",
        "width": "24px",
        "height": "25px",
        "left": "20px",
        "top": "390px"

    }




    const backBtnStyle = {
        "boxsizing":"borderbox",
        "position": "absolute",
        "width": "53px",
        "height": "18px",
        "left": "33px",
        "top": "596px",

        // "fontFamily": "Inter",
        // "fontStyle": "normal",
        // "fontWeight": "400",
        // "fontSize": "11px",
        // "lineHeight": "13px",
        // "display": "flex",
        // "alignItems": "center",
        // "textAlign": "center",
        // "textTransform": "uppercase",

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



    
    

    

    const navigate = useNavigate();

    const navBack = function(){
        navigate("/LoginCustomerPage")
    }

    const submitHandler = function(event){
        event.preventDefault();
        // console.log(event.target.prefexRadio.value);
        // console.log($('input[name=scores]:checked').val());
        navigate("/CreateAccountFormTwo", {
            state: {
                userPrefix: event.target.prefexRadio.value
            }
            
        })
    }

    return (
        <div id="CreateAccountFormOne">
            <p className="PageTitle" style={titleStyle}> Can I call you... </p>
            <form onSubmit={submitHandler}>
                    
                    <label style={MissStyle} htmlFor="MissRadioBtn">MISS, MRS, MS</label>
                    <input style={MissRadioBtnStyle} value="Miss" type="radio" name="prefexRadio" id="MissRadioBtn"></input>

                    <label style={MrStyle} htmlFor="MrRadioBtn">MR.</label>
                    <input style={MrRadioBtnStyle} value="Mr" type="radio" name="prefexRadio" id="MrRadioBtn"></input>

                    <label style={MxStyle} htmlFor="MxRadioBtn">MX.</label>
                    <input style={MxRadioBtnStyle} value="Mx" type="radio" name="prefexRadio" id="MxRadioBtn"></input>

                    <label style={NoSayStyle} htmlFor="NoSayRadioBtn">I'D RATHER NOT SAY</label>
                    <input style={NoSayRadioBtnStyle} value="NoSay" type="radio" name="prefexRadio" id="NoSayRadioBtn"></input>           

                    <input style={backBtnStyle} onClick={navBack} type="button" name="BackBtn" value="BACK" ></input>

                    <input style={registerBtnStyle} type="submit" name="NextBtn" value="CONFIRM" ></input>
            </form>      
        </div>
    )
}

export default CreateAccountFormOne;