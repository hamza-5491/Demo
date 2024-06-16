import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import '../node_modules/animate.css/source/animate.css'


const Hero = () => {
    return (
        <>
            <OwlCarousel
                items={1}
                className="hero"
                loop="true"
                autoplay="true"
                autoplayTimeout={3000}
                animateOut='slideOutDown'
                animateIn='flipInX'
                smartSpeed={450}
            >

            <div class="item d-flex align-items-center">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 d-none d-md-block">
                            <h4>Making the World <br />Talk about You </h4>
                            <p class="main-para">helping you open windows of opportunities worldwide</p>
                        </div>
                        <div class="col-lg-6 px-5 py-5">
                            <img src="assets/images/home-page/home-version-five-banner-side-img1.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <div class="item d-flex align-items-center">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 d-none d-md-block">
                            <h4>Making the World <br />Talk about You </h4>
                            <p class="main-para">helping you open windows of opportunities worldwide</p>
                        </div>
                        <div class="col-lg-6 px-5 py-5">
                            <img src="assets/images/home-page/home-version-five-banner-side-img1.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>



        </OwlCarousel >
        </>
    )
}

export default Hero
