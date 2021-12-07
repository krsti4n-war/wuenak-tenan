const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    template: './index.html',
    //    favicon: './favicon.svg'
    chunks: ["index", "component"]
  }),
  new HtmlWebpackPlugin({
    template: './menu.html',
    filename: "menu.html",
    //    favicon: './favicon.svg'
    chunks: ["menu" ,"component"]
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
  }),
]

const modules = {
  rules: [
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: "asset/resource",
    }, 
  ],
}

module.exports = {
  plugins,
  context: path.resolve(__dirname, 'src'),
  entry: { 
    component: ['./main.js', './component.css'],
    index: ["./index.css"],
    menu: ["./menu.css"]
  },
  /*
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  */
  module: modules
};
