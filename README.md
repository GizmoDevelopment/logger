```ts
import logger from "@gizmo-dev/logger";

logger.info("This is an 'info' log");
logger.success("This is a 'success' log");
logger.warn("This is a 'warning' log");
logger.error("This is an 'error' log");

logger.error(new Error("This is an error object"));

logger.info("This is an array", [ 1, 2, 3 ]);
```

Example output:

<img width="706" alt="Example output screenshot" src="https://github.com/GizmoDevelopment/logger/assets/25076630/64571459-223b-4ddc-a766-f1dd92cb8e33">
