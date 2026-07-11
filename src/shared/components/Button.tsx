import {clsx} from 'clsx';
import {cva} from 'class-variance-authority';
import {twMerge} from 'tailwind-merge';

const buttonVariants = cva(
	"cursor-pointer text-nowrap duration-100 hover:opacity-[0.8] disabled:opacity-[0.5]",
	{
		variants: {
			variant: {
				light: "bg-lightgray color-darkprimary",
				dark: "bg-darkprimary text-white"
			},
			size: {
				sm: "py-[12px] px-[24px]",
				md: "py-[16px] px-[32px]"
			}
		},
		defaultVariants: {
			variant: "light",
			size: "md"
		}
	}
)

export default function Button({
	children,
	className,
	variant,
	size,
	...props
}: any) {
	return (
		<button
			className={twMerge(clsx(buttonVariants({variant, size}), className))}
			{...props}
		>
			{children}
		</button>
	)
}