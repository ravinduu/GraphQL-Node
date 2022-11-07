const dotenv = require("dotenv");
const { join } = require("path");

dotenv.config();

require(join(process.cwd(), "src/index.js"));
