const { name } = require("./package.json");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? `/${name}/` : "/",
  configureWebpack: {
    performance: { hints: false },
  },
};
