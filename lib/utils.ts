import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * @description Merges ClassValue objects into a new ClassX object using the `twMerge()`
 * method.
 * 
 * @param {ClassValue[]} inputs - 1-5 class values that will be merged into a single
 * value using the `twMerge()` function.
 * 
 * @returns {instance of the `ClassValue` class, given the inputs provided} a merged
 * Twilio class instance.
 * 
 * 	The `twMerge()` method is responsible for merging multiple objects into a single
 * object, and it takes in an array of inputs as its argument. The method returns a
 * new object that contains all of the properties of each input object, with any
 * conflicts or duplicates being resolved by the merge process.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
