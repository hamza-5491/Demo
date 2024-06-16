import React from 'react'

const SeoAudit = () => {
    return (
        <>
            <main className="seo-page">
                <section className="seo-Audit">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-6 text-center">
                                <h4>Get Free SEO Audit</h4>
                                <img src="assets/images/seo-page/SEO-Audit-side-img.png" alt="" className="img-fluid"/>
                            </div>
                            <div className="col-lg-4">
                                <form>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="email" placeholder="Emai address"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="text" placeholder="Your Website URL"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="name" placeholder="Your full name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-control" id="number" placeholder="Phone number"/>
                                    </div>
                                    <button type="submit mt-3" className="btn">Request Audit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                ß</main>
        </>
    )
}

export default SeoAudit
