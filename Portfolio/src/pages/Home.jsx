import ProjectImg  from '../assets/images/avatar3.png';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import HireImg from '../assets/images/animate.png';
import { Link } from 'react-router-dom';
import Pin from '../components/Pin';
const Home = () => {
  return (
    <div className='flex'>
      <div>
        <Sidenav />
      </div>
      
      <main className=' flex-1 h-full mx-8 '>
        <Navbar />
        <div className="nav_contact flex justify-between items-center">
          <div>
            <h1 className='my-8 ml-8 md:mr-40 text-4xl text-left'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi error ea alias maiores minus voluptatibus at dolor? Voluptatum, quod ipsam!
            </h1>
            <a href="http://" className='p-4 border bg-lime-50 text-black rounded-xl md:flex-start'>View all works</a>
          </div>
					<ul className="hidden md:flex items-center gap-2">
						<li className='relative'>
							<img src={ HireImg } alt="" srcSet="" className='w-[1880px] h-auto rounded-full items-center animate-spin-slow' />
								<Link to='/' className='flex items-center justify-center absolute left-1/2 top-1/2 bg-fuchsia-300 w-48 h-48 rounded-full -translate-x-1/2 -translate-y-1/2 text-[0.6rem] text-black font-bold'>
									Hire Me
								</Link>
						</li>
					</ul>
				</div>
        <div className='portfolio_container h-auto '>
          <Pin pinSize = { 'small' } />
          <Pin pinSize = { 'medium' } />
          <Pin pinSize = { 'large' } />
        </div>
        <div className='bg-gray-100 bg-opacity-10 text-white flex  rounded-lg w-full mt-20'>
        
          <div className='w-1/2'>
            <img src={ ProjectImg } alt="" srcset="" />
          </div>
          <div className=' flex flex-col w-1/2 text-left p-4'>
            <div className=' text-[8px] uppercase'>
              Oudees
            </div>
            <div className=' text-[16px]'>
              Meal Mgt App 
            </div>
            <div className=' text-[7px]'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis asperiores excepturi saepe voluptas ex natus, eligendi quisquam ipsum aperiam nesciunt. 
            </div>
            <div className='bg-gray-700 bg-opacity-20 mt-4 text-[6px] w-16 p-2 flex items-center rounded-lg'>See Case Study</div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default Home