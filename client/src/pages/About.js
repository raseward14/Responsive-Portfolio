// import components
import Nav from "../components/Navbar/index";
import Bio from "../components/Bio/index";
import "./style.css";


function About({ backgroundColor }) {

    return (
        <>
            <aside><Nav backgroundColor={backgroundColor} /></aside>
            <h1 className="heading">About</h1>
            <section><Bio /></section>
        </>
    );
};

export default About;
