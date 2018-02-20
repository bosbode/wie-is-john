var path = require('path'),
UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
config = require("./gulp/config.json");

module.exports = {
	entry: {
		App: "./user/themes/" + config.theme + "/assets/scripts/App.js",
		Vendor: "./user/themes/" + config.theme + "/assets/scripts/Vendor.js"
	},
	output: {
		path: __dirname + "/user/themes/" + config.theme + "/assets/compiled/scripts",
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
	},
	plugins: [
    new UglifyJsPlugin()
  ]
}