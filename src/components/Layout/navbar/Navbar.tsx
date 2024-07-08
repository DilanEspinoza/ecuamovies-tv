import logo from "../../../assets/logo.png";
import SearchIcon from "../../icons/SearchIcon";
export const Navbar = () => {
	return (
		<>
			<nav className='bg-neutral-900 flex justify-between items-center p-4 '>
				<a href='/'>
					<img src={logo} alt='' className='' width='250px' height='250px' />
				</a>
				<form className=' flex p-1.5 gap-2 rounded-md bg-neutral-800'>
					<SearchIcon />
					<input
						type='text'
						placeholder='Search movie'
						className='bg-none outline-none text-white bg-neutral-800'
					/>
				</form>
			</nav>
		</>
	);
};
