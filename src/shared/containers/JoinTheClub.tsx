import {useState} from 'react';
import {cva} from 'class-variance-authority';

import {
	Input,
	Modal
} from '../components';

const jtcContainerVariants = cva(
	"max-sm:bg-transparent max-sm:p-0",
	{
		variants: {
			variant: {
				default: "bg-lightgray pt-[52px] pb-[65px]",
				withBg: "bg-[url(../assets/images/join-the-club.jpg)] bg-cover bg-center pt-[97px] pb-[86px] max-sm:p-0"
			}
		},
		defaultVariants: {
			variant: "default"
		}
	}
)

const jtcContentVariants = cva(
	"max-sm:pt-[45px] max-sm:pb-[38px]",
	{
		variants: {
			variant: {
				default: "text-darkprimary bg-white pt-[68px] pb-[54px] wrapper",
				withBg: "text-white max-sm:wrapper"
			}
		},
		defaultVariants: {
			variant: "default"
		}
	}
)

export default function JoinTheClub({variant}: any) {
	const [modal, setModal] = useState(false);
	
	return (
		<>
			<section className={jtcContainerVariants({variant})}>
				<div className={jtcContentVariants({variant})}>
					<p className="font-cd text-[36px] text-center max-sm:text-[20px] max-sm:text-left">Join the club and get the benefits</p>
					<p className="text-center mt-[16px] max-sm:text-[14px] max-sm:text-left">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
					<div className="w-fit mt-[70px] mx-auto max-sm:mt-[64px]">
						<Input
							type="email"
							variant="dark"
							buttonText="Sign up"
							placeholder="your@email.com"
							onDone={() => setModal(true)}
						/>
					</div>
				</div>
			</section>

			<Modal
				title="Signed up successfully!"
				visible={modal}
				onClose={setModal}
			>
				<p>Now, you are one of us.</p>
			</Modal>
		</>
	)
}