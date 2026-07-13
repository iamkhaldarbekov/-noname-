import {clsx} from 'clsx';
import {cva} from 'class-variance-authority';
import {twMerge} from 'tailwind-merge';

import Button from './Button';

const inputVariants = cva(
	"py-[17px] px-[32px] max-w-[354px] outline-none",
	{
		variants: {
			variant: {
				light: "bg-white/[0.15] text-white placeholder:text-white",
				dark: "bg-lightgray text-darkprimary"
			}
		},
		defaultVariants: {
			variant: "light"
		}
	}
)

export default function Input({
	className,
	buttonText,
	variant = "light",
	onDone,
	...props
}: any) {
	return (
		<div className="flex">
			<input
				className={twMerge(clsx(inputVariants({variant}), className))}
				{...props}
			/>
			<Button
				variant={variant}
				onClick={onDone}
			>
				{buttonText}
			</Button>
		</div>
	)
}