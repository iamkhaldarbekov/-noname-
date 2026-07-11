import {MainLayout} from './layouts';
import {routes as mainRoutes} from '../main/routes';
import {routes as productsRoutes} from '../products/routes';

export const routes = [
	{
		path: '/',
		element: <MainLayout />,
		children: [
			...mainRoutes,
			...productsRoutes
		]
	},
	{
		path: '*',
		element: <p>not found...</p>
	}
]