import React,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom"
export default function Login() {
  let navigate=useNavigate();
  const[credentials,setcredentials]=useState({Email:"",Password:""})
  const [alertVisible, setAlertVisible] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://deploy-mern-api-alpha.vercel.app/loginuser", {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
          
            Email: credentials.Email,
            Password: credentials.Password,
         
          })
        });
      
        const json = await response.json();

        console.log(json)
        if(!json.success){
            alert('Enter valid credentials')
        }
        if(json.success){
          navigate("/")
          setAlertVisible(true);
          setTimeout(() => {
            setAlertVisible(false);
          }, 5000);
          console.log("hi")
          localStorage.setItem("userEmail",credentials.Email)
          localStorage.setItem("authToken",json.authToken)
          
        }
      };
      
    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }



    const dividerStyles = `
    .divider:after,
    .divider:before {
      content: "";
      flex: 1;
      height: 1px;
      background: #eee;
    }
  `;

  const hCustomStyles = `
    .h-custom {
      height: calc(100% - 73px);
    }

    @media (max-width: 450px) {
      .h-custom {
        height: 100%;
      }
    }
  `;



  return (
    <div>
      {alertVisible && (
        <div className="alert alert-danger" role="alert" height="300px">
            successfully Login
            
        </div>
        
      )}
       <style>{dividerStyles}</style>
      <style>{hCustomStyles}</style>
        <section className="vh-100 h-200">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-200">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="..."
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  name="Email"
                  value={credentials.Email}
                  onChange={onChange}
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  name="Password"
                  value={credentials.Password}
                  onChange={onChange}
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?<Link to="/Createuser" className="link-danger">Register</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
   
    <div className="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>
  
    <div>
     <Link to="#!" className="text-white me-4">
        <i className="fab fa-facebook-f"></i>
      </Link>
     <Link to="#!" className="text-white me-4">
        <i className="fab fa-twitter"></i>
      </Link>
     <Link to="#!" className="text-white me-4">
        <i className="fab fa-google"></i>
      </Link>
     <Link to="#!" className="text-white">
        <i className="fab fa-linkedin-in"></i>
      </Link>
    </div>

  </div>
</section>
</div>















  )
}
