import React, { useState, useRef } from 'react'
import { imgDb, pdfDb } from './firebaseConfig';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

const CareerOption = () => {
    const [img, setImg] = useState(null);
    const [pdf, setPdf] = useState(null);
    const imageRef = useRef();
    const cvRef = useRef();


    const [Career, SetCareer] = useState({
        applyform: "",
        interPeriod: "",
        fname: "",
        lname: "",
        contact: "",
        email: "",
        nationality: "",
        education: "",
        experience: "",
        date: "",
        position: "",
        office: "",
        language: "",
        digits: "",
        gender:""
    });
    let name, value;
    const HandleForm = (e) => {
        name = e.target.name;
        value = e.target.value;
        SetCareer({ ...Career, [name]: value });
    };
    const DataSnd = async (e) => {

        const { applyform,
            interPeriod,
            fname,
            lname,
            contact,
            email,
            nationality,
            education,
            experience,
            date,
            position,
            office,
            language,
            digits,
            gender
         } = Career;
        if (applyform && interPeriod && fname && lname && contact && email && nationality && education && experience && date && position && office && language && digits && img && pdf && gender) {
            e.preventDefault();
            // const imgRef = ref(imgDb, `files/${v4()}`);
            // await uploadBytes(imgRef, img);

            const imgRef = ref(imgDb, `Images/${v4()}`);
            await uploadBytes(imgRef, img);

            const pdfRef = ref(pdfDb, `Cv/${v4()}`);
            await uploadBytes(pdfRef, pdf);


            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    applyform,
                    interPeriod,
                    fname,
                    lname,
                    contact,
                    email,
                    nationality,
                    education,
                    experience,
                    date,
                    position,
                    office,
                    language,
                    digits,
                    gender
                })
            }
            const res = await fetch('https://imageuploaddata-default-rtdb.firebaseio.com/CareerOption.json', options);
            imageRef.current.value = null;
            cvRef.current.value = null;
            if (res) {
                SetCareer({
                    interPeriod: '',
                    fname: '',
                    lname: '',
                    contact: '',
                    email: '',
                    nationality: '',
                    education: '',
                    experience: '',
                    date: '',
                    position: '',
                    office: '',
                    language: '',
                    digits: '',
                    gender: ''
                    // Reset option after sending data
                });
                alert('Data Sent');
            } else {
                alert('Data Can not be sent');
            }
        }
        else {
            alert('Please fill the data')
        }


    }

    return (
        <>
            <section className="career-form my-5">
                <div className="container py-4 px-4">
                    <h3 className='mb-3'>Career Opportunity</h3>
                    <h4 className='mb-3'>Instructions</h4>
                    <p className='mb-3'>✓ Please complete this form to apply for a position at Technifist Limited. It will take you few minutes to complete. ✓ While you have completed this form, please attaching your Snap and CV by clicking on the upload buttons. ✓ Any applications, CVs or Snap submitted outside this process will not be considered. ✓ Only successful candidates will be contacted regarding further steps in the application process. ✓ Contact recruitment@technifist.com if you have any additional questions or queries about this position.</p>
                    <div className="row">
                        <div className="col-lg-12">
                            <form>
                                <div className="row">
                                    <div className="col-lg-6"><div className="form-group">
                                        <label for="exampleFormControlSelect1">Applying from *</label>
                                        <select className="form-control" id="exampleFormControlSelect1" name='applyform' value={Career.applyform} onChange={HandleForm}>
                                            <option value=''>Select One</option>
                                            <option value='Outside UK'>Outside UK</option>
                                            <option value='Within UK'>Within UK</option>
                                        </select>
                                    </div></div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label for="exampleFormControlSelect1">Internship Period *</label>
                                            <select className="form-control" id="exampleFormControlSelect1" name='interPeriod' value={Career.interPeriod} onChange={HandleForm}>
                                                <option value=''>Select One</option>
                                                <option value='3 Months'>3 Months</option>
                                                <option value='6 Months'>6 Months</option>
                                                <option value='12 Months'>12 Months</option>
                                            </select>
                                        </div></div>
                                </div>
                                <h3>Personal</h3>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label for="Fname">First Name *</label>
                                            <input type="text" className="form-control" id="Fname" aria-describedby="emailHelp" name='fname' value={Career.fname} onChange={HandleForm} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label for="Lname">Last Name *</label>
                                            <input type="text" className="form-control" id="Lname" aria-describedby="emailHelp" name='lname' value={Career.lname} onChange={HandleForm} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label for="conntact">Contact No. *</label>
                                            <input type="number" className="form-control" id="contact" aria-describedby="emailHelp" name='contact' value={Career.contact} onChange={HandleForm} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label for="email">Email *</label>
                                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' value={Career.email} onChange={HandleForm} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="">Gender</label>
                                            <input className="form-control" type="text" name="gender" value={Career.gender} onChange={HandleForm}/>
                                        </div>
                                        

                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label for="national">Nationality *</label>
                                            <input type="text" className="form-control" id="national" aria-describedby="emailHelp" name='nationality' value={Career.nationality} onChange={HandleForm} />
                                        </div>
                                    </div>
                                </div>
                                <h3>Education & Experience</h3>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label for="Fname">Highest education level obtained? *</label>
                                            <input type="text" className="form-control" id="Fname" aria-describedby="emailHelp" name='education' value={Career.education} onChange={HandleForm} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label for="Lname">Work Experience *</label>
                                            <input type="text" className="form-control" id="Lname" aria-describedby="emailHelp" name='experience' value={Career.experience} onChange={HandleForm} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker" inline="true">
                                            <label for="example">Earliest date you can join us? *</label>
                                            <input placeholder="Select date" type="text" id="example" className="form-control" name='date' value={Career.date} onChange={HandleForm} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label for="exampleFormControlSelect2">What position are you applying for? *</label>
                                            <select className="form-control" id="exampleFormControlSelect2" name='position' value={Career.position} onChange={HandleForm}>
                                                <option value=''>Select One</option>
                                                <option value='Backend Developer'>Backend Developer</option>
                                                <option value='Frontend Developer'>Frontend Developer</option>
                                                <option value='Graphis Designer'>Graphis Designer</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label for="exampleFormControlSelect2">Your Preferred Office *</label>
                                            <select className="form-control" id="exampleFormControlSelect2" name='office' value={Career.office} onChange={HandleForm}>
                                                <option value=''>Select One</option>
                                                <option value='Peterborough'>Peterborough</option>
                                                <option value='Birmingham'>Birmingham</option>

                                            </select>
                                        </div>

                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label for="exampleFormControlSelect2">Languages (based on conversational ability) *</label>
                                            <select className="form-control" id="exampleFormControlSelect2" name='language' value={Career.language} onChange={HandleForm}>
                                                <option value=''>Select One</option>
                                                <option value='English'>English</option>
                                                <option value='Other'>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <h3>File Attachments</h3>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label for="formFile" className="form-label">Upload your CV</label>
                                            <input className="form-control" type="file" onChange={(e) => setPdf(e.target.files[0])} ref={cvRef} />
                                        </div>

                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label for="formFile" className="form-label">Upload Your Snap</label>
                                            <input className="form-control" type="file" name='' onChange={(e) => setImg(e.target.files[0])} ref={imageRef} />
                                        </div>

                                    </div>
                                </div>
                                <h3>Verification</h3>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label for="Lname">Please enter any two digits *</label>
                                            <input type="text" className="form-control" id="Lname" aria-describedby="emailHelp" name='digits' value={Career.digits} onChange={HandleForm} />
                                        </div>


                                    </div>
                                </div>

                                <button className="btn btn-primary" onClick={DataSnd}>Submit</button>



                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CareerOption

