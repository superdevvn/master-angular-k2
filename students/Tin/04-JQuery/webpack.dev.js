const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    output: {
        path: path.resolve(__dirname, "dist"), // string
        filename: "bundle.js", // string
        publicPath: "/assets/", // string
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ],
    },
    resolve: {
        extensions: [".js", ".tsx", ".ts"],
    }
}