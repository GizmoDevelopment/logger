// Utils
import { Color } from "@utils/enums";

/**
 * Paints a string
 */
export function paint (string: string, color: Color): string {
	return `${color}${string}${Color.None}`;
}

/**
 * Paints words in quotes, and numbers
 */
export function highlight (string: string, color: Color): string {

	// TODO: Highlight numbers

	return string
		// Highlight numbers
		// .replace(/(\d+)/gm, `${color}$1${Color.None}`)
		// Highlight 'words in single quotes'
		.replace(/('.*?')/gm, `${color}$1${Color.None}`)
		// Highlight "words in double quotes"
		.replace(/(".*?")/gm, `${color}$1${Color.None}`);
}