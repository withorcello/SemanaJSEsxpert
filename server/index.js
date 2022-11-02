import config from "./config.js";
import server from "./server.js"
import { logger } from "./until.js"

server.listen(config.port)
.on("listening", () => logger.info(`server running at port ${config.port}`));