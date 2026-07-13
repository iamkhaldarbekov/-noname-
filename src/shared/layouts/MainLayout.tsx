import {useState, useEffect} from 'react';
import {Outlet, ScrollRestoration, useBlocker} from 'react-router';
import {motion, AnimatePresence} from 'motion/react';

import {
	Footer,
	Nav,
	Offer
} from '../containers';

export default function MainLayout() {
	const blocker = useBlocker(() => !loader);
	const [loader, setLoader] = useState(true);
	const [firstLoad, setFirstLoad] = useState(true);
	let timer: number | undefined;

	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
			setFirstLoad(false);
		}, 1000);
	}, []);

	useEffect(() => {
		if (blocker.state == "blocked") {
			clearTimeout(timer);
			setLoader(true);

			setTimeout(() => blocker.proceed(), 1000);
			timer = setTimeout(() => setLoader(false), 1500);
		}
	}, [blocker.state])
	
	return (
		<>
			<div className="flex flex-col min-h-[100vh]">
				<Offer />
				<Nav />
				<Outlet />
				<div className="mt-auto">
					<Footer />
				</div>
			</div>

			<AnimatePresence>
				{loader && (
					<motion.div
						initial={!firstLoad && {y: "-100%"}}
						animate={{y: 0}}
						exit={{y: "100%"}}
						transition={{duration: 1, ease: "anticipate"}}
						className="fixed top-0 left-0 w-full h-full bg-white"
					>
						<motion.p
							animate={{scale: 1.3}}
							transition={
								!firstLoad ?
								{delay: 1}
								:
								{delay: 0.5}
							}
							className="centered text-darkprimary text-4xl font-bold"
						>
							[noname]
						</motion.p>
					</motion.div>
				)}
			</AnimatePresence>

			<ScrollRestoration />
		</>
	)
}