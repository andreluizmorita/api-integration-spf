const delay = require("mocker-api/utils/delay");
const noProxy = process.env.NO_PROXY === "true";

const proxy = {
  "GET /albums/0vshXZYhBkbIoqxyC2fXcF": require("./data/album.json"),
  "POST /search?query=metallica&offset=0&limit=5&type=album,track": require("./data/buscar.json"),
};

module.exports = noProxy ? {} : delay(proxy, 100);
