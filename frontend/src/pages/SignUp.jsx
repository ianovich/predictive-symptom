import React from "react";
import signupImg from "../assets/images/signup.png";
const SignUp = () => {
  return (
    <section>
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/*----img box---- */}
          <div className="hidden lg:block ">
            <figure>
              <img src={signupImg} />
            </figure>
          </div>
          {/*----sign up-----*/}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an<span className="text-primaryColor">Account</span>
            </h3>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value=""
                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value=""
                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value=""
                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
              <label htmlFor="" className="text-headingColor font-bold text-[16px] leading-7">
                Are you a:
                <select name="role" className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none">
             <option value=""></option>
             <option value=""></option>

                </select>
              </label>

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
