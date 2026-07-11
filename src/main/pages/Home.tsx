import {motion} from 'motion/react';
import {useNavigate} from 'react-router';
import theDandyChair from '../../assets/images/the-dandy-chair.jpg';
import theDandyChair2 from '../../assets/images/the-dandy-chair-2.jpg';
import thePopularSofa from '../../assets/images/the-poplar-suede-sofa.jpg';
import header from '../../assets/images/header.jpg';
import about from '../../assets/images/about.jpg';

import {
	Button,
	Title,
	Card
} from '../../shared/components';
import {
	Wmobd,
	Suggestions,
	JoinTheClub
} from '../../shared/containers';

const ourPopular = [
	{
		img: thePopularSofa,
		title: "The Poplar suede sofa",
		price: 980,
		wide: true
	},
	{
		img: theDandyChair,
		title: "The Dandy Chair",
		price: 250,
		wide: false
	},
	{
		img: theDandyChair2,
		title: "The Dandy Chair 2",
		price: 250,
		wide: false
	}
]

export default function Home() {
	const navigate = useNavigate();
	
	return (
		<>
			{/* Desktop header */}
			<header className="wrapper py-[60px] max-sm:hidden">
				<div className="flex">
					<div className="w-[760px] bg-darkprimary p-[60px]">
						<h2 className="text-[32px] font-cd text-white">The furniture brand for the <br /> future, with timeless designs</h2>
						<Button
							className="mt-[40px]"
							onClick={() => navigate('/products')}
						>
							View collection
						</Button>
						<p className="mt-[200px] text-white text-[18px]">
							A new era in eco friendly furniture with [noname], the French luxury retail brand
							with nice fonts, tasteful colors and a beautiful way to display things digitally 
							using modern web technologies.
						</p>
					</div>
					<div className="flex-1">
						<img className="object-cover h-full w-full" src={header} />
					</div>
				</div>
			</header>

			{/* Mobile header */}
			<header className="hidden bg-darkprimary pt-[40px] pb-[24px] max-sm:block">
				<div className="wrapper">
					<h2 className="text-[32px] font-cd text-white">The furniture brand for the <br /> future, with timeless designs</h2>
					<p className="mt-[80px] text-white text-[18px]">
						A new era in eco friendly furniture with [noname], the French luxury retail brand
						with nice fonts, tasteful colors and a beautiful way to display things digitally 
						using modern web technologies.
					</p>
					<Button className="mt-[32px] w-full">View collection</Button>
				</div>
			</header>

			<main>
				<Wmobd />
				<Suggestions title="New ceramics" />

				<section className="wrapper pt-[64px] pb-[48px] max-sm:pt-[48px] max-sm:pb-[38px]">
					<Title>Our popular products</Title>
					<div className="flex justify-between mt-[33px] overflow-y-hidden overflow-x-auto">
						{ourPopular.map((el, index) => (
							<motion.div
								initial={{opacity: 0, y: 100}}
								whileInView={{opacity: 1, y: 0}}
								viewport={{once: true}}
							>
								<Card
									img={el.img}
									title={el.title}
									price={el.price}
									wide={el.wide}
									key={index}
								/>
							</motion.div>
						))}
					</div>
					<Button
						className="mt-[42px] block mx-auto max-sm:mt-[32px] max-sm:w-full"
						onClick={() => navigate("/products")}
					>
						View collection
					</Button>
				</section>

				<JoinTheClub />

				<section className="flex max-sm:flex-col">
					<div className="flex flex-col flex-1 py-[72px] pl-[84px] pb-[54px] pr-[100px] max-sm:pt-[48px] max-sm:pb-[38px] max-sm:px-0 max-sm:flex-none max-sm:wrapper">
						<div>
							<p className="text-[24px] font-cd">From a studio in London to a global brand with over 400 outlets</p>
							<p className="mt-[25px] text-[#505977]">
								When we started [noname], the idea was simple. Make high quality furniture affordable and available for the mass market.
								<br />
								<br />
								Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
							</p>
						</div>
						<Button
							className="mt-auto self-start max-sm:w-full max-sm:mt-[64px]"
							onClick={() => navigate('/about')}
						>
							Get in touch
						</Button>
					</div>
					<div className="w-[50%] h-[603px] max-sm:h-[358px] max-sm:flex-none max-sm:w-full">
						<img className="object-cover h-full w-full" src={about} />
					</div>
				</section>
			</main>
		</>
	)
}