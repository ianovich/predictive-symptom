import React from 'react'
import aboutImg from '../../assets/images/aboutImg.png';
import { Link } from 'react-router-dom';
const About = () => {
  return<section>
    <div className="container">
      <div className=' flex items-center justify-between gap-[50px] lg:gap-[130px] xl:gap-0  flex-col lg:flex-row'>
          {/*---- About Img----*/}
          <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
            <img src={aboutImg} alt=''/>
            <span><b>Dr George Onyango<br/>Pulmonogist</b></span>
          </div>

{/*-------About Content----*/}
<div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
  <h2 className='heading'>Proud to be one of the Country's best</h2>
   <p className='text__para'>JKUAT Hospital stands as a beacon of excellence in healthcare, renowned for its unwavering commitment to providing top-tier medical services. With a dedication to innovation and patient-centered care, it embodies a hub of medical expertise, offering cutting-edge treatments and compassionate service. </p>
   <p className='text__para mt-[30px]'>This leading institution integrates advanced technology with a skilled team of professionals, ensuring optimal care from diagnosis to recovery. JKUAT Hospital sets the standard for exemplary healthcare, fostering a nurturing environment that prioritizes patient well-being and satisfaction. </p>

   <Link to='/'><button className='btn'>Learn More</button>
    </Link>
</div>
      </div>
    </div>
  </section> 
  
}

export default About