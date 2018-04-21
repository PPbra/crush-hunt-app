import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <div className="wrapper d-flex justify-content-between">
                    <ul className="links">
                        <li><Link to="/p/about-us">About Us</Link></li>
                        <li><Link to="/p/privacy">Privacy</Link></li>
                        <li><Link to="/p/terms">Terms</Link></li>
                        <li><Link to="/p/contributing">Contributing</Link></li>
                    </ul>

                    <span className="copyright">© 2018 Crush Hunt</span>
                </div>
            </footer>
        );
    }
}

export default Footer;