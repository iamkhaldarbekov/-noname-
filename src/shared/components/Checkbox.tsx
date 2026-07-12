import {useState} from 'react';
import {cva} from 'class-variance-authority';
import CheckboxIcon from '../../assets/icons/checkbox.svg?react';

type CheckboxProps = {
	onChange?: (checked: boolean) => void;
	children: any;
	value?: boolean;
}

const checkboxVariants = cva(
	"relative rounded-[2px] border-[1.5px] w-[16px] h-[16px] duration-100",
	{
		variants: {
			variant: {
				checked: "border-primary bg-primary",
				notChecked: "border-[#DCDCDC]"
			}
		},
		defaultVariants: {
			variant: "notChecked"
		}
	}
)

export default function Checkbox({
	onChange,
	children,
	value = false
}: CheckboxProps) {
	const [checked, setChecked] = useState<boolean>(value);

	function controlChecked(value: boolean) {
		setChecked(value);
		if (onChange) onChange(value);
	}

	return (
		<button
			className="flex items-center gap-x-[12px] cursor-pointer select-none"
			onClick={() => controlChecked(!checked)}
		>
			<div className={checkboxVariants({variant: checked ? "checked" : "notChecked"})}>
				{checked && (
					<CheckboxIcon className="centered size-3" />
				)}
			</div>
			<p className="text-darkprimary">{children}</p>
		</button>
	)
}