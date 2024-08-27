// Modules
import globals from "globals";
import { configs } from "@gizmo-dev/eslint-plugin";

export default [
	...configs.ts,
	{
		languageOptions: {
			ecmaVersion: 2019,
			globals: {
				...globals.node
			},
			parserOptions: {
				project: true
			}
		}
	}
];
