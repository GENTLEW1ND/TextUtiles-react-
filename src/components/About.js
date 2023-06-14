import React from 'react'

export default function About(props) {
    // const [ myStyle, setMyStyle ] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })
    let myStyle ={
        color:props.mode === "dark"?"white" :"#042743",
        backgroundColor: props.mode === "dark"?"rgb(36 74 104)":"white"
    }

    // const [ btnText, setBtnText ] = useState("Enable dark mode")

    // let myStyle = {
    //     color: "white",
    //     backgroundColor: "black"
    // }
    // const toggleStyle = () => {
    //     if (myStyle.color === "white") {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border:"1px solid white"
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    // }

    return (
        <div className='container' >
            <h1 className='my-3' style={{color:props.mode === "dark"?"white" :"#042743"}}>About us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={myStyle} >
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze your text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                          <strong>TextUtiles gives you a way to analyze your text quickly and efficiently. Be it word count or character count.</strong>  
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                          <strong> TextUtiles is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtiles reports the number of words and charaters. Thus it is suitable for writing text with word/ characger limit.</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                           <strong> This word counter software works in any web Browser such as chrome, firefox, interet explorer, safari etc. It suits to count character in facebook, blog, excel document, pdf doucment, essays, etc</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
