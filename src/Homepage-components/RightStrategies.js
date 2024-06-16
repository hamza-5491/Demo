import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const RightStrategies = () => {
    AOS.init();

    return (
        <>
            <section className="rightstrategies">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8 pl-0"><img src="assets/images/home-page/Right-Strategies.jpg"
                            className="img-fluid" alt="" /></div>
                        <div className="col-lg-6 col-md-8 pl-lg-5">
                            <h2 className="main-heading">Right Strategies, Implementation, and Success</h2>
                            <h4>Let’s Make an Effective Goal Plan</h4>
                            <p className="main-para-small" data-aos="fade-up" data-aos-offset="450" data-aos-duration="1000">We fuse methodology, inventiveness, and innovation to
                                convey remarkable and
                                successful marking,
                                sites, computerized showcasing and promoting lobbies for our customers.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default RightStrategies
