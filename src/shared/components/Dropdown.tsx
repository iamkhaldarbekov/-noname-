import {useState} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import Caret from '../../assets/icons/caret.svg?react';

type DropdownProps = {
	title: string;
	children: any;
}

export default function Dropdown({
	title,
	children
}: DropdownProps) {
	const [show, setShow] = useState(false);

	return (
		<div className="relative">
			<button
				className="bg-lightgray py-[16px] pl-[50px] pr-[42px] flex items-center gap-x-[12px] cursor-pointer duration-100 hover:opacity-[0.8]"
				onClick={() => setShow(!show)}
			>
				<p className="text-darkprimary">{title}</p>
				<motion.div
					animate={show ?
						{rotate: 180}
						:
						{rotate: 0}
					}
					transition={{ease: "easeInOut"}}
				>
					<Caret />
				</motion.div>
			</button>
			
			<AnimatePresence>
				{show && (
					<motion.div
						initial={{y: -15, opacity: 0}}
						animate={{y: 0, opacity: 1}}
						exit={{y: -15, opacity: 0}}
						transition={{ease: "easeInOut"}}
						className="absolute left-0 top-[100%] min-w-[100%] max-h-[70vh] overflow-y-auto text-nowrap bg-white py-2 px-4 border-lightgray border-[1px] z-50"
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}