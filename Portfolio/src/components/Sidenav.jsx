import NavList from "../lib/navList";
import { Link } from "react-router-dom";
import Logo from "../assets/images/avatar_white.png";

const Sidenav = () => {

    const specificLink1IDs = [1, 2, 3, 4];
   const filteredLink1 = NavList.filter((item) => specificLink1IDs.includes(item.id));

  return (
    <div className="
	menuContainer
	w-[100px]
	h-full
	md:flex
	flex-col
    bg-[#1a1a1a]
	hidden
	">
        <aside className="flex flex-col items-center my-8">
                <div className="flex items-center">
                    <Link to='/'>
                        <img src={ Logo } alt="" srcSet="" className="w-12 min-w-8" />
                    </Link>
                </div>
					
				<ul className='hidden sm:flex flex-col justify-between items-center gap-16 my-12'>
					{filteredLink1.map((item) => (
						<li key={item.id} className="cursor-pointer">
						<Link to={item.route}>
							<div className='relative w-16 h-16 rounded-full overflow-hidden hover:animate-spin-mid'>
								<img src={ item.img } alt={item.title} srcset="" className='w-full h-full object-cover rounded-full'/>
								<div className='absolute inset-0 flex items-end justify-center text-black font-semibold text-[0.6rem] mb-2.5'>
								{item.sub_title}
								</div>
							</div>
						</Link>
						</li>
					
					))}
				</ul>
        </aside>
    </div>
  )
}

export default Sidenav