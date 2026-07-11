import {motion} from 'motion/react';

import {Card, Checkbox, Dropdown} from '../../shared/components';
import {products} from '../../utils/products';

const filters = {
	productTypes: [
		"Furniture",
		"Homeware",
		"Sofas",
		"Light fittings",
		"Accessories"
	],
	prices: [
		"0 - 100",
		"101 - 250",
		"250 +"
	],
	designers: [
		"Robert Smith",
		"Liam Gallagher",
		"Biggie Smalls",
		"Thom Yorke"
	]
}

export default function Products() {
	return (
		<>
			<header className="bg-[url(../assets/images/products-header.jpg)] bg-cover bg-center pt-[123px] pb-[35px] max-sm:pt-[64px]">
				<h1 className="wrapper text-[36px] text-white font-cd max-sm:text-center">All products</h1>
			</header>

			<section className="hidden py-[20px] max-sm:block">
				<div className="wrapper flex justify-between">
					<Dropdown title="Filters">
						<div className="flex flex-col gap-y-[48px]">
							<div>
								<p className="font-cd text-darkprimary">Product type</p>
								<div className="flex flex-col gap-y-[12px] mt-[20px]">
									{filters.productTypes.map((el, index) => (
										<Checkbox key={index}>{el}</Checkbox>
									))}
								</div>
							</div>
							<div>
								<p className="font-cd text-darkprimary">Price</p>
								<div className="flex flex-col gap-y-[12px] mt-[20px]">
									{filters.prices.map((el, index) => (
										<Checkbox key={index}>{el}</Checkbox>
									))}
								</div>
							</div>
							<div>
								<p className="font-cd text-darkprimary">Designer</p>
								<div className="flex flex-col gap-y-[12px] mt-[20px]">
									{filters.designers.map((el, index) => (
										<Checkbox key={index}>{el}</Checkbox>
									))}
								</div>
							</div>
						</div>
					</Dropdown>
					<Dropdown title="Sorting">
						No sorting for now...
					</Dropdown>
				</div>
			</section>

			<main>
				<div className="wrapper flex py-[35px] max-sm:py-[28px]">
					<div className="flex flex-col gap-y-[48px] max-sm:hidden">
						<div>
							<p className="font-cd text-darkprimary">Product type</p>
							<div className="flex flex-col gap-y-[12px] mt-[20px]">
								{filters.productTypes.map((el, index) => (
									<Checkbox key={index}>{el}</Checkbox>
								))}
							</div>
						</div>
						<div>
							<p className="font-cd text-darkprimary">Price</p>
							<div className="flex flex-col gap-y-[12px] mt-[20px]">
								{filters.prices.map((el, index) => (
									<Checkbox key={index}>{el}</Checkbox>
								))}
							</div>
						</div>
						<div>
							<p className="font-cd text-darkprimary">Designer</p>
							<div className="flex flex-col gap-y-[12px] mt-[20px]">
								{filters.designers.map((el, index) => (
									<Checkbox key={index}>{el}</Checkbox>
								))}
							</div>
						</div>
					</div>
					<div className="grid grid-cols-3 ml-auto min-w-fit gap-x-[20px] gap-y-[35px] max-sm:grid-cols-2 max-sm:gap-x-[15px] max-sm:gap-y-[20px]">
						{products.map((el, index) => (
							<motion.div
								initial={{opacity: 0, y: 100}}
								whileInView={{opacity: 1, y: 0}}
								viewport={{once: true}}
								key={index}
							>
								<Card
									img={el.img}
									title={el.name}
									price={el.price}
									wide={false}
								/>
							</motion.div>
						))}
					</div>
				</div>
			</main>
		</>
	)
}