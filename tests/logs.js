const logger = require("../lib");

// Basic
logger.info("This is an 'info' log");
logger.success("This is a 'success' log");
logger.warn("This is a 'warning' log");
logger.error("This is an 'error' log");

console.log("\n");

// Errors
logger.error(new Error("This is an error object"));

console.log("\n");

// Arrays
logger.info("this 1 is 2 a 3 number 4".split(" "));
logger.success("this 1 is 2 a 3 number 4".split(" "));
logger.warn("this 1 is 2 a 3 number 4".split(" "));
logger.error("this 1 is 2 a 3 number 4".split(" "));

// Objects
logger.info({
	a: true,
	b: 69,
	c: [ 1, 2, 3 ],
	d: {
		nested: true
	}
});

console.log("\n");