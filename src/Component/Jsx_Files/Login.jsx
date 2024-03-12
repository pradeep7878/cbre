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
                     <h2 className='text-center mb-3'>Login</h2>
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
