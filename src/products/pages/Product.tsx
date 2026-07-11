import {useState} from 'react';
import {useParams} from 'react-router';
import {motion} from 'motion/react';

import {
	Button,
	Stepper
} from '../../shared/components';
import {
	Wmobd,
	JoinTheClub,
	Suggestions
} from '../../shared/containers';
import {products} from '../../utils/products';
import {nameToUrl} from '../../utils/nameToUrl'
import {useStore} from '../../shared/store';

export default function Product() {
	const {id} = useParams();
	const product = products.find(el => nameToUrl(el.name) == id);
	const addToCart = useStore(state => state.addToCart);
	const [quantity, setQuantity] = useState<number>(1);
	const [zoom, setZoom] = useState<boolean>(false);

	function handleAddToCart() {
		if (!product) return;

		addToCart({
			...product,
			quantity
		})
	}

	if (!product) {
		return <p className="text-4xl font-bold mx-auto mt-20">not found...</p>
	}

	return (
		<>
			<header className="grid grid-cols-2 h-[760px] max-sm:grid-cols-1 max-sm:h-auto">
					{!zoom && (
						<motion.div
							layoutId="zoom"
							className="max-sm:h-[380px]"
						>
							<motion.img
								layout
								className="object-cover h-full cursor-pointer"
								src={product.img}
								onClick={() => setZoom(true)}
							/>
						</motion.div>
					)}
					{zoom && (
						<motion.div
							layoutId="zoom"
							className="centered w-[80vw] z-50"
						>
							<motion.img
								layout
								className="object-cover h-full w-full cursor-pointer"
								src={product.img}
								onClick={() => setZoom(false)}
							/>
						</motion.div>
					)}
				<div className="relative flex flex-col gap-y-[50px] pt-[90px] pl-[102px] pr-[40px] max-sm:wrapper max-sm:px-0 max-sm:gap-y-[28px]">
					<div>
						<h1 className="font-cd text-darkprimary text-[36px] max-sm:text-[24px]">{product.name}</h1>
						<p className="mt-[13px] text-[#12131A] text-[24px] max-sm:text-[20px]">£{product.price}</p>
					</div>

					<div>
						<p className="font-cd text-darkprimary">Description</p>
						<div className="text-[#505977]">
							<p>A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
							<ul className="mt-[20px] pl-2 list-disc list-inside">
								<li>Premium material</li>
								<li>Handmade upholstery</li>
								<li>Quality timeless classic</li>
							</ul>
						</div>
					</div>

					<div>
						<p className="font-cd text-darkprimary">Dimensions</p>
						<div className="mt-[28px] flex gap-x-[58px]">
							<div>
								<p className="font-cd text-[14px] text-darkprimary">Height</p>
								<p className="mt-[12px] text-[#505977]">110cm</p>
							</div>
							<div>
								<p className="font-cd text-[14px] text-darkprimary">Width</p>
								<p className="mt-[12px] text-[#505977]">75cm</p>
							</div>
							<div>
								<p className="font-cd text-[14px] text-darkprimary">Depth</p>
								<p className="mt-[12px] text-[#505977]">50cm</p>
							</div>
						</div>
					</div>

					<div className="flex items-center gap-x-[22px] max-sm:flex-col max-sm:items-start max-sm:gap-y-[12px]">
						<p className="font-cd text-darkprimary">Amount:</p>
						<Stepper
							className="max-sm:w-full"
							onChange={(quantity) => setQuantity(quantity)}
						/>
					</div>

					<Button
						className="absolute bottom-15 right-10 max-sm:static"
						variant="dark"
						onClick={() => handleAddToCart()}
					>
						Add to cart
					</Button>
				</div>
			</header>

			<main>
				<Suggestions title="You might also like" />
				<Wmobd />
				<JoinTheClub />
			</main>
		</>
	)
}