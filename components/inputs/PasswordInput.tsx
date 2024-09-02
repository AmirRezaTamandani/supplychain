"use client";
import React, { FC, useState } from "react";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/outline";
import { Input } from "../UI/Input";
import { cn } from "@/util/classAuthority";

interface PasswordInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	placeholder: string;
	label: string;
	className?: string;
	name: string;
}

const PasswordInput: FC<PasswordInputProps> = ({
	placeholder,
	className,
	label,
	name,
	...props
}) => {
	const [showPassword, setShowPassword] = useState(false);

	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className={className}>
			<label className="text-xs text-gray-500">{label}</label>
			<div className="relative">
				<Input
					aria-label="password input"
					type={showPassword ? "tel" : "password"}
					className={cn("w-full p-2")}
					placeholder={placeholder}
					{...props}
				/>
				<button
					type="button"
					onClick={toggleShowPassword}
					className="absolute inset-y-0 left-3 flex cursor-pointer items-center pr-3"
				>
					{showPassword ? (
						<EyeIcon className="h-6 w-6 text-gray-200" />
					) : (
						<EyeSlashIcon className="h-6 w-6 text-gray-200" />
					)}
				</button>
			</div>
		</div>
	);
};

export default PasswordInput;
