// webpack.config.js
(function () {
	"use strict";
	const webpack = require("webpack");
	const path = require("path");

	const nodeSass = require("node-sass");
	const sassLoader = require("sass-loader");
	const sourceMap = require("source-map");
	const extractTextPlugin = require("extract-text-webpack-plugin");

	const config = {
		context: path.resolve(__dirname, "src"),
		entry: "",
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "dist.bundle.js"
		},
		devtool: "source-map",
		module: {
			rules: [{
				test: /\.scss$/,
				use: [{
					loader: "style-loader",
				}, {
					loader: "css-loader",
				}, {
					loader: "sass-loader"
				}],
				test: /\.woff2?$|.ttf$|\.eot$|\.svg$/,
				use: [{
					loader: "file-loader"
				}]
			}]
		},
		plugins: [
	    new extractTextPlugin("styles.css"),
	  ]
	};
	module.exports = config;
}());
