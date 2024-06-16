import React from 'react'

const PaidMedia = () => {
    return (
        <>
            <main className="digital-markiting">

                <section className="paid-media">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 text-center text-md-left">
                                <h4 className="left-bar">Paid Media</h4>
                                <p className="main-para">We study your audience and make highly targeted ads on social media
                                    platforms. We dissect, A/B test, and track ROI to create quantifiable outcomes for your
                                    business</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img src="assets/images/digital-markiting/our-ppc.png" className="img-fluid" alt=""/>
                                            <h4 className="main-heading-small my-3">Our PPC Process</h4>
                                            <p className="main-para-small">We can run PPC campaigns for lead generation, singular items,
                                                and marking activities to give you quick results.</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src="assets/images/digital-markiting/run-ads.png" className="img-fluid" alt=""/>
                                            <h4 className="main-heading-small my-3">Run Successful Ads</h4>
                                            <p className="main-para-small">Being an expert Digital Agency, we realize how to catch your
                                                audience’s consideration and get the change rate you need.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-5">
                                <img src="assets/images/digital-markiting/paid-media-side-img.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default PaidMedia
