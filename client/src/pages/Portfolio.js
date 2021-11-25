// import components
import Nav from "../components/Navbar/index";
import ProjectCards from "../components/ProjectCards/index";
import "./style.css";

function Portfolio() {

    return (
        <>
            <aside><Nav /></aside>
            <h1 className="heading">Portfolio</h1>
            <section><ProjectCards /></section>
        </>
    );
};

export default Portfolio;