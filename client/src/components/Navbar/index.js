import "../css/style.css";
import { Nav, NavItem, NavLink } from "reactstrap";

function Navbar() {

    return (
        <div>
            {/* <h1><span class="badge badge-secondary" id="top">Richard A Seward<img class="sticker"
                    src="../../../../Assets/Images/RAS-xxxs.jpg" alt="RAS sticker"></span></h1> */}
            <ul class="nav-link">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/portfolio">Portfolio</a>
                </li>
            </ul>
            <div class="burger">
                <div class="line1"></div>
                <div class="line1"></div>
                <div class="line1"></div>
            </div>
        </div>
    );
};

export default Navbar;

