import React from 'react'

const Design = () => {
    return (
        <>
            <main className='garphic-designing'>
                <section className="design mt-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h4 className="center-bar">Designs that bring a smile on faces</h4>
                                <p className="main-para-small">these graphic design services may be just what you’re looking for.
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-4 main">
                                <div className="cards text-center">
                                    <img src="assets/images/graphic-designing/drawing.jpg" alt="" className="img-fluid"/>
                                        <h4 className="main-heading-small mt-4">Drawing Designs</h4>
                                        <p className="main-para-small">Need some design inspiration? Someone who can use their creative
                                            skills to make a design that will really pop?</p>
                                </div>
                            </div>
                            <div className="col-lg-4 main">
                                <div className="cards text-center">
                                    <img src="assets/images/graphic-designing/product.jpg" alt="" className="img-fluid"/>
                                        <h4 className="main-heading-small mt-4">Product Designs</h4>
                                        <p className="main-para-small">Need some walking advertising? Get custom apparel, mugs or caps from
                                            our professional designers.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 main">
                                <div className="cards text-center">
                                    <img src="assets/images/graphic-designing/art.jpg" alt="" className="img-fluid"/>
                                        <h4 className="main-heading-small mt-4">Art & Illustrations</h4>
                                        <p className="main-para-small">Whether you need a mascot designed for your sporting team or a piece of custom wall art you'll get what you need.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Design
