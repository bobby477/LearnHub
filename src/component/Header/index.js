
import "./index.css"


import {Link } from "react-router-dom";

const Header = () => {

    return(
        <div className="header-bg">
            <Link to="/" className="link">
                <h1 className="head1">LearnHub</h1>
            
            </Link>
            <Link className="link" to="/form"><h1 className="head2">Admin</h1></Link>
        </div>
    )


}

export default Header