const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const outputPath = path.resolve(__dirname, '../static/dist/')

const webpackConfig = {
	entry: {
		app: [
			'react-hot-loader/patch',
			path.resolve(__dirname, './src/index.js')
		]
	},
	output: {
		path: path.resolve(__dirname, '../static/dist/'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.(scss|css)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(gif|png|jpg|jpeg)$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, './src/assets/'),
				use: 'url-loader?limit=10000&name=assets/img/[name]-[hash].[ext]'
			},
			{
				test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "url-loader?limit=10000&name=assets/fonts/[name].[ext]"
      },
      {
				test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader?limit=10000&name=assets/fonts/[name].[ext]'
      },
			{
				test: /\.(webm|mp4)$/,
				loader: 'file-loader?limit=10000&name=assets/video/[name]-[hash].[ext]'
			}
		]
	},
	resolve: {
		alias: {
			'components': path.resolve(__dirname, './src/components'),
			'containers': path.resolve(__dirname, './src/containers'),
			'constants': path.resolve(__dirname, './src/constants'),
			'decorators': path.resolve(__dirname, './src/decorators'),
			'selectors': path.resolve(__dirname, './src/selectors'),
			'actions': path.resolve(__dirname, './src/actions'),
			'reducers': path.resolve(__dirname, './src/reducers'),
			'store': path.resolve(__dirname, './src/store'),
			'assets': path.resolve(__dirname, './src/assets'),
		}
	},
	plugins: [
		new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery'",
      "window.$": "jquery"
  	}),
		new CopyWebpackPlugin([
			{ 
				context: './src/assets/images/',
				from: '**/*', 
				to: outputPath + '/assets/img/'
			}
		]),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/assets/index.html'),
			filename: 'index.html',
			path: outputPath
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		port: 7777,
		proxy: [
			{
				path: '/api/',
				target: 'http://127.0.0.1:8000'
			},
			{
				path: '/media/',
				target: 'http://127.0.0.1:8000'
			}
		],
		historyApiFallback: true,
		inline: true,
		hot: true,
		host: '127.0.0.1'
	}
}

module.exports = webpackConfig