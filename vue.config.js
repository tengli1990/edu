const path = require("path");
module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      }
    },
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", path.join(__dirname, "src"))
      .set("@cmpt", path.join(__dirname, "src/components"))
      .set("@router", path.join(__dirname, "src/router"));
  }
};
