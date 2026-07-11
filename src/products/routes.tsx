import {
	Product,
	Products
} from './pages';

export const routes = [
	{
		path: 'products',
		children: [
			{
				index: true,
				element: <Products />
			},
			{
				path: ':id',
				element: <Product />
			}
		]
	}
]