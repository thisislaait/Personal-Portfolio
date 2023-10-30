import React from 'react'
import NavList from "../lib/navList";
import {Link} from 'react-router-dom';

const Footer = () => {

    const specificLink1IDs = [1, 2, 3];
    const filteredLink1 = NavList.filter((item) => specificLink1IDs.includes(item.id));

    const specificLink2IDs = [4, 5, 6];
    const filteredLink2 = NavList.filter((item) => specificLink2IDs.includes(item.id));

  return (
    <div className='bg-[#cff888] flex flex-col'>
        <section className='pt-5 pb-10 flex justify-between pl-8'>
            <div className='text-lg font-semibold'>
                Footer
            </div>
            <div className='flex justify-between gap-4 lg:px-16 md:px-16 text-base pr-12'>
                <div className='lg:px-10 flex flex-col text-left text-sm'>
                    <h3 className='pb-2 underline text-lg font-semibold '>
                        Link 1 
                    </h3>
                    <ul>
                      {filteredLink1.map((item) => (
                          <li key={item.id} className="cursor-pointer">
                              <Link to={item.route}>
                                  {item.sub_title}
                              </Link>
                          </li>
                      ))}
                    </ul>
                </div>

                <div className='lg:px-10 flex flex-col text-left text-sm'>
                    <h3 className='pb-2 underline text-lg font-semibold'>
                        Link 2 
                    </h3>
                    <ul>
                        {filteredLink2.map((item) => (
                            <li key={item.id} className="cursor-pointer">
                                <Link to={item.route}>
                                    {item.sub_title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
        {/*<hr className='mt-6'/>*/}
        <div className='flex justify-between mt-3 text-xs pl-8 pb-2'>
            <h3 className=' text-left '>All rights reserved <span>&copy;</span> AfriChow2023
            </h3>
        </div>
    </div>
  )
}

export default Footer