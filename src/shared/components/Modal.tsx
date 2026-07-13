import {motion, AnimatePresence} from 'motion/react';
import {Button} from '../components';

type ModalProps = {
	children: any;
	title?: string;
	visible: boolean;
	onClose: (value: boolean) => void;
}

export default function Modal({
	children,
	title,
	visible,
	onClose
}: ModalProps) {
	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					className="fixed left-0 top-0 w-full h-full bg-black/[0.4] backdrop-blur-xs"
				>
					<div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
						<div className="flex flex-col gap-y-4 bg-white p-5 min-w-[500px]">
							{title &&
								<p className="font-semibold text-2xl border-b-[1px] border-bordergray pb-4">{title}</p>
							}
							<div className="max-h-[70vh] overflow-y-auto">
								{children}
							</div>
							<Button
								variant="dark"
								className="ml-auto"
								onClick={() => onClose(false)}
							>
								Close
							</Button>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}