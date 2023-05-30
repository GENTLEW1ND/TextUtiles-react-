import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = ""
        setText(newText)
    }
    const handleLoClick = () => {
        // console.log("Lower was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("")
    // text = "new text" // wrong way to change the state
    // setText ("new text"); // correct way to change the state
    return (
        <>
            <div className='container'>
                <h2>{props.heading} </h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>convert to uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLoClick}>convert to lowercase</button>
                <button className='btn btn-primary mx-1' onClick={handleClearClick}>clear text</button>
            </div>
            <div className='container'>
                <h1>Your text summery </h1>
                <p>{text.split(' ').length} words and {text.length} characters </p>
                {/* {text.split(" ") gives an array which contains words and then we can find the length*/}
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
