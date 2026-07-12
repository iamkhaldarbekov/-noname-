import theDandyChair from '../assets/images/the-dandy-chair.jpg';
import theDandyChair2 from '../assets/images/the-dandy-chair-2.jpg';
import theDandyChair3 from '../assets/images/the-dandy-chair-3.jpg';
import rusticVaseSet from '../assets/images/rustic-vase-set.jpg';
import theSilkyVase from '../assets/images/the-silky-vase.jpg';
import theLucyLamp from '../assets/images/the-lucy-lamp.jpg';
import thePoplarSofa from '../assets/images/the-poplar-suede-sofa.jpg';

type Product = {
	img: string;
	name: string;
	price: number;
	wide: boolean;
	type: "furniture" | "homeware" | "sofas" | "light fittings";
	designer: "Robert Smith" | "Liam Gallagher" | "Biggie Smalls" | "Thom Yorke";
}

export const products: Product[] = [
	{
		img: theDandyChair,
		name: "The Dandy Chair",
		price: 250,
		wide: false,
		type: "furniture",
		designer: "Liam Gallagher"
	},
	{
		img: rusticVaseSet,
		name: "Rustic Vase Set",
		price: 155,
		wide: false,
		type: "homeware",
		designer: "Thom Yorke"
	},
	{
		img: theSilkyVase,
		name: "The Silky Vase",
		price: 125,
		wide: false,
		type: "homeware",
		designer: "Thom Yorke"
	},
	{
		img: theLucyLamp,
		name: "The Lucy Lamp",
		price: 399,
		wide: false,
		type: "light fittings",
		designer: "Robert Smith"
	},
	{
		img: thePoplarSofa,
		name: "The Poplar suede sofa",
		price: 980,
		wide: true,
		type: "sofas",
		designer: "Biggie Smalls"
	},
	{
		img: theDandyChair3,
		name: "The Dandy Chair 3",
		price: 250,
		wide: false,
		type: "furniture",
		designer: "Liam Gallagher"
	},
	{
		img: theDandyChair2,
		name: "The Dandy Chair 2",
		price: 250,
		wide: false,
		type: "furniture",
		designer: "Liam Gallagher"
	}
]