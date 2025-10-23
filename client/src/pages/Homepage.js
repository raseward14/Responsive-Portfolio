// import React
import React from 'react';
// import components
import Nav from '../components/Navbar/index';
import MERN from '../components/MERNfooter';
import Skills from '../components/Skills';
import Typewriter from '../components/Typewriter';

// import style
import './style.css';

function Homepage({ backgroundColor }) {
  return (
    <div>
      <aside>
        <Nav backgroundColor={backgroundColor} />
      </aside>
      <h1 className="heading">Home</h1>
      <section className="home">
        <Typewriter
          text="Hi! Im Richard, and I'm a Software Engineer."
          delay={100}
        />
        <Skills />
        <MERN />
      </section>
    </div>
  );
}

export default Homepage;
