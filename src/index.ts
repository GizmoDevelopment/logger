import { timestamp, logTypeMarker } from "@/components";

// Utils
import { formatContent } from "@utils/essentials";
import { LogType } from "@utils/enums";
import { LOG_COLORS } from "./utils/constants";

function log (type: LogType, content: unknown[]): void {

	const
		color = LOG_COLORS[type],
		prefix = `${timestamp()} ${logTypeMarker(type, color)}`,
		formattedContent = content.map(c => formatContent(c, color));

	// process.stdout.write(`${prefix} ${serializedContent.join(" ")}\n`);
	console.log(prefix, ...formattedContent);
}

export function info (...content: unknown[]): void {
	log(LogType.Info, content);
}

export function success (...content: unknown[]): void {
	log(LogType.Success, content);
}

export function warn (...content: unknown[]): void {
	log(LogType.Warning, content);
}

export function error (...content: unknown[]): void {
	log(LogType.Error, content);
}

export default {
	info,
	success,
	warn,
	error
};