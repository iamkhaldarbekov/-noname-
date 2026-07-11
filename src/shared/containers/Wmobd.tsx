import {motion} from 'motion/react';
import Delivery from '../../assets/icons/delivery.svg?react';
import Checkmark from '../../assets/icons/checkmark.svg?react';
import Purchase from '../../assets/icons/purchase.svg?react';
import Sprout from '../../assets/icons/sprout.svg?react';

const wmobd = [
	{
		icon: <Delivery className="w-[24px] h-[24px]" />,
		title: "Next day as standard",
		desc: "Order before 3pm and get your order the next day as standard"
	},
	{
		icon: <Checkmark className="w-[24px] h-[24px]" />,
		title: "Made by true artisans",
		desc: "Handmade crafted goods made with real passion and craftmanship"
	},
	{
		icon: <Purchase className="w-[24px] h-[24px]" />,
		title: "Unbeatable prices",
		desc: "For our materials and quality you won’t find better prices anywhere"
	},
	{
		icon: <Sprout className="w-[24px] h-[24px]" />,
		title: "Recycled packaging",
		desc: "We use 100% recycled packaging to ensure our footprint is manageable"
	},
]

export default function Wmobd() {
	return (
		<section className="wrapper pt-[60px] pb-[85px] max-sm:pt-[48px] max-sm:pb-[45px]">
			<h3 className="font-cd text-center text-[24px] max-sm:text-left max-sm:text-[20px]">What makes our brand different</h3>
			<div className="flex mt-[50px] gap-x-[58px] max-sm:mt-[36px] max-sm:flex-col max-sm:gap-y-[36px]">
				{wmobd.map((el, index) => (
					<motion.div
						initial={{opacity: 0, y: 100}}
						whileInView={{opacity: 1, y: 0}}
						viewport={{once: true}}
						key={index}
					>
						{el.icon}
						<h4 className="font-cd text-[20px] mt-[16px] max-sm:text-base">{el.title}</h4>
						<p className="mt-[8px] max-sm:text-[14px] max-sm:mt-[12px]">{el.desc}</p>
					</motion.div>
				))}
			</div>
		</section>
	)
}