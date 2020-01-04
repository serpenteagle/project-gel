const path = require("path");

module.exports = {
	module: {
		rules: [
			{ test: /\.js$/, use: "babel-loader" },
			{
				test: /\.(png|jpg|svg|gif)$/,
				use: ["file-loader"]
			}
			// ,
			// {
			// 	test: /\.svg$/,
			// 	loader: "svg-inline-loader"
			// }
		]
	}
};
