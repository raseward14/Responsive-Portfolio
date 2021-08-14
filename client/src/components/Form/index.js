import "./style.css";

function Form() {

    return (


        // <!--1 row 2 col-->
        <section className="row">

            {/* <!--row 1 col-md-7--> */}
            <section className="col-xs-12 col-md-7 col-lg-7">

                {/* <!--jumbotron containing contact info--> */}
                <section className="jumbotron">
                    <div className="row">
                        <div className="col-xs-12 col-lg-6">
                            <h1 className="display saira"><strong>Contact Me</strong></h1>
                        </div>
                        <div className="col-lg-6">
                            <p className="lead"> Lets connect!</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-md-12 col-lg-12">
                            <form>

                                <div className="form-group saira">
                                    <label for="input-name">Name</label>
                                    <input type="text" className="form-control" id="input-name" aria-describedby="nameHelp" />
                                </div>

                                <div className="form-group saira">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                        anyone else.</small>
                                </div>

                                <div className="form-group saira">
                                    <label for="exampleInputPassword1">Phone</label>
                                    <input type="phone number" className="form-control" id="exampleInputPhone1"
                                        aria-describedby="phoneHelp">
                                        <small id="phoneHelp" className="form-text text-muted">555-555-5555 or
                                            (555)555-5555</small>
                                </div>

                                    <div className="form-group saira">
                                        <label for="exampleFormControlTextarea1">Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-lg bg-success text-white">Submit</button>
                            </form>
                         </div>
                        </div>
                </section>

                </section>
                {/* <!--row 1 col-5--> */}
                <div className="col-md-5 col-lg-5">

                    {/* <!--aside containing my contact information--> */}
                    <aside className="contact">
                        <ul className="list-group">
                            <li className="list-group-item saira"><strong>Email:</strong> <em>raseward14@gmail.com</em></li>
                            <li className="list-group-item saira"><strong>Phone:</strong><em> 970.430.8559</em></li>
                            <li className="list-group-item">
                                <a className="btn btn-primary btn-lg text-white"
                                    href="https://www.linkedin.com/in/richard-seward-7b9336102/" role="button"
                                    target="null">LinkedIn <i className="fab fa-linkedin fa-lg"></i></a>
                                <a className="btn btn-primary btn-lg btn-dark text-white" href="https://github.com/raseward14"
                                    role="button" target="null">Github <i className="fab fa-github"></i></a>
                                <a className="btn btn-primary btn-lg btn-danger text-white"
                                    href="Assets/pdf/Richard_Seward_Web_Dev.pdf" download="richardSewardResume"
                                    role="button" target="null">Resume PDF <i className="fas fa-file-pdf"></i></a>
                            </li>
                        </ul>
                    </aside>
                </div>
            </section>

        </section>



    );
};

export default Form;