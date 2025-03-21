import { Helmet } from 'react-helmet';
import React from 'react'
export default function Contact() {
  return (
    <div className='flex flex-col items-center justify-center w-auto p-4  h-[600px] bg-white  '>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <h2 className="text-[40px] font-[700] text-[#2C3E50] mt-4">
    CONTACT SECION
  </h2>

  <h2><i _ngcontent-hhj-c6="" className="fa-solid fa-star text-[#2C3E50] text-[16px] "></i></h2> 

     <div className='w-[600px]'>




     <form className="w-[600px] mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          
          <input
            type="name"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b  border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-[#1ABC9C] focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="userName "
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
           userName 
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          
          <input
            type="Age "
            name="Age "
            id="Age :"
            className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="userAge "
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
           userAge :
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
       
        <button type="submit" class="text-white bg-[#1ABC9C] hover:bg-[#21806d] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   ">Submit</button>
          
          </form>

        
    
     </div>
     </div>
  )
}



