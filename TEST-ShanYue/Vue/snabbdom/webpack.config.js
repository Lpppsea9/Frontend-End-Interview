const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "./dist"),
		// publicPath: "/huna3", //在浏览器中访问的路径 http://localhost:3000/xxx(js所在的路径)
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "./public/index.html"),
			// publicPath: "/hunsss/", //开发时html模板 script引入js文件的路径
			// templateParameters: {
			// 	BASE_URL: "/",
			// },
			filename: "index.html",
			title: "手搭 Vue2 开发环境", //作为 htmlWebpackPlugin.options.title 输出到打包后的html文件中
		}),
	],
	devServer: {
		static: {
			directory: path.resolve(__dirname, "./dist"),
			// publicPath: "/hunas", //http://localhost:8080/huna/main.js
		},

		host: "localhost", // 启动服务器域名
		port: 3000, // 端口号
		allowedHosts: "all",
		open: true, // 是否自动打开浏览器
		compress: true, // 是否自动 gzip 压缩
		// 设置代理
	},
	stats: {
		all: true, // 关闭所有统计信息
		assets: true, // 显示资源信息
		errors: true, // 显示错误信息
		warnings: true, // 显示警告信息
		timings: true, // 显示构建时间
		// 你可以根据需要启用其他选项
	},
};
