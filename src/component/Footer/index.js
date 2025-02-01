import {Link } from "react-router-dom";

import "./index.css"



const Footer = () => {

    return(
        <>

                <div className="bottom">
                    <h1 className="btm">LearnHub</h1>
                    <p className="para">2022 Tailwind Labs Inc.All rights reserved</p>
                    <div className="links">
                        <Link className="linkfooter" to="/form">Form</Link>
                        <p className="vertical">|</p>
                        <Link to="/Notes" className="linkfooter">Notes</Link>


                    </div>
                </div>
        </>

    )

}

export default Footer