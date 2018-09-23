const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index", // string | object | array  // defaults to ./src
    devtool: "inline-source-map",
    output: {
        path: path.resolve(__dirname, "dist"), // string
        filename: "bundle.js", // string    // the filename template for entry chunks
        publicPath: "./assets/", // string    // the url to the output directory resolved relative to the HTML page
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
}