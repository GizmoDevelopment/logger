// Utils
import { paint } from "@utils/formatting";
import { Color } from "@utils/enums";

// Types
import type { LogType } from "@utils/enums";

export function timestamp (): string {

	const timestamp = new Date().toLocaleDateString("sv", {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		hour12: false
	});

	return `${Color.BrightBlack}[${timestamp}]${Color.None}`;
}

export function logTypeMarker (type: LogType, color: Color): string {
	return `${paint(`${type.padEnd(7)}`, color)} ${paint("|", Color.BrightBlack)}`;
}