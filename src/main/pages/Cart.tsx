import {
	Stepper,
	Button
} from '../../shared/components';
import {useStore} from '../../shared/store';

export default function Cart() {
	const cart = useStore(state => state.cart);
	const changeQuantity = useStore(state => state.changeQuantity);

	function getSubtotal() {
		return cart.reduce((acc, item) => (
			acc + item.quantity * item.price
		), 0)
	}
	
	return (
		<>
			<main className="flex-1 bg-lightgray pt-[64px] pb-[48px]">
				<div className="cart-wrapper">
					<h1 className="font-cd text-darkprimary text-[36px] max-sm:text-[24px]">Your shopping cart</h1>
				</div>

				{cart[0] ?
					<div className="cart-wrapper mt-[45px]">
						<div className="grid grid-cols-3 font-cd text-[14px] text-darkprimary pb-[12px] border-b-[1px] border-bordergray max-sm:hidden">
							<p>Product</p>
							<p className="text-center">Quantity</p>
							<p className="text-right">Total</p>
						</div>

						<div className="flex flex-col gap-y-[20px] mt-[20px] pb-[32px] border-b-[1px] border-bordergray">
							{/* Desktop content */}
							{cart.map((el, index) => (
								<div className="grid grid-cols-3 items-center text-darkprimary max-sm:hidden" key={index}>
									<div className="flex items-center gap-x-[20px]">
										<div className="w-[110px] h-[135px]">
											<img className="object-cover h-full w-full" src={el.img} />
										</div>
										<div className="flex flex-col gap-y-[8px]">
											<p className="font-cd text-[20px]">{el.name}</p>
											<p className="text-[14px]">A timeless ceramic vase with a tri color grey glaze.</p>
											<p>£{el.price}</p>
										</div>
									</div>
									<Stepper
										value={el.quantity}
										onChange={(quantity) => changeQuantity(el.name, quantity)}
										className="justify-self-center"
									/>
									<p className="text-right text-[18px]">£{el.price * el.quantity}</p>
								</div>
							))}

							{/* Mobile content */}
							{cart.map((el, index) => (
								<div className="hidden items-center text-darkprimary max-sm:flex max-sm:gap-x-[20px]" key={index}>
									<div className="w-[135px] h-[165px] shrink-0">
										<img className="object-cover h-full w-full" src={el.img} />
									</div>
									<div className="flex flex-col gap-y-[8px]">
										<p className="font-cd">{el.name}</p>
										<p className="text-[14px]">A timeless ceramic vase with a tri color grey glaze.</p>
										<p>£{el.price}</p>
										<Stepper
											value={el.quantity}
											onChange={(quantity) => changeQuantity(el.name, quantity)}
											className="mt-auto"
										/>
									</div>
								</div>
							))}
						</div>

						<div className="mt-[30px] text-right text-primary">
							<div className="flex items-center gap-x-[16px] font-cd w-fit ml-auto">
								<p className="text-[20px]">Subtotal</p>
								<span className="text-[24px] text-darkprimary">£{getSubtotal()}</span>
							</div>
							<p className="text-[14px] mt-[12px]">Taxes and shipping are calculated at checkout</p>
							<Button
								variant="dark"
								className="mt-[16px] max-sm:w-full"
							>
								Go to checkout
							</Button>
						</div>
					</div>
					:
					<div className="cart-wrapper">
						<p className="mt-5 text-[18px] text-darkprimary">Cart is empty</p>
					</div>
				}
			</main>
		</>
	)
}