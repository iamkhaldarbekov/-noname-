import {useState} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {Link} from 'react-router';
import Cart from '../../assets/icons/cart.svg?react';
import Menu from '../../assets/icons/menu.svg?react';

import {Button} from '../components';

const links: string[] = [
	"Furniture",
	"Homeware",
	"Sofas",
	"Light fittings"
]

export default function Nav() {
	const [hoveredLink, setHoveredLink] = useState("");
	const [burger, setBurger] = useState(false);

	return (
		<>
			{/* Desktop nav */}
			<nav className="wrapper w-full flex justify-between items-center py-[30px] max-sm:hidden">
				<Link to="/" className="font-cd text-[24px] color-[#22202E]">[noname]</Link>
				<div className="flex gap-x-[44px] items-center">
					{links.map((link, index) => (
						<div
							className="relative"
							onMouseOver={() => setHoveredLink(link)}
							key={index}
						>
							<Link to="/products" state={link}>{link}</Link>
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
					<Link to="/cart" className="duration-100 hover:opacity-[0.8]">
						<Cart className="w-[16px] h-[16px]" />
					</Link>
				</div>
			</nav>

			{/* Mobile nav */}
			<nav className="hidden wrapper w-full max-sm:block">
				<div className="flex py-[20px] justify-between">
					<Link to="/" className="font-cd text-[24px] color-[#22202E]">[noname]</Link>
					<div className="flex items-center gap-x-[20px]">
						<Link to="/cart" className="cursor-pointer duration-100 hover:opacity-[0.8]">
							<Cart className="w-[16px] h-[16px]" />
						</Link>
						<button
							className="cursor-pointer duration-100 hover:opacity-[0.8]"
							onClick={() => setBurger(true)}
						>
							<Menu className="w-[16px] h-[16px]" />
						</button>
					</div>
				</div>
			</nav>

			<AnimatePresence>
				{burger && (
					<motion.div
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
						className="fixed top-0 left-0 bg-white w-full h-full"
					>
						<div className="wrapper py-5">
							<p className="font-cd text-lg">Menu</p>
							<div className="mt-2 flex flex-col gap-y-1">
								{links.map((link, index) => (
									<Link
										to="/products"
										state={link}
										key={index}
									>
										{link}
									</Link>
								))}
								<Button
									className="mt-5"
									variant="dark"
									onClick={() => setBurger(false)}
								>
									Close
								</Button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}