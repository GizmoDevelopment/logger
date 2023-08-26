import { highlight } from "@utils/formatting";

// Types
import { Color } from "@utils/enums";

export function formatContent (content: unknown, color: Color): unknown {
	switch (typeof content) {
		case "string":
		case "number":
			return highlight(`${content}`, color);
		case "object":

			if (content instanceof Error) {
				content.stack = content.stack?.replace(/^(\w+)?Error: (.+)/, `${color}$2${Color.None}`);
				content.stack += "\n";
			}
			
			return content;
		default:
			return content;
	}
}
