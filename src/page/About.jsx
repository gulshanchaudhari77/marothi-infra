import React, { useEffect } from 'react'
import { BiLogoFacebookCircle, BiLogoYoutube } from 'react-icons/bi'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import img1 from "../components/Assets/cover_page-0001 15 1.jpg"
import img2 from "../components/Assets/srusha_cover 3.jpg"
import img3 from "../components/Assets/spruha_cover 4.jpg"

// import aboutlogo from "../Component/Acets/About logo.png"
import { useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import img10 from '../components/Assets/DIG1.png'
import marothi1 from '../components/Assets/marothi-1.avif'

const About = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    AOS.init();
  })
  return (
    <div className=' w-11/12 mx-auto flex lg:flex-row flex-col-reverse'>
      <div className=' lg:w-[71%] w-auto mt-5 lg:h-[56rem] '>
        <div className=''
>
          <p className=' text-4xl leading-[3rem] lg:w-[25rem]'  data-aos="fade-right" 
  data-aos-duration="1600" 
  data-aos-delay="300">Completed <span className=' text-[#52a2ca]'>Projects</span>  Here</p>
          <div className=' flex lg:flex-col flex-row gap-5 mt-8 lg:w-[30px] items-center'data-aos="fade-up" 
  data-aos-duration="1600" 
  data-aos-delay="300">
            <BiLogoFacebookCircle className='text-[#F130A2] hover:text-pink-600 duration-100 text-3xl' />
            <BsInstagram className='text-[#F130A2] text-xl hover:text-pink-600 duration-100' />
            <BsTwitter className='text-[#F130A2] text-2xl hover:text-pink-600 duration-100' />
            <BiLogoYoutube className='text-[#F130A2] text-3xl hover:text-pink-600 duration-100' />
          </div>
        </div>
        <div className=' flex lg:flex-row flex-wrap gap-5 lg:relative lg:mt-[-5rem] mt-[2rem] justify-between'>
          <div className=' lg:w-[19em] w-auto lg:absolute top-[10rem] 'data-aos="fade-up" 
  data-aos-duration="1600" 
  data-aos-delay="300">
            <img src={marothi1} alt="" className=' brightness-75 hover:brightness-100 duration-100' />
            <div className=' mx-[5.7rem] lg:ml-0'>
              <p className=' text-[#52a2ca] text-lg font-semibold pt-3'>Marothi-Infra</p>
              <p className=' text-lg'>@Tumsar</p>
            </div>
          </div>
          <div className=' lg:w-[19em] w-auto lg:absolute left-[20rem]'data-aos="fade-up" 
  data-aos-duration="1600" 
  data-aos-delay="500">
            <img src={marothi1} alt="" className=' brightness-75 hover:brightness-100 duration-100' />
            <div className=' mx-[5.7rem] lg:ml-0'>
              <p className=' text-[#52a2ca] text-lg font-semibold pt-3'>Marothi-Infra</p>
              <p className=' text-lg'>@Bhandara</p>
            </div>
          </div>
          <div className=' lg:w-[19em] w-auto lg:absolute left-[40rem] top-[-10rem]'data-aos="fade-up" 
  data-aos-duration="1600" 
  data-aos-delay="700">
            <img src={marothi1} alt="" className=' brightness-75 hover:brightness-100 duration-100' />
            <div className=' mx-[5.7rem] lg:ml-0'>
              <p className=' text-[#52a2ca] text-lg font-semibold pt-3'>Marothi-Infra</p>
              <p className=' text-lg'>@Nagpur</p>
            </div>
          </div>
          <div className=' lg:absolute my-9 right-4 top-[25rem] mx-[2rem] lg:ml-0'data-aos="fade-up" 
  data-aos-duration="1600" 
  data-aos-delay="300">
            <p className=' text-xl pb-3 text-[#52a2ca] lg:text-white'>Key Features :-</p>
            <ul className=' list-disc list-inside leading-tight'>
              <li>CCTV Camera in Parking </li>
              <li>Anti-termite Waterproofing</li>
              <li>Branded Elevator</li>
              <li>Pop</li>
              <li>Modular Kitchen</li>
              <li>B secure Door</li>
            </ul>
          </div>
        </div>
        {/* <div className=' lg:relative'>
          
        </div> */}
      </div>
      <div className=' lg:w-[29%] w-auto mt-6 bg-black flex flex-col gap-11'data-aos="fade-left" 
  data-aos-duration="1600" 
  data-aos-delay="300">
        <h1 className=' text-4xl text-center mt-4'>About us </h1>
        <div className=' lg:w-[19rem] md:w-[30rem] sm:mx-auto mx-8 flex gap-7 flex-col'>
          <p className=' text-sm'>Marothi Infra founded in 2020 was built on the core values of trust, satisfaction and innovation. We offer beautiful homes with quality construction. After years and over projects in the city, we have cemented our place in the industry.</p>
          <img src={img10} alt="" />
        </div>
        <div className=' text-center flex flex-col gap-4'>
          <p className=' text-2xl text-[#52a2ca]'>GET IN TOUCH</p>
          <p className=' lg:w-[18rem] md:w-[25rem] w-auto text-sm sm:mx-auto mx-8'>
            If you are interested in our interior design, architecture or planning services send us a message and we will get back to you shortly.
          </p>
        </div>
        <div className=' left-[35%] lg:bottom-[-2%] w-[9rem] mx-auto lg:relative text-gray-300 hover:text-white duration-100 mb-10'>
          <button className=' border border-gray-300 hover:border-white rounded-lg px-6 py-3' onClick={() => navigate("/contactUs")}>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default About
