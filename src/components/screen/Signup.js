import { useState } from "react"
import React from 'react'
import {Link,useNavigate} from "react-router-dom"
export default function Signup() {
  let navigate=useNavigate();
    const[credentials,setcredentials]=useState({name:"",Email:"",Password:"",location:""})
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://deploy-mern-api-alpha.vercel.app/createuser", {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            name: credentials.name,
            Email: credentials.Email,
            Password: credentials.Password,
            location: credentials.location
          })
        });
      
        const json = await response.json();
        console.log(json)
        if(!json.success){
            alert('Enter valid credentials')
        }
        if(json.success){
          <div class="alert alert-success" role="alert">
  successfully Registered
</div>
        
          navigate("/login")
        }
      };
      
    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
    <div>
<section
  className="vh-100 bg-image"
  style={{
    backgroundImage:
      'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'
  }}
>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{ borderRadius: 15 }}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">
                Create an account
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example1cg"
                    className="form-control form-control-lg"
                    name="name"
                    defaultValue={credentials.name}
                    onChange={onChange}
                  />
                  <label className="form-label" htmlFor="form3Example1cg">
                    Your Name
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3cg"
                    className="form-control form-control-lg"
                    name="Email"
                    defaultValue={credentials.Email}
                    onChange={onChange}
                  />
                  <label className="form-label" htmlFor="form3Example3cg">
                    Your Email
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4cg"
                    className="form-control form-control-lg"
                    name="Password"
                    defaultValue={credentials.Password}
                    onChange={onChange}
                  />
                  <label className="form-label" htmlFor="form3Example4cg">
                    Password
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="address"
                    id="form3Example4cdg"
                    className="form-control form-control-lg"
                    name="location"
                    defaultValue={credentials.location}
                    onChange={onChange}
                  />
                  <label className="form-label" htmlFor="form3Example4cdg">
                    Address
                  </label>
                </div>
                <div className="form-check d-flex justify-content-center mb-5">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example3cg"
                  />
                  <label className="form-check-label" htmlFor="form2Example3g">
                    I agree all statements in{" "}
                   <Link to="#!" className="text-body">
                      <u>Terms of service</u>
                   </Link>
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                  >
                    Register
                  </button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">
                  Have already an account?{" "}
                 <Link to="/login" className="fw-bold text-body">
                    <u>Login here</u>
                 </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
