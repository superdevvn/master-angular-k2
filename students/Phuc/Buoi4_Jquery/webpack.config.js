const path = require('path');

module.exports = {
  entry: "./src/index", // string | object | array  // defaults to ./src
  output: {
    path: path.resolve(__dirname, "dist"), // string
    filename: "bundle.js", // string    // the filename template for entry chunks
   // publicPath: "/assets/", // string    // the url to the output directory resolved relative to the HTML page
    devtool:"source-map",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ]
},
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
   }    
}