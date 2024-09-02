import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// this will ensure that what ever style the developer add
// outside of a component, the said style over writes its
// counterpart in the main component
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
