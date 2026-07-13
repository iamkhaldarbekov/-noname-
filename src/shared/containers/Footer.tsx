import {Link} from 'react-router';
import LinkedIn from '../../assets/icons/linkedin.svg?react';
import Facebook from '../../assets/icons/facebook.svg?react';
import Instagram from '../../assets/icons/instagram.svg?react';
import Skype from '../../assets/icons/skype.svg?react';
import Twitter from '../../assets/icons/twitter.svg?react';
import Pinterest from '../../assets/icons/pinterest.svg?react';

const menu = [
	"New arrivals",
	"Best sellers",
	"Popular this week",
	"All products"
]

const categories = [
	"Furniture",
	"Homeware",
	"Sofas",
	"Light fittings"
]

const ourCompany = [
	{
		name: "About us",
		link: "/about"
	}
]

export default function Footer() {
	return (
		<footer className="bg-darkprimary">
			<div className="wrapper pt-[58px] max-sm:pt-[40px]">
				<div className="flex justify-between max-sm:flex-wrap max-sm:gap-y-[40px]">
					<div className="text-white">
						<Link to="/" className="font-cd text-[36px]">[noname]</Link>
						<div className="flex flex-col mt-[16px] gap-y-[12px] text-[14px]">
							<p>21 New York Street</p>
							<p>New York City</p>
							<p>United States of America</p>
							<p>432 34</p>
						</div>
					</div>
					<div>
						<p className="font-cd text-white">Social links</p>
						<div className="mt-[22px] flex gap-x-[24px] items-center">
							<a href="https://linkedin.com" target="_blank">
								<LinkedIn />
							</a>
							<a href="https://facebook.com" target="_blank">
								<Facebook />
							</a>
							<a href="https://instagram.com" target="_blank">
								<Instagram />
							</a>
							<a href="https://skype.com" target="_blank">
								<Skype />
							</a>
							<a href="https://twitter.com" target="_blank">
								<Twitter />
							</a>
							<a href="https://pinterest.com" target="_blank">
								<Pinterest />
							</a>
						</div>
					</div>
					<div className="flex gap-x-[100px]">
						<div className="flex flex-col gap-y-[12px]">
							<p className="font-cd text-white">Menu</p>
							{menu.map((link, index) => (
								<Link
									to="/products"
									className="text-[14px] text-white hover:underline"
									key={index}
								>
									{link}
								</Link>
							))}
						</div>
						<div className="flex flex-col gap-y-[12px] max-sm:hidden">
							<p className="font-cd text-white">Categories</p>
							{categories.map((link, index) => (
								<Link
									to="/products"
									state={link}
									className="text-[14px] text-white hover:underline"
									key={index}
								>
									{link}
								</Link>
							))}
						</div>
						<div className="flex flex-col gap-y-[12px]">
							<p className="font-cd text-white">Our Company</p>
							{ourCompany.map((el, index) => (
								<Link
									to={el.link}
									className="text-[14px] text-white hover:underline"
									key={index}
								>
									{el.name}
								</Link>
							))}
						</div>
					</div>
				</div>
				<div className="mt-[35px] py-[20px] border-t-[1px] border-primary">
					<p className="text-[14px] text-white max-sm:text-center">Copyright 20xx [noname] LTD</p>
				</div>
			</div>
		</footer>
	)
}