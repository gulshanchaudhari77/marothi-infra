import React from 'react'
import { BiLogoFacebookCircle, BiLogoYoutube } from 'react-icons/bi'
import { BsDot, BsInstagram, BsTelephoneFill, BsTwitter } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='border-t border-[#4FD1C5]'>
            <div className='w-11/12 md:w-10/12 mx-auto pt-9'>
                <div className='flex flex-col md:flex-row justify-between gap-10 w-full'>
                    <div className='w-full md:w-[30%] flex gap-4 flex-col'>
                        <h2 className='text-[#F6E05E] text-[1.5rem] flex items-center'>
                            <BsDot className='text-white text-4xl mr-[-10px]' />
                            Marothi-infra
                            <BsDot className='text-white text-4xl ml-[-10px]' />
                        </h2>
                        <p>Marothi-Infra developer, founded in 2020 was built on the core values of trust, satisfaction and innovation. We offer beautiful homes with quality construction. After years and over projects in the city, we have cemented our place in the industry.</p>
                        <div className='flex gap-5 items-center'>
                            <BiLogoFacebookCircle className='text-[#38B2AC] hover:text-[#4FD1C5] duration-100 text-3xl' />
                            <BsInstagram className='text-[#38B2AC] text-xl hover:text-[#4FD1C5] duration-100' />
                            <BsTwitter className='text-[#38B2AC] text-2xl hover:text-[#4FD1C5] duration-100' />
                            <BiLogoYoutube className='text-[#38B2AC] text-3xl hover:text-[#4FD1C5] duration-100' />
                        </div>
                    </div>
                    <div className='w-full md:w-[30%] flex gap-4 flex-col'>
                        <div className='text-[#F6E05E] text-[1.5rem] flex'>
                            <BsDot className='text-white text-4xl mr-[-10px]' />
                            Information
                            <BsDot className='text-white text-4xl ml-[-10px]' />
                        </div>
                        <div className='flex gap-4'><BsTelephoneFill className='text-[#38B2AC] text-xl' /> 86987678040,9309530432</div>
                        <div className='flex gap-4'><MdEmail className='text-[#38B2AC] text-2xl ' /> digu67141@gmail.com </div>
                        <div className='flex gap-4'><FaLocationDot className='text-[#38B2AC] text-3xl' /> Nirmal Nagar Wanadongri Hingna  Nagpur -27</div>
                    </div>
                    <div className='w-full md:w-[35%] flex gap-4 flex-col'>
                        <h2 className='text-[#F6E05E] text-[1.5rem] flex'>
                            <BsDot className='text-white text-4xl mr-[-10px]' />
                            Data
                            <BsDot className='text-white text-4xl ml-[-10px]' />
                        </h2>
                        <div className='flex justify-between'>
                            <p>Marothi-Infra Brochure pdf</p>
                            <a href='#' target="_blank" className='border rounded-lg px-2 py-1 text-center border-gray-300 hover:border-white text-gray-300 hover:text-white duration-100'>Download Now</a>
                        </div>
                        <div className='flex justify-between'>
                            <p>Project Spruha Pdf</p>
                            <a href='#' target="_blank" className='border rounded-lg px-2 py-1 text-center border-gray-300 hover:border-white text-gray-300 hover:text-white duration-100'>Download Now</a>
                        </div>
                    </div>
                </div>
                <div className='text-[#F6E05E] flex pb-12 pt-7 justify-center md:justify-end w-full'>
                    2024 Marothi-Infra @ all rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer;

