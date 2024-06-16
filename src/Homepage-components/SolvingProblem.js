import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const SolvingProblem = () => {
    AOS.init();
    return (
        <>
            <section className="solving-problem">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h4 className="main-heading">Solving Problems, Building Brands </h4>
                            <p className="main-para" data-aos="fade-up" data-aos-offset="550"
                                    data-aos-delay="50"
                                    data-aos-duration="1000">A key reason why we are confident about delivering the results
                                is that we have
                                the best talent in
                                every digital channel. From design and development to SEO services, pay-per-click, content, social,
                                and beyond, we work together to ensure you see the best results across all campaigns.</p>
                        </div>
                        <div className="col-lg-3 col-md-12 mt-5 mt-lg-0">
                            <div className="row">
                                <div className="col-lg-12 col-md-5" data-aos="fade-up"
                                    data-aos-offset="150"
                                    data-aos-delay="50"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-anchor-placement="top-center">
                                    <div className="card text-center">
                                        <div>
                                            <a href="#">
                                                <img src="assets/images/home-page/developing.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <a href="#">
                                                <h4 className="main-heading-small">Developing</h4>
                                            </a>
                                            <p className="main-para-small">You will definitely love the project we will develop for you.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-5" data-aos="fade-up"
                                    data-aos-offset="150"
                                    data-aos-delay="50"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-anchor-placement="top-center">
                                    <div className="card text-center">
                                        <div>
                                            <a href="#">
                                                <img src="assets/images/home-page/seo.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <a href="#">
                                                <h4 className="main-heading-small">SEO</h4>
                                            </a>
                                            <p className="main-para-small">KPI Based SEO services to quantify our accomplishments.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-5" data-aos="fade-up"
                                    data-aos-offset="150"
                                    data-aos-delay="50"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-anchor-placement="top-center">
                                    <div className="card text-center">
                                        <div>
                                            <a href="#">
                                                <img src="assets/images/home-page/digital-markiting.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <a href="#">
                                                <h4 className="main-heading-small">Digital Marketing</h4>
                                            </a>
                                            <p className="main-para-small">Better tools, better marketing, strategies that work</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-12 second-row">
                            <div class="row align-items-end">
                                <div class="col-lg-12 col-md-5" data-aos="fade-up"
                                    data-aos-offset="150"
                                    data-aos-delay="50"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-anchor-placement="top-center">
                                    <div class="card text-center">
                                        <div>
                                            <a href="#">
                                                <img src="assets/images/home-page/designing.jpg" class="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div class="card-body">
                                            <a href="#">
                                                <h4 class="main-heading-small">Designing</h4>
                                            </a>
                                            <p class="main-para-small">Blurring the line between art and technology.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-5" data-aos="fade-up"
                                    data-aos-offset="150"
                                    data-aos-delay="50"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-anchor-placement="top-center">
                                    <div class="card text-center">
                                        <div>
                                            <a href="#">
                                                <img src="assets/images/home-page/customer-support.jpg" class="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div class="card-body">
                                            <a href="#">
                                                <h4 class="main-heading-small">Customer Support</h4>
                                            </a>
                                            <p class="main-para-small">We believe in satisfaction, not apology, we serve differently
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-5 digital-skill" data-aos="fade-up"
                                    data-aos-offset="150"
                                    data-aos-delay="50"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-anchor-placement="top-center">
                                    <div class="card text-center">
                                        <div>
                                            <a href="#">
                                                <img src="assets/images/home-page/digital-skill.jpg" class="img-fluid" alt="" /></a>
                                        </div>
                                        <div class="card-body">
                                            <a href="#">
                                                <h4 class="main-heading-small">Digital Skills</h4>
                                            </a>
                                            <p class="main-para-small">Looking for technology with human interface</p>
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

export default SolvingProblem
