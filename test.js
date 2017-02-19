const moji = require('./lib/app.js');

require("http").Server((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end(moji(3));
}).listen(80);