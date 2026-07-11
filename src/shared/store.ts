import {create} from 'zustand';

type Item = {
	img: string;
	name: string;
	price: number;
	wide: boolean;
	quantity: number;
}

type StoreState = {
	cart: Item[];
	addToCart: (item: Item) => void;
	changeQuantity: (name: string, quantity: number) => void;
}

export const useStore = create<StoreState>()(set => ({
	cart: [],
	addToCart: (item) => set(state => {
		let found = false;
		
		const newCart = state.cart.map(el => {
			if (el.name == item.name) {
				found = true;
				return {...el, quantity: el.quantity + item.quantity};
			}

			return el;
		})

		if (!found) newCart.push(item);

		return {cart: newCart};
	}),
	changeQuantity: (name, quantity) => set(state => ({
		cart: state.cart.map(el => (
			el.name == name ? {...el, quantity} : el
		))
	}))
}))