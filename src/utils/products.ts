type Product = {
	img: string;
	name: string;
	price: number;
	wide: boolean;
}

export const products: Product[] = [
	{
		img: "/images/the-dandy-chair.jpg",
		name: "The Dandy Chair",
		price: 250,
		wide: false
	},
	{
		img: "/images/rustic-vase-set.jpg",
		name: "Rustic Vase Set",
		price: 155,
		wide: false
	},
	{
		img: "/images/the-silky-vase.jpg",
		name: "The Silky Vase",
		price: 125,
		wide: false
	},
	{
		img: "/images/the-lucy-lamp.jpg",
		name: "The Lucy Lamp",
		price: 399,
		wide: false
	},
	{
		img: "/images/the-poplar-suede-sofa.jpg",
		name: "The Poplar suede sofa",
		price: 980,
		wide: true
	},
	{
		img: "/images/the-dandy-chair-3.jpg",
		name: "The Dandy Chair 3",
		price: 250,
		wide: false
	},
	{
		img: "/images/the-dandy-chair-2.jpg",
		name: "The Dandy Chair 2",
		price: 250,
		wide: false
	}
]