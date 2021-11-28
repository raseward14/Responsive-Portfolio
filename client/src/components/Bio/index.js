import "./style.css";
import React from "react";
import headshot from '../Images/richardSeward.jpg';


function Bio() {

  return (

    <div>
      <p id="bio"><img className='my-headshot' src={headshot} />
        Hi! I live in Loveland, Colorado with my beautiful wife, and new born son, also named Richard! Its a family name that's been around for generations in my family. Outside of family, and work, I spend time fishing. I've recently picked up fly fishing, and I'd be lying if I said it wasn't my favorite. However, I won't say no to a good catfishing trip, or casual boat and bobber day!

        Other interests include running. I ran XC and Track and Field for Colorado Mesa University from 2010 to 2014, and enjoy getting in daily runs. I'm a huge car nerd, and recently rebuilt the transmission of my 70's era Schwinn bicycle.

        My first car was a 1980 Mazda rx7 that I bought when I was 16 (with money I saved for YEARS), and I still have it! I plan to get her back on the road one day.

        I'm always down to knock out a good 14'er, and recently started hunting with my stepfather who's big time into independent lifestyles.

        Fun fact about me, I met my wife in Siem Reap Cambodia, where I lived, and worked for 3 years! I do speak a bit of Khmer, so if you know any, lets practice. I loved Cambodia, and cannot wait to get back to Asia, and do some more exploring.

        So, there's a few fun facts, shoot me a message if you have any questions, and want to connect!
      </p>
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
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </aside>
    // </div>
    // end custom bio
  );
};

export default Bio;