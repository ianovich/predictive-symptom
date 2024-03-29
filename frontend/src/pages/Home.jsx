import React from "react";

import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";

import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import {BsArrowRight, } from 'react-icons/bs';
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorsList from "../components/Doctors/DoctorsList";
const Home = () => {
  return (
    <>
      {/*---Hero---*/}
      
        <section className="hero__section pt-[60px] 2xl:h-[800px] ">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/*----Hero content---*/}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46xp] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    Your Health is Your Priority and Your Wealth!
                  </h1>
                  <p className="text__para">
                    Discover your health insights with our Symptom Checker. Get
                    personalized wellness recommendations based on your symptoms
                    with our Health Experts. Start your journey to better health
                    now!
                  </p>
                  <button className="btn">Request an Appointment</button>
                </div>

                {/*-----hero counter-----*/}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">20+</h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] "></span>
                    <p className="text__para">Years of Experience</p>
                  </div>

          

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">100%</h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] "></span>
                    <p className="text__para">Patient Satisfaction</p>
                  </div>


                </div>
              </div>

             {/*----Hero content---*/}
            <div className="flex gap-[30px] justify-end ">
            <div>
              <img className="w-full ml-[20px] " src={heroImg01} alt=""  />
            </div>
            <div className="mt-[30px]">
              <img  src={heroImg02} alt="" className="w-full mb-[10px] " />
              <img src={heroImg03} alt="" className="w-full " />

            </div>
            </div>
            </div>
          </div>
        </section>
        {/*----hero section end----*/}
         <section>
         <div className="container">
           <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center"><b>Delivering top-notch healthcare services</b></h2>
            <p className="text__para text-center">Delivering exceptional healthcare expertise, our Health System guarantees world-class care accessible to all.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
             <div className="py-[30px] px-5">
              <div className="flex items-center justify-center"><img src={icon01} alt=""/></div>
              
              <div className="mt-[30px]"></div>
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center"><b>Find A Doctor</b></h2>
                 <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Accessible world-class care for all is our commitment. Our health system delivers unparalleled, expert healthcare—from the laboratory to the clinic. </p>
               
               <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none ">
                
                <BsArrowRight className="group-hover:text-white w-6 h-5"/>
               </Link>
             </div>
             <div className="py-[30px] px-5">
              <div className="flex items-center justify-center"><img src={icon02} alt=""/></div>
              
              <div className="mt-[30px]"></div>
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center"><b>Book Appointment</b></h2>
                 <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Accessible world-class care for all is our commitment. Our health system delivers unparalleled, expert healthcare—from the laboratory to the clinic. </p>
               
               <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none ">
                
                <BsArrowRight className="group-hover:text-white w-6 h-5"/>
               </Link>
             </div>
             
           </div>
         </div>


        </section>
        
        <About/>
        
        {/*-----services section-----*/}
        <section>
          
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center"><b>Our Medical Services</b></h2>
             <p className="text__para text-center">World-class care for everyone.Your Health,Your Priority</p>
 
          </div>
    <ServiceList/>
        </div>

        </section>
        
   {/*-----section end----*/}

      {/*-----feature section------*/}
<section>
<div className="container">

  <div className="flex items-center justify-between flex-col lg:flex-row">

{/*---------feature content---------- */}
<div className="xl:w-[670px]">
  <h2 className="heading">Get Virtual Treatment<br/> anytime.</h2>
  <ul className="pl-4">
    <li className="text__para">1.Schedule the appointment directly.</li>
    <li className="text__para">2.Search for your Doctor here,and contact them.</li>
    <li className="text__para">3.View our Doctors here,use the Appointment Scheduling tool to select an appointment time.</li>
  </ul>
  <Link to="/">
  <button className="btn">Learn More</button>
  </Link>
</div>

{/*---------feature image----------- */}
<div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
  <img src={featureImg}className="w-3/4" alt=""/>

  <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[6px] lg:gap-3">
        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">Tue, 24</p>
        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">10:00AM</p>

      </div>
      <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[][6px] lg:py-3 lg:px-[9px]">
        <img src={videoIcon} alt=""/>
      </span>
    </div>
 <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-headingColor font-[500] mt-2 lg:mt-4 rounded-full" >Consultation</div>

 <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
  <img src={avatarIcon} alt=""/>
<h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">Peter Ndegwa</h4>
 </div>
  </div>
</div>

  </div>
</div>




</section>

       {/*-----feature section end------*/}

{/*-------Our great Doctors--------- */}
<section>

<div className="container">
            <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center"><b>Our Great Doctors</b></h2>
             <p className="text__para text-center">World-class care for everyone.Your Health,Your Priority</p>
 
          </div>
          <DoctorsList/>
</div>

</section>



{/*-------Our great Doctors--------- */}

    </>
  );
};

export default Home;
