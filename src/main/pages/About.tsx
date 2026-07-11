import about from '../../assets/images/about.jpg';
import about2 from '../../assets/images/about-2.jpg';

import {
	Wmobd,
	JoinTheClub
} from '../../shared/containers';
import {Button} from '../../shared/components';

export default function About() {
	return (
		<>
			<header className="pt-[67px] pb-[59px] max-sm:py-[32px] max-sm:wrapper">
				<h1 className="font-cd text-[36px] text-darkprimary text-center max-sm:text-[32px] max-sm:text-left">
					A brand built on the love of craftmanship,
					<br />
					quality and outstanding customer service
				</h1>
			</header>

			<main>
				<section className="flex max-sm:flex-col">
					<div className="flex flex-col flex-1 py-[72px] pl-[84px] pb-[54px] pr-[100px] max-sm:pt-[48px] max-sm:pb-[38px] max-sm:px-0 max-sm:flex-none max-sm:wrapper">
						<div>
							<p className="text-[24px] font-cd">From a studio in London to a global brand with over 400 outlets</p>
							<p className="mt-[25px] text-[#505977]">
								When we started [noname], the idea was simple. Make high quality furniture affordable and available for the mass market.
								<br />
								<br />
								Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
							</p>
						</div>
						<Button className="mt-auto self-start max-sm:w-full max-sm:mt-[64px]">Get in touch</Button>
					</div>
					<div className="w-[50%] h-[603px] max-sm:h-[358px] max-sm:flex-none max-sm:w-full">
						<img className="object-cover h-full w-full" src={about} />
					</div>
				</section>

				<section className="flex max-sm:flex-col">
					<div className="w-[50%] h-[603px] max-sm:h-[358px] max-sm:flex-none max-sm:w-full">
						<img className="object-cover h-full w-full" src={about2} />
					</div>
					<div className="flex flex-col flex-1 py-[72px] pl-[84px] pb-[54px] pr-[100px] max-sm:pt-[48px] max-sm:pb-[38px] max-sm:px-0 max-sm:flex-none max-sm:wrapper">
						<div>
							<p className="text-[24px] font-cd">Our service isn’t just personal, it’s actually hyper personally exquisite</p>
							<p className="mt-[25px] text-[#505977]">
								When we started [noname], the idea was simple. Make high quality furniture affordable and available for the mass market.
								<br />
								<br />
								Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
							</p>
						</div>
						<Button className="mt-auto self-start max-sm:w-full max-sm:mt-[64px]">Get in touch</Button>
					</div>
				</section>

				<Wmobd />
				<JoinTheClub variant="withBg" />
			</main>
		</>
	)
}