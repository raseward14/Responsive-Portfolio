// import components
import Nav from "../components/Navbar/index";
import ProjectCards from "../components/ProjectCards/index";
import "./style.css";

function Portfolio({ backgroundColor }) {

    return (
        <>
            <aside><Nav backgroundColor={backgroundColor} /></aside>
            <h1 className="heading">Portfolio</h1>
            <section><ProjectCards backgroundColor={backgroundColor} /></section>
        </>
    );
};

export default Portfolio;