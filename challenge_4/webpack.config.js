module.exports = {
  mode: "development",
  entry: __dirname + "/client/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }

    ]
  }
};
