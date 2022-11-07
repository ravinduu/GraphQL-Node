const server = require("./server");
const { PORT, PATH } = require("./app-constants");

module.exports = server.listen(PORT, () =>
  console.info(`Server started at :${PORT}${PATH}`)
);
