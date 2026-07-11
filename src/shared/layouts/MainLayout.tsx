import {Outlet, ScrollRestoration} from 'react-router';

import {
	Footer,
	Nav,
	Offer
} from '../containers';

export default function MainLayout() {
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

			<ScrollRestoration />
		</>
	)
}