import {
	Home,
	About,
	Cart
} from './pages';

export const routes = [
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: '/cart',
		element: <Cart />
	}
]