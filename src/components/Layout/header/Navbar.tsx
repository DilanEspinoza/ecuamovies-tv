import { useState, useEffect } from "react";
import SearchIcon from "../../icons/SearchIcon";
import UserIcon from "../../icons/UserIcon";

export const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 5) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<nav
				className={`
					fixed h-16  top-0 p-4 w-full transition-colors duration-300 z-50 
					${scrolled ? "bg-black " : "bg-transparent"}
					`}>
				<div className='flex justify-between items-center mx-10 '>
					<div className='flex gap-7 items-center '>
						<a href='/'>
							<h1 className=' text-white  text-3xl font-medium '>EcuaMT</h1>
						</a>

						<div className=''>
							<ul className='text-white flex gap-7'>
								<li className='hover:text-neutral-300 cursor-pointer'>Home</li>
								<li className='hover:text-neutral-300 cursor-pointer'>
									Categorys
								</li>
								<li className='hover:text-neutral-300 cursor-pointer'>About</li>
							</ul>
						</div>
					</div>

					<div className='flex items-center gap-5'>
						<form
							className={` flex p-1.5 gap-2 rounded-md w-full justify-between bg-neutral-950 ${
								scrolled ? "  outline outline-indigo-500" : "outline-none"
							}   `}>
							<button className='cursor-pointer'>
								<SearchIcon />
							</button>

							<input
								type='text'
								placeholder='Buscar una pelicula...'
								className=' outline-none text-white block bg-neutral-950'
							/>
						</form>

						<div className='cursor-pointer'>
							<UserIcon />
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};
