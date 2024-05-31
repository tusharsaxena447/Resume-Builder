// import { FormInput, FormGroup, Form } from 'semantic-ui-react'

import { useState } from "react";
import axios from "axios"
import  { saveAs } from "file-saver"

export default function Form() {
  const [form,setForm] = useState([{
    "name": "",
    "email": "",
    "phone": "",
    "linkedin":"",
    "github":"",
    "role":"",
    "about_yourself":"",
    "company":"",
    "your_role":"",
    "project1":"",
    "desc1":"",
    "project2":"",
    "desc2":"",
    "college":"",
    "time":"",
    "degree":"",
    "skills" : ""
  }])
  const [hidden, setHidden] = useState("none")
  const [hidden1, setHidden1] = useState(false)
  const [spin, setspin] = useState(false)
  function handleSubmit(event){
    event.preventDefault()
    axios.post('http://localhost:4000/resume', form)
    .then(()=> axios.get("http://localhost:4000/download", 
          {responseType : Blob}))
          .then((res)=>{
            const pdfblob = new Blob([res.data], {
              type : 'application/pdf'
            })
            saveAs(pdfblob , "Resume.pdf")
          })

     setHidden(false) 
     setspin("fa-spin")
     setTimeout(()=>{
       setHidden1("none")

     },2000)
       
  }
  return (
    <>
    <div className="text-center">
      <h1>Lets Build Resume</h1>
      <hr />
    </div>
      <div className="container mt-4">
        <div>
          <h1>Personal Details</h1>
        </div>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" value={form.name} onChange={(e)=>{setForm({...form, name : e.target.value})}}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" 
              placeholder="johndoe@example.com"
              value={form.email}
              onChange={(e)=>{setForm({...form, email : e.target.value})}}
            />
          </div>

          <div className="row">
            <div className="col-md-4">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="(123) 456-7890"
                value={form.phone}
                onChange={(e)=>{setForm({...form, phone : e.target.value})}}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="linkedin" className="form-label">
                LinkedIn
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="linkedin.com/in/johndoe"
                value={form.linkedin}
                onChange={(e)=>{setForm({...form, linkedin : e.target.value})}}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="github" className="form-label">
                GitHub
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="github.com/git/johndoe"
                value={form.github}
                onChange={(e)=>{setForm({...form, github : e.target.value})}}
              />
            </div>
          </div>

          <div className="">
            <div className="w-md-25">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Your Role
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Java Developer"
                value={form.role}
                onChange={(e)=>{setForm({...form, role : e.target.value})}}
              />
            </div>
            <div className="mb-3 w-100">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                About Yourself
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="6"
                placeholder="Maximum 50 words"
                value={form.about_yourself}
                onChange={(e)=>{setForm({...form, about_yourself : e.target.value})}}
              ></textarea>
            </div>
          </div>
          <h1>Work Experience</h1>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Company
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Google"
                value={form.company}
                onChange={(e)=>{setForm({...form, company : e.target.value})}}
              />
            </div>
            <div className="mb-3 w-100">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Your Role
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={form.your_role}
                onChange={(e)=>{setForm({...form, your_role : e.target.value})}}
              ></textarea>
            </div>
          </div>
          <h1>Projects</h1>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Project Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                
                value={form.project1}
                onChange={(e)=>{setForm({...form, project1 : e.target.value})}}
              />
            </div>
            <div className="mb-3 w-100">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Project Description
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={form.desc1}
                onChange={(e)=>{setForm({...form, desc1 : e.target.value})}}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Project Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                
                value={form.project2}
                onChange={(e)=>{setForm({...form, project2 : e.target.value})}}
              />
            </div>
            <div className="mb-3 w-100">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Project Description
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={form.desc2}
                onChange={(e)=>{setForm({...form, desc2 : e.target.value})}}
              ></textarea>
            </div>
          </div>
          <h1>Education</h1>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                College Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="IIT-Bombay"
                value={form.college}
                onChange={(e)=>{setForm({...form, college : e.target.value})}}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Time Period
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="2016-2020"
                value={form.time}
                onChange={(e)=>{setForm({...form, time : e.target.value})}}
              />
            </div>
            <div className="mb-3 w-100">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Specialisation
              </label>
              <input
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Bachelors in Computer Science"
                value={form.degree}
                onChange={(e)=>{setForm({...form, degree : e.target.value})}}
                
              ></input>
            </div>
          </div>
          <h1>Skills</h1>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Java,...."
                value={form.skills}
                onChange={(e)=>{setForm({...form, skills : e.target.value})}}
              />
            </div>
            
            </div>
         
          
          <div className="col-12">
          <div className={`d-${hidden1}`}>
          <button type="submit"   className={`buttonload `}>
  <i className={`fa fa-refresh ${spin}`}></i>Generate Resume
</button>
</div>
          
          </div>
        </form>
        <a href="http://localhost:4000/download" target="_blank" rel="noopener noreferrer">
        <button id="Download" className=  { `btn btn-primary mb-5 d-${hidden}`} >
              Download Resume
            </button>
            </a>
      </div>
    </>
  );
}
