import "../css/style.css";
import { Nav, NavItem, NavLink } from "reactstrap";

function Navbar() {

    return (
        <div>
            {/* <nav> */}
                {/* <h1><span class="badge badge-secondary" id="top">Richard A Seward<img class="sticker"
                    src="Assets/Images/RAS-xxxs.jpg" alt="RAS sticker"></span></h1> */}
                    <ul class="nav-link">
                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                        <li>
                            <a href="portfolio.html">Portfolio</a>
                        </li>
                        <li>
                            <a href="index.html">About</a>
                        </li>
                    </ul>
                    <div class="burger">
                        <div class="line1"></div>
                        <div class="line1"></div>
                        <div class="line1"></div>
                    </div>
            {/* </nav> */}
        </div>
            );
};

            export default Navbar;

