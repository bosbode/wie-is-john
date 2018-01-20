var path = require('path');

module.exports = {
	entry: {
		App: "./user/themes/john/assets/scripts/App.js",
		Vendor: "./user/themes/john/assets/scripts/Vendor.js"
	},
	output: {
		path: __dirname + "/user/themes/john/assets/temp/scripts",
		filename: "[name].js"
	},
	module: {
		rules: [{
			test: require.resolve('jquery'),
			use: [{
				loader: 'expose-loader',
				options: 'jQuery'
			},
			{
				loader: 'expose-loader',
				options: '$'
			}]
		}],
		loaders: [
			{
				loader: "babel-loader",
				query: {
					presets: ["es2015"]
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}
