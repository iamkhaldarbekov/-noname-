import {useState} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import Delivery from '../../assets/icons/delivery.svg?react';
import Close from '../../assets/icons/close.svg?react';

export default function Offer() {
	const [visible, setVisible] = useState(true);

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					exit={{opacity: 0, height: 0, padding: 0}}
					className="bg-darkprimary py-[11px]"
				>
					<div className="flex gap-x-[16px] max-sm:wrapper">
						<div className="flex items-center gap-x-[8px] flex-1 justify-center max-sm:gap-x-[11px]">
							<Delivery className="stroke-white" />
							<p className="text-[14px] text-white">Free delivery on all orders over £50 with code easter checkout</p>
						</div>
						<button
							className="mr-[15px] cursor-pointer duration-100 hover:opacity-[0.8] max-sm:mr-0"
							onClick={() => setVisible(false)}
						>
							<Close className="fill-white stroke-transparent" />
						</button>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}