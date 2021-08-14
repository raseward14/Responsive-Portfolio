// import components
import Nav from "../components/Navbar/index";
import Bio from "../components/Bio/index";
import "./style.css";

function About() {

    return (
        <div className="themed-container">
            <aside><Nav /> and useful icons and links</aside>
            <h1 className="heading">About</h1>
            <section><Bio /></section>
        </div>
    );
};

export default About;
