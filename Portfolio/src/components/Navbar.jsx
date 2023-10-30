import React from 'react'
import Logo from "../assets/images/logomark.png";
import NavList from "../lib/navList";
import {Link} from 'react-router-dom';

const Navbar = () => {

  const specificLink1IDs = [1, 2, 3];
    const filteredLink1 = NavList.filter((item) => specificLink1IDs.includes(item.id));

  return (
    <nav className='flex justify-between py-10 pl-12 items-center '>
      <div>
        <Link to='/'>
          <img src={ Logo } alt="" srcset="" className='w-10 sm:w-16' />
          </Link>
      </div>
      <div>
        <ul className='hidden sm:flex justify-center gap-5 mr-12'>
          {filteredLink1.map((item) => (
            <li key={item.id} className="cursor-pointer">
              <Link to={item.route}>
                  {item.sub_title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='sm:hidden mr-10'>
        Hamburger
      </div>
    </nav>
  )
}

export default Navbar