import React from 'react';
import { useParams ,useNavigate } from 'react-router-dom';

function LandingPage() {

    const navigate = useNavigate();
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

    const customerBtntxtStyle = {
        /* Customer */
        "position": "absolute",
        "width": "195px",
        "height": "37px",
        "left": "11px",
        "top": "15px",

        "fontFamily": 'Inter',
        "fontStyle": "italic",
        "fontWeight": 800,
        "fontSize": "24px",
        "lineHeight": "29px",
        "align-items": "center",
        "textAlign": "center",
        "margin" : "0px",

        "color": "#000000"
    }
    const customerBtnStyle = {
        "box-sizing": "border-box",

        "position": "absolute",
        "width": "219px",
        "height": "61px",
        "left": "29px",
        "top": "240px",

        "background": "#FFFFFF",
        "border": "1px solid #000000"
    }
    const staffbtnTxtStyle = {
        /* Staff */
        "position": "absolute",
        "width": "195px",
        "height": "37px",
        "left": "12px",
        "top": "14px",

        "fontFamily": 'Inter',
        "fontStyle": "italic",
        "fontWeight": 800,
        "fontSize": "24px",
        "lineHeight": '29px',
        // "display": "flex",
        "margin":"0px",
        "align-items": "center",
        "textAlign": "center",

        "color": "#000000"
    }

    const staffBtnStyle = {
        /* Rectangle 4 */
        "box-sizing": "border-box",

        "position": "absolute",
        "width": "219px",
        "height": "61px",
        "left": "91px",
        "top": "365px",

        "background": "#FFFFFF",
        "border": "1px solid #000000"
    }


    const navCustomer = function(){
        navigate("/LoginCustomerPage");
    }
    const navStaff = function(){
        navigate("/StaffProfile");
    }

    return (
      <div id="LandingPage">
            <p id="LandingTitle" style={titleStyle}> OneStop </p>
            <button style={customerBtnStyle} onClick={navCustomer}><p style={customerBtntxtStyle}>Customer</p></button>
            <button style={staffBtnStyle} onClick={navStaff}><p style={staffbtnTxtStyle}>Staff</p></button>
      </div>
  );
}

export default LandingPage;