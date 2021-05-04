const path = require ( 'path' )

module.exports = {
   entry: { main: './src/index.js' },
   output: {
      path: path.resolve ( __dirname, 'dist' ),
      filename: 'main.js'
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            use: [
               'style-loader',
               'css-loader'
            ]
         }
      ]
   }
}