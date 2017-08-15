# Module Bundler + Testing: Style Loading

1. Run `git clone https://github.com/mzgoddard/webpack-testing-1.git`

1. Enter the `style-loading` directory in the repository clone

1. Run `yarn`

1. Run `yarn run dev`

   Stylesheets have been added to this project and will be included in the build. This first build errors because webpack by default does not know how to parse CSS and tries parsing it as JS.

1. Run the below command to add the needed loaders. At minimum `style-loader` and `css-loader`, `postcss-loader` and postcss plugins or alternatively loaders like `sass-loader`, `less-loader`, `stylus-loader`, can add additional common styling utilities.

   ```shell
   yarn add style-loader css-loader postcss-loader autoprefixer
   ```

1. Add the below configuration to `webpack.config.js` after the babel-loader config. This instructs webpack to use the just installed loaders to parse and render css.

   The configuraiton includes enabled CSS Modules. This will transform classes into identifiers that help avoid human errors around reusing existing keys in a project or keys also used by parts of a site included from another project.

   ```js
   {
     test: /\.css$/,
     use: [
       'style-loader',
       {
         loader: 'css-loader',
         options: {
           modules: true,
           localIdentName: '[path][name]__[local]--[hash:base64:5]',
         },
       },
       {
         loader: 'postcss-loader',
         options: {
           plugins: [require('autoprefixer')],
         },
       },
     ],
   },
   ```

1. Run `yarn test`

   The test has errors as like webpack, jest doesn't by default know how to handle css.

1. Add this configuration in jest's configuration area of package.json.

   ```json
   "moduleNameMapper": {
     "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
   ```

   Add this file to the project.

   ```js
   // __mocks__/styleMock.js
   
   module.exports = {};
   ```

1. Run `yarn test`

   We're stilling getting errors due to the configuration. The css doesn't cause build errors but now the tests are failing as some rely on CSS Module behaviour to lookup smaller parts of the rendered components.

1. Run this command

   ```shell
   yarn add -D identity-obj-proxy
   ```

   And change the css jest configuration

   ```json
   "moduleNameMapper": {
     "\\.(css|less)$": "identity-obj-proxy",
   ```

1. Run `yarn test`

   It builds and passes. `identity-obj-proxy` uses ES6 Proxy objects to return the key as the value in the map we'd otherwise get from CSS Modules. This works up until the same issue CSS Modules solves, if two parts of something being tested share a class name.
