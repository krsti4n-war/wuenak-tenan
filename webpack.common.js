const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const pages = [
    new HtmlWebpackPlugin({
        template: "./index.html",
        //    favicon: './favicon.svg'
        chunks: ["index", "component"],
    }),
    new HtmlWebpackPlugin({
        template: "./menu.html",
        filename: "menu.html",
        //    favicon: './favicon.svg'
        chunks: ["menu", "component"],
    }),
    new HtmlWebpackPlugin({
        template: "./custom-menu.html",
        filename: "custom-menu.html",
        chunks: ["custom_menu", "component"],
    }),
    new HtmlWebpackPlugin({
        template: "./contact-us.html",
        filename: "contact-us.html",
        chunks: ["component"],
    }),
]

const plugins = [
    ...pages,
    new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
    })
];


module.exports = {
    plugins,
    context: path.resolve(__dirname, "src"),
    entry: {
        component: ["./main.js", "./component.css"],
        index: [
            "./index.css",
            "./menu_recc1.png",
            "./burger.png",
            "./reviewer1.png",
            "./banner.png"
        ],
        menu: ["./menu.css", "./menu_a.png"],
        custom_menu: ["./custom_menu.js", "./custom_menu.css"],
    },
    output: {
        filename: "[name].[contenthash].js",
        clean: true,
    },
    module: {
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
    },
};
