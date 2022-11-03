import React, { useState } from 'react';

function SecurityConfirmPage() {

    const [Question, setQuestion] = useState([]);
    const [Answer, setAnswer] = useState([]);

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

    const QuestionLabelStyle = {
        /* Security Question */
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
    const QuestionInputStyle = {
        /* Security Question */
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
    const AnswerLabelSyle = {
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
    const AnswerInputSyle = {
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

    const updateQuestionField = (event)=>{
        setQuestion(event.target.value);
    }
    const updateAnswerField = (event)=>{
        setAnswer(event.target.value);
    }


    return (
        <div id="SecurityConfirmPage">
            <p className="PageTitle" style={titleStyle}> OneStop </p>
            <form onSubmit={submitHandler}>
                    <label style={QuestionLabelStyle} htmlFor="QuestionInput" >SECURITY QUESTION</label>
                    <input style={QuestionInputStyle} name="QuestionInput" onChange={updateQuestionField} value={Question}></input>
                    <label style={AnswerLabelSyle} htmlFor="AnswerInput">ANSWER</label>
                    <input style={AnswerInputSyle} name="AnswerInput" onChange={updateAnswerField} value={Answer}></input>

                    <input style={confirmBtnStyle} type="submit" name="submitSecurityBtn" value="CONFIRM" ></input>
                    <input style={cancelBtnSyle} type="button" name="cancelSecurityBtn" value="CANCEL" ></input>
            </form>      
        </div>
    )
}

export default SecurityConfirmPage;