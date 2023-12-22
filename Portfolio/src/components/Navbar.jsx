import Logo from "../assets/images/avatar_white.png";
import NavList from "../lib/navList";
import {Link} from 'react-router-dom';
import HireImg from '../assets/images/animate.png';
import { CgMenuLeft, CgCloseR, CgMail, CgSearch } from "react-icons/cg";



const Navbar = ( {toggleMenu, menuOpen} ) => {

	const closeMenu = () => {
        if (menuOpen) {
            toggleMenu();
        }
    };

  	const socialLinkIDs = [7, 8, 9];
   const filteredSocials = NavList.filter((item) => socialLinkIDs.includes(item.id));

  return (
    <header >
		<nav className='hidden sm:flex flex-col items-stretch '>
			<div className="flex justify-between gap-[36px] items-center mt-6 mb-2">
				
				<div className="flex items-center">
					<form action="" className="border-gray-600 bg-gray-500 bg-opacity-20 rounded-lg flex items-center w-[780px] gap-2 pl-4">
						<CgSearch/>
						<input type="search" name="" id="" className="bg-transparent py-2 w-96" />
					</form>
				</div>
				<div className="nav_contact">
					<ul className="flex items-center gap-2">
						<li className="text-4xl">
							<CgMail />
						</li>
					</ul>
				</div>
			</div>
			<hr className="h-0.15 w-full opacity-10"/>
		</nav>
		<nav className='flex justify-between py-3 ml-8 mr-2 items-center sm:hidden'>
			<div className='text-3xl'>
				<CgMenuLeft onClick={toggleMenu}/>
			</div>
			<div >
				<Link to='/'>
					<img src={ Logo } alt="" srcSet="" className='w-10 ml-6' />
				</Link>
			</div>
			<ul>
				<li className='relative'>
					<img src={ HireImg } alt="" srcSet="" className='w-32 h-auto rounded-full items-center animate-spin-slow' />
						<Link to='/' className='flex items-center justify-center absolute left-1/2 top-1/2 bg-fuchsia-300 w-12 h-12 rounded-full -translate-x-1/2 -translate-y-1/2 text-[0.6rem] text-black font-bold'>
							Hire Me
						</Link>
				</li>
			</ul>
		</nav>
		{menuOpen && (
			<div className='absolute top-8 mt-4 left-12 cursor-pointer flex items-center justify-center pl-12'>
				<div className='fixed flex justify-between items-center gap-3 z-20 pt-20 p-12'>
					<CgCloseR
						className='z-30 relative p-2 text-5xl text-black'
						onClick={toggleMenu}
					/>
				</div>
			</div>
		)}

		{/* Full-screen menu */}
		{menuOpen &&
			<div className='fixed top-0 left-0 right-24 bottom-0 pt-32 bg-lime-200 text-black flex flex-col items-center ease-out delay-500s duration-300 z-10'>
				<ul className='text-4xl lg:text-6xl md:text-4xl font-semibold mb-5 lg:text-center md:text-center text-left'>
					{filteredLink1.map((item) => (
						<li
							key={item.id}
							className='mb-5 cursor-pointer border bg-black rounded-full px-3 py-1 text-lime-200   hover:animate-pulse '
						>
							<Link to={item.route}>
								{item.sub_title}
							</Link>
						</li>
					))}

					
				</ul>
				<ul className='text-4xl lg:text-6xl md:text-4xl font-semibold mb-5 mt-24 lg:text-center md:text-center text-left flex justify-between gap-4'>
					{filteredSocials.map((item) => (
						<li
							key={item.id}
							className=' mb-5 cursor-pointer hover: border-b hover:border-black '
						>
							<Link to={item.route}>
								{item.icon}
							</Link>
						</li>
					))}
				</ul>
			</div>
		}
  </header>
  )
}

export default Navbar