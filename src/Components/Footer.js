import React from 'react'

const Footer = () => {
  return (
    <>
         <footer>
      <div className="container">
         <div className="row">
            <div className="col-lg-3 d-flex align-items-center justify-content-center mb-5 mb-md-0">
               <a href="#">
                  <img src="assets/images/home-page/logo.png" alt=""/></a>
            </div>
            <div className="col-lg-3 text-center text-md-left">
               <p className="footer-text">About us</p>
               <p className="main-para-small">As a leading digital agency, we’re proud of the accomplishments of our work,
                  delighted to have served
                  and thrilled for the partnerships we’ve developed with digital platforms.</p>
            </div>
            <div className="col-lg-3 text-center text-md-left">
               <p className="footer-text">Our Services</p>
               <ul className="list-group">
                  <a href="#">
                     <li className="list-group-item">Web & Mobile Apps</li>
                  </a>
                  <a href="#">
                     <li className="list-group-item">Graphic Designing</li>
                  </a>
                  <a href="#">
                     <li className="list-group-item">Digital Marketing</li>
                  </a>
                  <a href="#">
                     <li className="list-group-item">SEO & Link Building</li>
                  </a>
               </ul>
            </div>
            <div className="col-lg-3 text-center text-md-left icons">
               <p className="footer-text">Get In Touch</p>
               <a href="#"><i className="fa fa-facebook"></i></a>
               <a href="#"><i className="fa fa-instagram"></i></a>
               <a href="#"><i className="fa fa-youtube"></i></a>
               <a href="#"><i className="fa fa-twitter"></i></a>
               <a href="#"><i className="fa fa-linkedin"></i></a>
               <a href="https://wa.me/923136830576"><i className="fa fa-whatsapp"></i></a>
            </div>
         </div>
      </div>

      <section className="footer-nav">
         <div className="container px-0">
            <nav
               className="navbar navbar-expand-lg align-items-center py-3 justify-content-center justify-content-md-start">
               <p className="main-para mb-0">Developed by Digital Sahiwal</p>
               <div className="d-none d-lg-block  ml-auto">
                  <ul className="navbar-nav">
                     <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                     <li className="nav-item"><a className="nav-link" href="#">Recent Work</a></li>
                     <li className="nav-item"><a className="nav-link" href="#">Digital-skill</a></li>
                     <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                  </ul>
               </div>
            </nav>
         </div>
      </section>
   </footer>
    </>
  )
}

export default Footer
