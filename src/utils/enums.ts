export enum Color {

	None = "\x1b[0m",

	BackgroundWhite = "\x1b[47m",
	BackgroundRed = "\x1b[41m",

	BrightBlack = "\x1b[30;1m",
	BrightRed = "\x1b[31;1m",
	BrightGreen = "\x1b[32;1m",
	BrightBlue = "\x1b[94m",
	BrightYellow = "\x1b[33;1m",
	BrightMagenta = "\x1b[35;1m",

	Cyan = "\x1b[36m",
	Red = "\x1b[31m",
	Green = "\x1b[32m",
	Yellow = "\x1b[33m",
	Magenta = "\x1b[35m",
	Orange = "\x1b[38;5;208m"
}

export enum LogType {
	Info = "INFO",
	Success = "SUCCESS",
	Warning = "WARNING",
	Error =  "ERROR"
}