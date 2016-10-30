
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = [
{
	//JS設定
	entry: {
		main: './src/jsx/main.jsx',
		index: './src/jsx/index.jsx',
	},
	output: {
		path: 'build/js/',
		filename: '[name].js'
	},

	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: { presets: ['es2015', 'react'] }
			}
		]
	},
	//ビルド前のコードを開発者ツールのSourcesに表示される
	devtool: 'inline-source-map',
	//require などで外部ファイルの拡張子を省略
	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: 'build/index.html'
		})

	],
},

{
	//Style Sheet setting
	entry: {
		main: './src/sass/main.scss',
		index: './src/sass/index.scss'
  },
  output: {
		path: 'build/css/',
		filename: '[name].css'
  },
  module: {
		loaders: [
		  {
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		  },
		  {
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
		  }
		]
  },
  plugins: [
			new ExtractTextPlugin("[name].css")
		]
}

];
