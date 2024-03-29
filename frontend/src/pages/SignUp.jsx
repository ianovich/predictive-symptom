import React, { useState } from "react";
import signupImg from "../assets/images/signup.png";
import avatar from "../assets/images/avatar-icon.png"
import { Link } from "react-router-dom";
const SignUp = () => {

  const[selectedFile,setSelectedFile]=useState(null)
  const[previewURL, setpreviewURL]= useState(null)

  const[formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    photo:selectedFile,
    gender:'',
    role:''
  })
const handleInputChange = e=>{
  setFormData({...formData,[e.target.name]:e.target.value});
};

const handleFileInputChange= async(event)=>{

  const file =event.target.files[0]

  //cloudinary upload pics
};

const submitHandler =async event=>{
event.preventDefault()

}

  return (
    <section>
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/*----img box---- */}
          <div className="hidden lg:block ">
            <figure>
              <img src={signupImg} width={600} height={450} typeof="image/png" />
            </figure>
          </div>
          {/*----sign up-----*/}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an<span className="text-primaryColor">Account</span>
            </h3>


            <form onSubmit={submitHandler}>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}

                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}

                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
              <label  className="text-headingColor font-bold text-[16px] leading-7">
                Are you a:
                <select name="role"
                value={formData.role}
                onChange={handleInputChange}
                 className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none">
             <option value="patient">Patient</option>
             <option value="doctor">Doctor</option>

                </select>
              </label>
              <label  className="text-headingColor font-bold text-[16px] leading-7">
                Gender:
                <select name="gender"
                 value={formData.gender}
                 onChange={handleInputChange}
                 className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none">
             <option value="male">Male</option>
             <option value="female">Female</option>

                </select>
              </label>

              </div>

              <div className="mb-5 flex items-center gap-3">
                 <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
               <img src={avatar}alt="" className="w-full rounded-full"/>
                 </figure>

               <div className="relative w-[130px] h-[50px]">
                <input
                 type="file"
                name="photo"
                id="customFile"
                onChange={handleFileInputChange}
                accept=".jpg, .png"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
              <label htmlFor="customFile"
               className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem]  py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer">Upload Photo</label>

               </div>

              </div>

              <div className="mt-7">
           <button
           type="submit"
           className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
            Sign Up
           </button>
          <p className="mt-5 text-textColor text-center">
            Already have an account?

           <Link to="/login" className="text-primaryColor font-medium ml-1">Login
           </Link>
          </p>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
