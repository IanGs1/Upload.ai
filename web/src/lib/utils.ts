import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleClick() {
  window.open('https://github.com/iangs1', '_blank', 'noopener,noreferrer')
}