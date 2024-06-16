import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Cards3 = () => {
        AOS.init();

    return (
        <>
            <section className="cards-3">
                <div className="container">
                    <div className="row">
                        {/* <!-- design-and-development --> */}
                        <div className="col-lg-4 mb-4 mb-lg-0" data-aos="fade-up" data-aos-offset="150" data-aos-duration="1000">
                            <div className="card">
                                <div className="row justify-content">
                                    <div className="col-lg-8 text my-3 order-2 order-md-1">
                                        <a href="#">
                                            <h4 className="main-heading-small">Design & Development</h4>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 image order-1 order-md-2">
                                        <img src="assets/images/home-page/design-and-development.jpg" alt="" />
                                    </div>
                                </div>
                                <div>
                                    <p className="main-para-small">Tell us what you want to develop and we will bring it to fruition.
                                        From e-commerce to web
                                        development services, we do everything in between.</p>
                                </div>

                            </div>
                        </div>
                        {/* <!-- social media  Marketing --> */}
                        <div className="col-lg-4 mb-4 mb-lg-0" data-aos="fade-up" data-aos-offset="150" data-aos-duration="1000">
                            <div className="card">
                                <div className="row justify-content-between">
                                    <div className="col-lg-8 text my-3 order-2 order-md-1">
                                        <a href="#">
                                            <h4 className="main-heading-small">Social Media Marketing</h4>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 image order-1 order-md-2">
                                        <img src="assets/images/home-page/socila-media-icon.jpg" alt="" />
                                    </div>
                                </div>
                                <div>
                                    <p className="main-para-small">You can turn customers service complaints into loyal fans! We have
                                        amazing tools in place to
                                        listen and monitor the social media community.</p>
                                </div>

                            </div>
                        </div>
                        {/* <!-- digiatl skills program --> */}
                        <div className="col-lg-4 mb-4 mb-lg-0" data-aos="fade-up" data-aos-offset="150" data-aos-duration="1000">
                            <div className="card">
                                <div className="row justify-content-between">
                                    <div className="col-lg-8 text my-3 order-2 order-md-1">
                                        <a href="#">
                                            <h4 className="main-heading-small">Digital Skills Program</h4>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 image order-1 order-md-2">
                                        <img src="assets/images/home-page/digital-skill-icon.jpg" alt="" />
                                    </div>
                                </div>
                                <div>
                                    <p className="main-para-small">We will probably create industry-prepared ability through skills
                                        program that are firmly
                                        lined up with the requirements of recent industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Cards3
