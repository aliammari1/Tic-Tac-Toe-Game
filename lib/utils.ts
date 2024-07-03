import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * @description Merges the provided ClassValue arrays using the `twMerge()` method.
 * 
 * @param {ClassValue[]} inputs - 0 or more input values of a class type that are to
 * be merged with the target class using the twMerge() method.
 * 
 * @returns {instance of `ClassValue} a merged object of the class type provided as
 * input.
 * 
 * 	TwMerge returns a merged representation of all input class objects after traversing
 * their attributes and merging any relevant properties. It is crucial to know that
 * TwMerge preserves the order in which inputs are provided when merging objects.
 * This implies that if two items with similar keys are present, their values will
 * be combined in the output rather than overwriting each other.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
