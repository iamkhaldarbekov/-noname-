import {motion} from 'motion/react';
import {useNavigate} from 'react-router';

import {
	Title,
	Card,
	Button
} from '../components';
import {products} from '../../utils/products';

type SuggestionsProps = {
	title: string;
}

export default function Suggestions({title}: SuggestionsProps) {
	const navigate = useNavigate();
	const data = products.slice(0, 4);

	return (
		<section className="wrapper pt-[80px] pb-[56px]">
			<Title>{title}</Title>
			<div className="mt-[33px] flex flex-wrap justify-between gap-y-[20px]">
				{data.map((el, index) => (
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
							wide={el.wide}
						/>
					</motion.div>
				))}
			</div>
			<Button
				className="mt-[35px] mx-auto block"
				onClick={() => navigate("/products")}
			>
				View collection
			</Button>
		</section>
	)
}