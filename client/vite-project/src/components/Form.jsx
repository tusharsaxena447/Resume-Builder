// import { FormInput, FormGroup, Form } from 'semantic-ui-react'

export default function Form() {
  return (
    <>
      <div className="container mt-4">
        <div>
          <h1>Personal Details</h1>
        </div>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" 
              placeholder="johndoe@example.com"
            />
          </div>

          <div className="row">
            <div className="col-md-4">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="number"
                className="form-control"
                id="phone"
                placeholder="(123) 456-7890"
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
                placeholder="Google"
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
                placeholder="Google"
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
                
              ></input>
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
