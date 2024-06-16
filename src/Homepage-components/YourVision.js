import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const YourVision = () => {
   AOS.init();

  return (
    <>
      <section className="your-vision">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6 sec">
                  <img src="assets/images/home-page/your-vision.png" className="img-fluid" alt=""/>
               </div>
               <div className="col-lg-6 sec life">
                  <h4 className="main-heading">Your vision brought to life</h4>
                  <p className="main-para">we love that we do helping other people succeed</p>
                  <div className="row quality" data-aos="fade-up" data-aos-offset="150" data-aos-duration="1000">
                     <div className="col-lg-2 text-left text-lg-center">
                        <img src="assets/images/home-page/quality-products.png" className="img-fluid" alt=""/>
                     </div>
                     <div className="col-lg-10 px-3 mt-3">
                        <h4 className="main-heading-small">Quality Products</h4>
                        <p className="main-para-small">Our overly talented and unfathomably experienced group give us the
                           adaptability of making
                           high
                           performing applications for customers.</p>
                     </div>
                  </div>
                  <div className="row quality" data-aos="fade-up" data-aos-offset="150" data-aos-duration="1000">
                     <div className="col-lg-2 text-left text-lg-center">
                        <img src="assets/images/home-page/superior-design.png" className="img-fluid" alt=""/>
                     </div>
                     <div className="col-lg-10 px-3 mt-3">
                        <h4 className="main-heading-small">Superior Designs</h4>
                        <p className="main-para-small">Our focus is mainly on the UX and hence our products are a delight
                           for every user. our
                           products increase customer retention and satisfaction.</p>
                     </div>
                  </div>
                  <div className="row quality" data-aos="fade-up" data-aos-offset="150" data-aos-duration="1000">
                     <div className="col-lg-2 text-left text-lg-center">
                        <img src="assets/images/home-page/well-tested.png" className="img-fluid" alt=""/>
                     </div>
                     <div className="col-lg-10 px-3 mt-3">
                        <h4 className="main-heading-small">Well Tested</h4>
                        <p className="main-para-small">We make unit tests while creating applications to guarantee that the
                           end result is completely
                           useful and bug free.</p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
    </>
  )
}

export default YourVision
