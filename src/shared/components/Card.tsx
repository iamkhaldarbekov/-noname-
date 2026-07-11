import {Link} from 'react-router';

import {nameToUrl} from '../../utils/nameToUrl';

type CardProps = {
	img: string;
	title: string;
	price: number;
	wide?: boolean;
}

export default function Card({img, title, price, wide = false}: CardProps) {
	return (
		<div
			className={
				wide ?
					"w-[630px]"
					:
					"w-[305px] max-sm:w-[163px]"
			}
		>
			<div className="w-full h-[375px] overflow-hidden max-sm:h-[201px]">
				<img className="object-cover h-full w-full duration-200 hover:scale-[1.05]" src={img} />
			</div>
			<div className="mt-[24px]">
				<Link
					to={"/products/" + nameToUrl(title)}
					className="font-cd text-[20px] hover:underline"
				>
					{title}
				</Link>
				<p className="text-[18px] mt-[8px]">£{price}</p>
			</div>
		</div>
	)
}