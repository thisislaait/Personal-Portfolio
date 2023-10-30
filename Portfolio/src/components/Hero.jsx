import React from 'react'
import ProfilePic from "../assets/images/profile.png";

const Hero = () => {
  return (
    <section className='py-12'>
      <div className='items-center flex flex-col justify-center sm:flex-row md:flex-row lg:flex-row'>
        <h1 className='sm:hidden font-bold text-3xl'>Hello, I'm Ugo</h1>
        <img src={ ProfilePic } id="pic" alt="Ugo Ogadi profile picture" className='w-full sm:w-96 px-10 pb-5 item-center md:pl-24 md:w-7/12 lg:w-5/12' />
        <div className='px-12 md:px-16 lg:px-24'>
        <p className='text-3xl md:text-5xl font-bold hidden sm:block'>Hello I'm</p>
        <h1 className='text-lg font-bold hidden sm:block'>Ugo Ogadi</h1>
        <p className='pb-12' >a frontend developer with 3 years experience in creating user-centered designs.</p>
        </div>
      </div>
        
      {/*<div class="profile-btn">
        <button class="btn1" onclick="location.href='https://drive.google.com/file/d/1dEleVa1x6l3Ctz5sAAFfJUL88p5gOb9m/view?usp=sharing'"> Résumé </button>
        <button id="btn2" onclick="location.href='/#contact'">Let's Talk </button>
      </div>
      <div class="icons">
        <img src="/images/linkedin.png" alt="My LinkedIn Profile" onclick="location.href='https://linkedin.com/in/ugo-ogadi'" />
        <img src="/images/github.png" alt="My Github Profile" onclick="location.href='https://github.com/thisislaait'" />
  </div>*/}
    </section>
  )
}

export default Hero