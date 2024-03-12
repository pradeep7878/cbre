import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import CommonContext from './CommonContext';
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import '../StyleSheet/Login.css';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const [inputDetails, setInputDetails] = useState({
        username: "",
        password: ""
    })
    const [error, setError] = useState(false);
    const { loginDetails } = useContext(CommonContext);
    const [showPassword, setShowPassword] = useState(false)
    const pageRender = useNavigate();

    const handleChange = (e) => {
        setInputDetails({
            ...inputDetails,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        if (inputDetails.username === "" || inputDetails.password === "") {
            setError(true)
        } else {
            setError(false);

            const userAvailability = loginDetails.filter((val, index) => {
                return val.username === inputDetails.username && val.password === inputDetails.password;
            })
            const tokenData ={userCredentials:'',LoggedIn:false}

            if (userAvailability.length === 1) {     
                var settokenData={...tokenData,userCredentials:'success',LoggedIn:true}   
                console.log(settokenData)       
                localStorage.setItem('tokenDetails', JSON.stringify(settokenData));

                pageRender('/project/portfolio')

            } else {
                toast.error('Invalid Username or Password')

                var settokenData={...tokenData,userCredentials:'failed',LoggedIn:false}          
                localStorage.setItem('tokenDetails', JSON.stringify(settokenData));
            }
        }
    }

    return (
        // <div>
        //     <div className="container login-component  d-flex justify-content-center align-items-center vh-100 ">
        //     <div className="login-container  rounded-3 p-5 shadow-lg ">
        //             <h2 className='text-center mb-4'>Login</h2>
        //             <form>
        //                 <div className="mb-3">
        //                     <label htmlFor="exampleInputEmail1" className="form-label">Username <span className='text-danger'>*</span></label>
        //                     <input type="username" className="form-control" id="username" aria-describedby="username" name="username" value={inputDetails.username} onChange={handleChange} />
        //                 </div>
        //                 {error && inputDetails.username === '' ? <p className='text-danger mb-0 pb-2'>Username is required</p> : null}

        //                 <div className="mb-3 mt-4 password-container" >
        //                     <label htmlFor="password" className="form-label">Password <span className='text-danger'>*</span></label>
        //                     <input type={showPassword ? 'text' : 'password'} className="form-control" id="password" name="password" value={inputDetails.password} onChange={handleChange} />
        //                     <span className='eye-icon fs-5' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <PiEyeLight /> : <PiEyeSlash />}</span>
        //                 </div>
        //                 {error && inputDetails.password === '' ? <p className='text-danger mb-0 pb-2'>Password is required</p> : null}

        //                 <button type="button" className="btn bg-custom mx-auto d-block mt-5 w-100" onClick={handleSubmit}>Login</button>
        //             </form>
        //             <Toaster />
        //         </div>
        //     </div>
        // </div>

        <>
         <section className="bg-light  ">
           <div className="container">
             <div className="row justify-content-center vh-100 align-items-center">
               <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                 <div className="card border border-light-subtle rounded-3 shadow-sm">
                   <div className="card-body p-3 p-md-4 p-xl-5">
                     <div className="text-center mb-3">
                     <svg className="offcanvas-title d-block mx-auto" id="offcanvasExampleLabel" viewBox="0 0 4304 1024" width="94" height="25" aria-label="CBRE">
                                <path d="M1784.178 783.855h-355.145v-170.808h363.6c45.661 4.228 79.908 41.011 79.908 84.558 0.423 47.353-38.474 86.249-88.363 86.249zM1429.457 225.348h376.707c41.011 6.342 73.566 41.011 73.566 82.444s-32.555 79.908-75.68 84.558h-370.365l-4.228-167.002zM1957.523 495.934c136.562-43.125 160.238-151.359 160.238-240.145 0-136.562-99.779-253.252-396.155-253.252h-554.279v1017.235h552.165c298.913 0 409.262-147.131 409.262-292.149-0.423-175.458-171.23-231.69-171.23-231.69v0z"></path>
                                <path d="M3368.799 4.651h935.214v220.697h-675.197v164.466h608.396v222.811h-608.396v177.572h675.197v233.803h-935.214v-1019.349z"></path>
                                <path d="M2966.302 320.476c-4.228 32.555-38.897 69.338-84.558 69.338h-365.714v-162.352h365.714c43.125 0 77.794 30.441 84.558 71.452v21.562zM2823.399 4.651h-564.849v1019.772h259.594v-411.376h285.807c82.444 2.114 145.017 65.11 145.017 145.017v266.358h255.366v-328.931c0-151.359-153.896-197.021-153.896-197.021s158.124-45.661 158.124-224.925c-2.114-223.656-199.135-268.895-385.163-268.895z"></path>
                                <path d="M998.633 777.090c-4.228 0-355.145 6.342-476.063-4.228-194.907-17.334-264.244-156.010-264.244-268.472 0-140.789 99.779-244.796 255.366-264.244 73.566-8.456 478.6-4.228 482.827-4.228h8.456v-231.267h-467.607c-52.003 2.114-136.562 8.456-222.811 41.011-79.908 36.783-153.896 93.014-208.013 162.352-67.224 88.786-104.007 192.793-104.007 303.141 0 34.669 2.114 69.338 8.456 101.893 32.555 153.896 138.675 281.579 290.035 350.494 52.003 21.562 129.797 47.775 290.035 56.231l86.672 2.114h328.931v-244.796h-8.033z"></path>
                            </svg> 
                     </div>
                     <h2 className="fs-6 fw-normal text-center text-secondary mb-5">Sign in to your CBRE account</h2>
                     <form>
                       <div className="row gy-2 overflow-hidden">
                         <div className="col-12">
                            <div className="mb-3">
                                  <label htmlFor="exampleInputEmail1" className="form-label">Username <span className='text-danger'>*</span></label>
                                  <input type="username" className="form-control" id="username" aria-describedby="username" name="username" value={inputDetails.username} onChange={handleChange} />
                              </div>
                              {error && inputDetails.username === '' ? <p className='text-danger mb-0 pb-2'>Username is required</p> : null}
                          
                         </div>
                         <div className="col-12">
                         <div className="mb-3  password-container" >
                                  <label htmlFor="password" className="form-label">Password <span className='text-danger'>*</span></label>
                                  <input type={showPassword ? 'text' : 'password'} className="form-control" id="password" name="password" value={inputDetails.password} onChange={handleChange} />
                                  <span className='eye-icon fs-5' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <PiEyeLight /> : <PiEyeSlash />}</span>
                              </div>
                              {error && inputDetails.password === '' ? <p className='text-danger mb-0 pb-2'>Password is required</p> : null}

                         </div>

                         <div className="col-12">
                           <div className="d-grid my-3">
                           <button type="button" className="btn bg-custom mx-auto d-block  w-100" onClick={handleSubmit}>Login</button>
                           </div>
                         </div>

                       </div>
                     </form>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        <Toaster />
         </section>
                 </>
    )
}

export default Login
