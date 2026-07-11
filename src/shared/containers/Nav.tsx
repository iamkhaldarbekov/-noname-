import {useState} from 'react';
import {motion} from 'motion/react';
import {Link} from 'react-router';
import Search from '../../assets/icons/search.svg?react';
import Cart from '../../assets/icons/cart.svg?react';
import User from '../../assets/icons/user.svg?react';
import Menu from '../../assets/icons/menu.svg?react';

const links: string[] = [
	"Plant pots",
	"Ceramics",
	"Tables",
	"Chairs",
	"Crockery",
	"Tableware",
	"Cutlery"
]

export default function Nav() {
	const [hoveredLink, setHoveredLink] = useState("");

	return (
		<>
			{/* Desktop nav */}
			<nav className="wrapper w-full flex justify-between items-center py-[30px] max-sm:hidden">
				<Link to="/" className="font-cd text-[24px] color-[#22202E]">[noname]</Link>
				<div className="flex gap-x-[44px] items-center">
					{links.map((link, index) => (
						<div
							className="group relative"
							onMouseOver={() => setHoveredLink(link)}
							key={index}
						>
							<Link to="#">{link}</Link>
							{hoveredLink == link && (
								<motion.div
									layoutId="underline"
									className="absolute w-full border-b-[3px] border-[#726E8D]"
								/>
							)}
						</div>
					))}
				</div>
				<div className="flex items-center gap-x-[16px]">
					<button className="cursor-pointer duration-100 hover:opacity-[0.8]">
						<Search className="w-[16px] h-[16px]" />
					</button>
					<Link to="/cart" className="duration-100 hover:opacity-[0.8]">
						<Cart className="w-[16px] h-[16px]" />
					</Link>
					<button className="cursor-pointer duration-100 hover:opacity-[0.8]">
						<User className="w-[16px] h-[16px]" />
					</button>
				</div>
			</nav>

			{/* Mobile nav */}
			<nav className="hidden wrapper w-full max-sm:block">
				<div className="flex py-[20px] justify-between">
					<Link to="/" className="font-cd text-[24px] color-[#22202E]">[noname]</Link>
					<div className="flex items-center gap-x-[20px]">
						<button className="cursor-pointer duration-100 hover:opacity-[0.8]">
							<Search className="w-[16px] h-[16px]" />
						</button>
						<button className="cursor-pointer duration-100 hover:opacity-[0.8]">
							<Cart className="w-[16px] h-[16px]" />
						</button>
						<button className="cursor-pointer duration-100 hover:opacity-[0.8]">
							<User className="w-[16px] h-[16px]" />
						</button>
						<button className="cursor-pointer duration-100 hover:opacity-[0.8]">
							<Menu className="w-[16px] h-[16px]" />
						</button>
					</div>
				</div>
			</nav>
		</>
	)
}