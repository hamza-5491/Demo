import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12 mt-5">
                <a href={props.href} target='_blank' type="button" className="btn card-shadow">
                    <div className="content px-3">
                        <img src={props.img} className="img-fluid" alt="" srcset="" />
                        <div className="row mt-4">
                            <div className="col-6 text-left">
                                <p className="main-para">{props.title}</p>
                            </div>
                            <div className="col-6 text-right">
                                <p className="text">600</p>
                            </div>
                        </div>
                        <h4 className="main-heading text-left mt-1">The services provide for design </h4>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Card
