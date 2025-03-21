import React, { useEffect, useState } from 'react'

export default function Footer() {
    
    const [count, setCount] = useState(0)

  return (
    <footer className='bg-[rgb(242,242,242)] p-6 mt-10'>
      <div className="container w-full">
        <h2 className='text-3xl text-[#212529]'>Get the FreshCart App</h2>
        <p className='text-[#6d767e] mb-4 font-light'>We will send you a link, open it on your phone to download the app</p>
        <div className="flex gap-3 mb-5">
          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block grow me-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email .." required />
          <button className='btn bg-main text-white rounded-md p-3 font-light hover:bg-opacity-60'>Share App Link</button>
        </div>
        <div className="partner flex justify-between py-6 border-y-4">
          <div className="payment">
            <p>Payment Partners</p>
          </div>
          <div className="app">
            <p>Get deliveries with FreshCart</p>
          </div>
        </div>
      </div>
    </footer>
  )
}