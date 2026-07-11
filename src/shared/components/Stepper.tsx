import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {clsx} from 'clsx';

type StepperProps = {
	onChange?: (quantity: number) => void;
	initialValue?: number;
	min?: number;
	max?: number;
	className?: any;
}

export default function Stepper(
	{
		onChange,
		initialValue = 1,
		min = 1,
		max,
		className
	}: StepperProps
) {
	const [quantity, setQuantity] = useState<number>(initialValue);

	useEffect(() => onChange && onChange(quantity), []);

	function controlQuantity(value: number) {
		setQuantity(value);
		if (onChange) onChange(value);
	}
	
	return (
		<div
			className={clsx("bg-lightgray w-fit", className)}
		>
			<div className="flex gap-x-[33px] select-none py-[12px] px-[16px] w-fit mx-auto">
				<button
					className="text-borderdark cursor-pointer disabled:cursor-not-allowed"
					onClick={() => controlQuantity(quantity - 1)}
					disabled={quantity == min}
				>
					-
				</button>
				
				<div className="relative">
					<AnimatePresence mode="popLayout">
						<motion.span
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
							className="centered text-darkprimary"
							key={quantity}
						>
							{quantity}
						</motion.span>
					</AnimatePresence>
				</div>

				<button
					className="text-borderdark cursor-pointer disabled:cursor-not-allowed"
					onClick={() => controlQuantity(quantity + 1)}
					disabled={quantity == max}
				>
					+
				</button>
			</div>
		</div>
	)
}