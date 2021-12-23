const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "lib"),
      filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                  presets: ['@babel/preset-env']
                }
            },
        ]
    },
}