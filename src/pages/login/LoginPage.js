import React from "react";
import "./login.page.css";
import { BsArrowLeft} from "react-icons/bs";
import ZupaLogo  from '../../assets/zupa-logo.svg';
import { Link, useNavigate} from "react-router-dom";


function LoginPage() {
  const navigate = useNavigate();


  return (
    <>
      <div className="main-container text-gray-900 " >
        <div className="left-side">
          <div className="logo-container mt-24">
            <img src={ZupaLogo} alt="zupa" />
          </div>
          <div className="mt-48">
            <h2 className="font-bold text-4xl">Super Charge your business</h2>
            <p className="mt-2 text-lg">Super Charge Growth for your business</p>
          </div>
        </div>


        <div className="right-side ml-24 mt-16 mr-20 md:ml-10 md:mr-5 lg:ml-15 lg:mr-0">
          <div className="top-container  flex flex-row justify-between h-16">
            <div className="back-btn-container flex w-3/5 md:w-1/5">
              <button type="button" 
              className="flex items-center space-x-3"
              onClick={() => navigate('/')}>
               <BsArrowLeft size='1em' />
               <p className="font-bold md:hidden">Go Back</p> 
              </button>
            </div>
            <div className="sign-up-container flex space-x-7 items-center md:text-xs lg:w-4/5">
              <p> Don't have an account</p>
              <button type="button" className="p-4 text-white bg-[#5347DF] rounded-lg">Sign Up</button>
            </div>
          </div>
          <div className="signup-form  mt-24">
            <h1 className="font-bold text-4xl mb-1 ">Sign In into Zupa</h1>
            <p className="text-xl">Enter your details</p>

            <div className=" flex flex-col text-base w-2/4 h-48 mt-3">
              <div className="block">
                <input
                  type="text"
                  className="
                    p-2
                    mt-3
                    block
                    w-full
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                  placeholder="Enter Email Address"
                />
              </div>

              <div className="block">
                <input
                  type="password"
                  className="
                    p-2
                    mt-4
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                  placeholder="Password"
                />
              </div>
              <Link to="/dashboard" className="text-[#515DF1] text-right text-xm m-3 mb-7">Forgot Password?</Link>
              <button type="button" className="focus:outline-none p-4 text-white bg-[#5347DF] rounded-lg w-4/12 md:w-6/12">Login</button>
          
            </div>

            <div className="space">
          
          </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
