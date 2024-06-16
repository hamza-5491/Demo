import React from 'react'

const CommonlyAsk = () => {
    return (
        <>
            <section className="about">
                <div className="container">
                    <div className="commonly">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src="assets/images/about-page/Commonly-side-img.jpg" alt="" className="img-fluid" />
                            </div>
                            <div className="col-lg-6">
                                <h4 className="left-bar">Commonly Asked Questions</h4>

                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left" type="button"
                                                    data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                                    aria-controls="collapseOne">
                                                    Can you show us examples of your work?
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                            </h2>
                                        </div>

                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                            data-parent="#accordionExample">
                                            <div className="card-body">
                                                We have worked for different clients. We plan and assemble sites, create client
                                                arranged applications and make activitys to expand the change pace of your site
                                                or application. For more information,<a href="#"> see our most recent work
                                                    done.</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left collapsed pr-4" type="button"
                                                    data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                                    aria-controls="collapseTwo">
                                                    What if I need to design for a website/mobile app, how is this organized?
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                            data-parent="#accordionExample">
                                            <div className="card-body">
                                                Before we start designing we first need to understand your needs. Which target
                                                group do you have in mind and which goals do you want to achieve. Then we make a
                                                creative brief and formulate a strategic concept. Now we can describe the
                                                customer journeys. The next step is the UX design, which forms the basis for the
                                                visual (UI) design. During this design process, we involve you by asking for
                                                regular feedback.

                                                We will complete the design based on your feedback. We discuss the design
                                                extensively with you so that you have a good idea of ​​what we are going to
                                                build. Creating content can be started based on the detailed design.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left collapsed" type="button"
                                                    data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                                    aria-controls="collapseThree">
                                                    Can you test the technical feasibility of my idea?
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                            data-parent="#accordionExample">
                                            <div className="card-body">
                                                Sometimes you have a good idea but you cannot properly estimate whether it is
                                                technically feasible or what the realization will cost. In that case, we are
                                                happy to help you. You just need to submit simple quotation form. Once we
                                                receive basic requirement one of our expert will contact you back with no time.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CommonlyAsk
