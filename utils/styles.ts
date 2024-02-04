import { twMerge } from "tailwind-merge";
import { ClassValue } from "clsx";
import clsx from "clsx";

export type ClassName = ClassValue;

export const cn = (...inputs: ClassName[]) => twMerge(clsx(inputs));
