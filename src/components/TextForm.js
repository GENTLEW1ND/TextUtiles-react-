import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to upper case!", "success")
    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = ""
        setText(newText)
        props.showAlert("Text cleared!", "success")
    }
    const handleLoClick = () => {
        // console.log("Lower was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lower case!", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges() //this are both function of react that is use to deselect the copyed area but it will still copy but wont show.
        props.showAlert("Text copied!", "success")
    }//for copying the text from the clipboard
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")
    }
    const [text, setText] = useState("")
    // text = "new text" // wrong way to change the state
    // setText ("new text"); // correct way to change the state
    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h2>{props.heading} </h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === "dark" ? "#13466e" : "white",
                        color: props.mode === "dark" ? "white" : "#042743"
                    }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>convert to uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>convert to lowercase</button>
                <button disabled={text.length===0}className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>clear text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>copy text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>remove extra space</button>
            </div>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h1>Your text summery </h1>
                <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
                {/* {text.split(" ") gives an array which contains words and then we can find the length*/}
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
