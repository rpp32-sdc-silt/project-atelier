const path = require("path");
const webpack = require('webpack')
const dotenv = require('dotenv')
dotenv.config();

module.exports = {
  entry: path.resolve(__dirname, "client", "src", 'index.js'),
  output: { path: path.resolve(__dirname, "client", "dist") },
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
   })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
        }
      }
    ],
  },
};
