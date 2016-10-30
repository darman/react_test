
/* webpackを読み込みます */
var webpack = require('webpack');

module.exports = {
	entry: {
		main: './src/jsx/main.jsx',
		index: './src/jsx/index.jsx',
	},
	output: {
		path: 'build',
		filename: './js/[name].js'
	},
  module: {
	  loaders: [
		  { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015', 'react'] } }
	  ]
  },
  /* プラグインの設定 */
  plugins: [
		/* DefinePluginの実行 */
		new webpack.DefinePlugin({
		// process.env.NODE_ENVを'production'に置き換える
		'process.env.NODE_ENV': JSON.stringify('production')
		}),
		/* UglifyJsPluginの実行 */
		// new webpack.optimize.UglifyJsPlugin({compress: {warnings:false} })
  ]
};
