import { cn } from "@/util/classAuthority";
import * as React from "react";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: boolean;
	success?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			type = "text",
			success = false,
			error = false,
			maxLength,
			...props
		},
		ref,
	) => {
		// this will allow you to control conditions of the error state for focus state search "focus" i've handled it with CSS
		const errorClass = error ? "border-red-500" : "";
		const successClass = success ? "border-green-500" : "";

		return (
			<input
				ref={ref}
				dir="rtl"
				maxLength={maxLength}
				type={type}
				className={cn(
					"flex h-10 w-full rounded-md border-2 px-3 py-[10px] text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-cyan-500 focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-50",
					errorClass,
					successClass,
					className,
				)}
				{...props}
			/>
		);
	},
);

Input.displayName = "Input";

export { Input };
