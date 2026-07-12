import {useState} from 'react';
import {motion} from 'motion/react';

import {Card, Checkbox, Dropdown} from '../../shared/components';
import {products} from '../../utils/products';

export default function Products() {
	const [filteredProducts, setFilteredProducts] = useState(products);
	const [prices, setPrices] = useState([
		{value: "0 - 100", enabled: false},
		{value: "101 - 250", enabled: false},
		{value: "250 +", enabled: false}
	])
	const [designers, setDesigners] = useState([
		{value: "Robert Smith", enabled: false},
		{value: "Liam Gallagher", enabled: false},
		{value: "Biggie Smalls", enabled: false},
		{value: "Thom Yorke", enabled: false}
	])
	const [productTypes, setProductTypes] = useState([
		{value: "Furniture", enabled: false},
		{value: "Homeware", enabled: false},
		{value: "Sofas", enabled: false},
		{value: "Light fittings", enabled: false}
	])

	function filter() {
		const productTypesEnabled = productTypes.some(el => el.enabled);
		const designersEnabled = designers.some(el => el.enabled);
		const pricesEnabled = prices.some(el => el.enabled);

		setFilteredProducts(products.filter(el => {
			let productTypeFit = false;
			let designerFit = false;
			let priceFit = false;

			if (productTypesEnabled) {
				const productTypeValues = productTypes.filter(el => el.enabled == true).map(el => el.value.toLowerCase());

				if (productTypeValues.includes(el.type)) productTypeFit = true;
			}

			if (pricesEnabled) {
				const priceValues = prices.filter(el => el.enabled == true).map(el => el.value);

				const priceObjects = priceValues.map(el => {
					const splitted = el.replace("+", "").split(" - ");

					return {
						min: splitted[0].trim(),
						max: splitted[1]?.trim()
					}
				})

				priceObjects.forEach(price => {
					if (
						el.price >= parseInt(price.min) &&
						el.price <= (price.max ? parseInt(price.max) : Infinity)
					) {
						priceFit = true;
						return;
					}
				})
			}

			if (designersEnabled) {
				const designerValues = designers.filter(el => el.enabled == true).map(el => el.value);

				if (designerValues.includes(el.designer)) designerFit = true;
			}

			if (
				(productTypesEnabled ? productTypeFit : true) &&
				(pricesEnabled ? priceFit : true) &&
				(designersEnabled ? designerFit : true)
			) {
				return el;
			}
		}))
	}
	
	function changeDesigners(value: string, enabled: boolean) {
		setDesigners(designers.map(el => {
			if (el.value == value) el.enabled = enabled;

			return el;
		}))

		filter();
	}

	function changePrices(value: string, enabled: boolean) {
		setPrices(prices.map(el => {
			if (el.value == value) el.enabled = enabled;

			return el;
		}))

		filter();
	}

	function changeProductTypes(value: string, enabled: boolean) {
		setProductTypes(productTypes.map(el => {
			if (el.value == value) el.enabled = enabled;

			return el;
		}))

		filter();
	}
	
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
									{productTypes.map((el, index) => (
										<Checkbox
											onChange={(v) => changeProductTypes(el.value, v)}
											value={el.enabled}
											key={index}
										>
											{el.value}
										</Checkbox>
									))}
								</div>
							</div>
							<div>
								<p className="font-cd text-darkprimary">Price</p>
								<div className="flex flex-col gap-y-[12px] mt-[20px]">
									{prices.map((el, index) => (
										<Checkbox
											onChange={(v) => changePrices(el.value, v)}
											value={el.enabled}
											key={index}
										>
											{el.value}
										</Checkbox>
									))}
								</div>
							</div>
							<div>
								<p className="font-cd text-darkprimary">Designer</p>
								<div className="flex flex-col gap-y-[12px] mt-[20px]">
									{designers.map((el, index) => (
										<Checkbox
											onChange={(v) => changeDesigners(el.value, v)}
											value={el.enabled}
											key={index}
										>
											{el.value}
										</Checkbox>
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
					<div className="flex flex-col gap-y-[48px] shrink-0 max-sm:hidden">
						<div>
							<p className="font-cd text-darkprimary">Product type</p>
							<div className="flex flex-col gap-y-[12px] mt-[20px]">
								{productTypes.map((el, index) => (
									<Checkbox
										onChange={(v) => changeProductTypes(el.value, v)}
										value={el.enabled}
										key={index}
									>
										{el.value}
									</Checkbox>
								))}
							</div>
						</div>
						<div>
							<p className="font-cd text-darkprimary">Price</p>
							<div className="flex flex-col gap-y-[12px] mt-[20px]">
								{prices.map((el, index) => (
									<Checkbox
										onChange={(v) => changePrices(el.value, v)}
										value={el.enabled}
										key={index}
									>
										{el.value}
									</Checkbox>
								))}
							</div>
						</div>
						<div>
							<p className="font-cd text-darkprimary">Designer</p>
							<div className="flex flex-col gap-y-[12px] mt-[20px]">
								{designers.map((el, index) => (
									<Checkbox
										onChange={(v) => changeDesigners(el.value, v)}
										value={el.enabled}
										key={index}
									>
										{el.value}
									</Checkbox>
								))}
							</div>
						</div>
					</div>
					{filteredProducts[0] ?
						<div className="grid grid-cols-3 ml-auto min-w-fit gap-x-[20px] gap-y-[35px] max-sm:grid-cols-2 max-sm:gap-x-[15px] max-sm:gap-y-[20px]">
							{filteredProducts.map((el, index) => (
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
						:
						<div className="relative w-full">
							<p className="centered font-cd text-2xl text-darkprimary max-sm:hidden">No products found using this filters...</p>
							<p className="hidden font-cd text-2xl text-darkprimary max-sm:block">No products found using this filters...</p>
						</div>
					}
				</div>
			</main>
		</>
	)
}