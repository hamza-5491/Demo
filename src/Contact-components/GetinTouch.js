import React, { useState } from 'react'


const GetinTouch = () => {

    const [Registration, setRegistration] = useState({
        fname: "",
        email: "",
        number: "",
        password: "",
        option: "",
        message: ""
    });
    let name, value;
    const HandleForm = (e) => {
        name = e.target.name;
        value = e.target.value;
        setRegistration({ ...Registration, [name]: value });
    };
    const getData = async (e) => {
        const { fname,
            email,
            number,
            password,
            option,
            message } = Registration; // Destructure option from user
        if (fname && email && number && password && option && message ) {
            e.preventDefault();
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fname,
                    email,
                    number,
                    password,
                    option,
                    message // Include option in the request body
                })
            };
            const res = await fetch('https://imageuploaddata-default-rtdb.firebaseio.com/userData.json', options);
            if (res) {
                setRegistration({
                    fname:'',
                    email:'',
                    number:'',
                    password:'',
                    option:'',
                    message:''
                     // Reset option after sending data
                });
                alert('Data Sent');
            } else {
                alert('Data Can not be sent');
            }
        } else {
            alert('Plz fill the data');
        }
    };

    return (
        <>
            <main className="contact">

                <section className="get-touch">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4 className="left-bar">Get in Touch</h4>
                                <p className="main-para mb-4 pr-5">Do you have a great idea for a startup, yet don’t know to turn your
                                    concept
                                    into digital
                                    presence? Simply send us your prerequisite with our basic citation form.</p>
                                <div className="row detail mb-3">
                                    <div className="col-2 text-center mt-2">
                                        <img src="assets/images/contact-page/lcoation.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-10">
                                        <p className="mb-1 main-para-small">Office #2, Floor #2,</p>
                                        <p className="mb-0 main-para-small">Saeed Center, Sahiwal</p>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-2 text-center mt-2">
                                        <img src="assets/images/contact-page/contact-png.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-10">
                                        <a className="mb-1 main-para-small" href="https://wa.me/923136830576" target="_blank">Contact</a><br />
                                        <a className="mb-1 main-para-small" href="https://wa.me/923136830576" target="_blank">+92 (313) 683 0576</a>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-2 text-center mt-3">
                                        <img src="assets/images/contact-page/email.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-10">
                                        <a className="main-para-small" href="mailto:support@digitalsahiwal.com">Email</a><br />
                                        <a className="main-para-small" href="mailto:support@digitalsahiwal.com">support@digitalsahiwal.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 form px-5 py-5">
                                <h5 className="mb-4">Drop us simple line</h5>
                                <form method='POST'>
                                    <div className="form-group">
                                        <input type="name" className="form-control" id="fname" name='fname' placeholder="Name" onChange={HandleForm} value={Registration.fname} />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="email" name='email' placeholder="Email" onChange={HandleForm} value={Registration.email} />
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-control" id="number" name='number' placeholder="Contact No" onChange={HandleForm} value={Registration.number} />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="Password1" name='password' placeholder="Password" onChange={HandleForm} value={Registration.password} />
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control" id="city" name='option' value={Registration.option} onChange={HandleForm}>
                                            <option className="option" disabled selected value="">-Please choose an option-</option>
                                            <option value='Web Development'>Web Development</option>
                                            <option value='Mobile Application'>Mobile Application</option>
                                            <option value='Graphic Designing'>Graphic Designing</option>
                                            <option value='Digital Marketing'>Digital Marketing</option>
                                            <option value='SEO & Link Building'>SEO & Link Building</option>
                                            <option value='Digital Skills'>Digital Skills</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" id="textarea" rows="4" name='message'
                                            placeholder="Your Comment" onChange={HandleForm} value={Registration.message}></textarea>
                                    </div>
                                    <button type="submit mt-3" className="btn" onClick={getData}>Send Request</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default GetinTouch