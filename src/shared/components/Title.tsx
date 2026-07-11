import {clsx} from 'clsx';

export default function Title({children, className}: any) {
	return (
		<p
			className={clsx(className, "text-[32px] font-cd max-sm:text-[20px]")}
		>
			{children}
		</p>
	)
}