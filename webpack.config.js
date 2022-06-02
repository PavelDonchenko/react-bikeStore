module.exports = {
    configureWebpack: {
      module: {
        rules: [
          {
            test: /\.png$/,
            include: /node_modules/,
            type: "javascript/auto"
          }
        ]
      }
    }
  }