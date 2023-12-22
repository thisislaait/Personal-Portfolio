import React from 'react'
import ProfilePic from "../assets/images/profile.png";

const Hero = () => {
  return (
    <section className='py-12 flex flex-col'>
      <div className='items-center justify-center sm:flex-row md:flex-row lg:flex-row'>
        <h1 className='sm:hidden font-bold text-3xl'>Hello, I'm Ugo</h1>
        <img src={ ProfilePic } id="pic" alt="Ugo Ogadi profile picture" className='w-full sm:w-96 px-10 pb-5 item-center md:pl-24 md:w-7/12 lg:w-5/12' />
        <div className='px-12 md:px-16 lg:px-24'>
          <p className='text-3xl md:text-5xl font-bold hidden sm:block'>Hello I'm</p>
          <h1 className='text-lg font-bold hidden sm:block'>Ugo Ogadi</h1>
          <p className='pb-12' >a frontend developer with 3 years experience in creating user-centered designs.</p>
        </div>
        <div className='flex justify-center gap-3'>
          <button className='bg-black text-lime-200 py-2 px-5 rounded-md'> Résumé </button>
          <button className='bg-purple-200 py-2 px-5 rounded-md'> Let's Talk </button>
        </div>
      </div>
        
      
      {/*<div class="icons">
        <img src="/images/linkedin.png" alt="My LinkedIn Profile" onclick="location.href='https://linkedin.com/in/ugo-ogadi'" />
        <img src="/images/github.png" alt="My Github Profile" onclick="location.href='https://github.com/thisislaait'" />
  </div>*/}
    </section>
  )
}

export default Hero