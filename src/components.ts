// Utils
import { paint } from "@utils/formatting";
import { Color } from "@utils/enums";

// Types
import type { LogType } from "@utils/enums";

export function timestamp (): string {

	const
		date = new Date(),
		timestamp = date.toLocaleDateString("sv", {
			hour: "numeric",
			minute: "numeric",
			second: "numeric",
			hour12: false
		}),
		timezoneOffset = date.toString().match(/\w{1,3}([+-]\d{4})/)?.[1] || "";

	return `${Color.BrightBlack}[${timestamp} UTC${timezoneOffset}]${Color.None}`;
}

export function logTypeMarker (type: LogType, color: Color): string {
	return `${paint(`${type.padEnd(7)}`, color)} ${paint("|", Color.BrightBlack)}`;
}