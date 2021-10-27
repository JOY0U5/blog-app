import "./navbar.css"

export default function NavBar() {
    return (
        <div className="nav">
            
            <div className="navLeft">
                <i className="navSocialIcon fab fa-facebook"></i>
                <i className="navSocialIcon fab fa-instagram"></i>
                <i className="navSocialIcon fab fa-twitter"></i>
            </div>
            <div className="navCentre">
                <ul className="navLinkList">
                    <li className="navLink">HOME</li>
                    <li className="navLink">ABOUT</li>
                    <li className="navLink">POST</li>
                    <li className="navLink">LOGOUT</li>
                </ul>    
            </div>
            <div className="navRight">
                <img className="navUserIcon" src="/images/usericonfemale.jpg" alt="Female users icon" />
                
                <i className="navSearchIcon fas fa-search"></i>
            </div>
        </div>
    )

}

