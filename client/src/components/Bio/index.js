import "./style.css";
import React from "react";
import headshot from '../Images/richardSeward.jpg';


function Bio() {

  return (

    <div className="bio-container">
      <div className="image-container">
        <img className='my-headshot' src={headshot} />
        <div className="subheading-name">Richard A. Seward</div>
        <div className="subheading1">Certified Full Stack Web Developer</div>
        <div className="subheading3">2U Coding Bootcamp Graduate 2021</div>
        <div className="subheading2">University of Denver</div>
      </div>
      <div className="about-container">
        <p className="about">Hi, my name is Richard, and I'm a full stack web developer based in Loveland, Colorado.</p>
        <p className="about">In June of 2021, I graduated from 2U's Full Stack Web Development Bootcamp as a JavaScript developer. As a language that can be leveraged in both Front, and Backend development, I've spent time crafting comprehensive, and intuitive web based solutions to real-world, every day problems.</p>
        <p className="about">To build the best tools, I strongly believe in foundational technologies that deliver speed, flexibility, and ease of use. I've found full MERN builds comprised of MongoDB to persist data on the backend, node.js and express.js to power the server, and React.js to.. 'react' from client requests on the frontend, accomplish these goals.</p>
        <p className="about">Seeing these building blocks come together, to form quick, reliable, consistent web applications is where my passion for development stems from.</p>
        <p className="about">However, there is another side to development that truely hits home for me, aside from the satisfaction of constructing fast, and smooth applications. As a lifelong artist, Studio Art Minor from Colorado Mesa University, longtime ex-pat, and lover of foreign language, I offer unique perspective, with an underlying eye for the design, and beauty that makes you want to interact with a webpage.</p>
        <p className="about">In the future, I hope to continue learning, and improving as a developer. A little progress every day, goes a long way!</p>
        <p className="about"></p>
      </div>


    </div>

    // custom bio
    // <!--row 1 col-5-->
    // <div className="col-md-4 col-lg-5">

    //   {/* <!--PERSONAL INFO--> */}
    //   <aside>
    //     <div className="accordion" id="accordionExample">
    //       <div className="card">
    //         <div className="card-header" id="headingOne">
    //           <h2 className="mb-0">
    //             <button className="btn btn-link btn-block btn-lg collapsed bg-success text-white" type="button"
    //               data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
    //               Family
    //             </button>
    //           </h2>
    //         </div>

    //         <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
    //           <div className="card-body saira">
    //             I was born in Seattle Washington, and grew up east of Colorado Springs in a small town named Peyton. I
    //             graduated from Falcon High School, and studied Business Management and Economics at Colorado Mesa
    //             University. At Mesa, I ran for the mens varsity cross country and T&F teams, participated as the
    //             director of membership for the Phi Beta Lambda business club, and spent a year as a Residence Hall
    //             Assistant. I graduated in 2014, and taught mathematics at Denver West Leadership Academy in 2015
    //             before working and eventually living in Southeast Asia for about 3 years. I met my wife in Siem Reap,
    //             Cambodia, and a year after our wedding in 2018, she immigrated with me back to the states. We now live
    //             and work in Loveland Colorado. We expect our first baby this summer! I've done a bit of independent
    //             coding study aside from this class.
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card">
    //         <div className="card-header" id="headingTwo">
    //           <h2 className="mb-0">
    //             <button className="btn btn-link btn-block btn-lg collapsed bg-success text-white" type="button"
    //               data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    //               Interests
    //             </button>
    //           </h2>
    //         </div>
    //         <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
    //           <div className="card-body saira">
    //             I enjoy the great outdoors. I've hiked most of Colorado's 14er's and one in Californias Mt. Whitney.
    //             Other interests include running, fly fishing, cycling and camping. I recently picked up hunting, my
    //             stepfathers greatest passion, and brought in my first duck, and foxsquirrel a few months ago. Other
    //             interests include reading, breweries (I'll drink stouts and porters all year), swimming, and football
    //             (otherwise known as soccer) After the pandemic, I aspire to get back to traveling a bit as well!
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card">
    //         <div className="card-header" id="headingThree">
    //           <h2 className="mb-0">
    //             <button class="btn btn-link btn-block btn-lg collapsed bg-success text-white" type="button"
    //               data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
    //               aria-controls="collapseThree">
    //               Background
    //             </button>
    //           </h2>
    //         </div>
    //         <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
    //           <div className="card-body saira">
    //             My work history includes 4 years of teaching, and a handful of work prior ranging from pesticide
    //             application in South Dakota's black hills, to moving and driving for 2 Men and a Truck, to tutoring
    //             statistics at University. I stuck with teaching because its a practical way to work and travel. I now
    //             work as a staffing recruiter for an employment agency in Longmont. Our agency specializes primarily in
    //             low skilled labor, although we do occasionally recruit for skilled administrative, and production
    //             work. I hope to move forward with a more technical position centered around the foundation I build in
    //             this class.
  );
};

export default Bio;