# Module Bundler + Testing: File Resolving

1. Run `yarn`
2. Run `yarn run dev` and read the build error you get
3. Fix the build error by instructing webpack where to find the `"clock"` package

   Add the block below to `webpack.config.js` after the `output` block.

   ```js
   resolve: {
     alias: {
       'clock$': 'not-clock',
     },
     extensions: ['.js', '.json', '.jsx'],
     modules: ['node_modules', join(__dirname, 'vendor')],
   },
   ```

4. Run `yarn run dev` again and open a browser at "http://localhost:8080"
5. Run `yarn test`
6. Fix jest's test errors by instructing it where to find the `"clock"` package

   Add the block below to `package.json` at the end of the file. Don't forget to add a comma to the line before the jest block.

   ```json
   "jest": {
     "moduleNameMapper": {
       "^clock$": "not-clock"
     },
     "moduleDirectories": [
       "node_modules",
       "vendor"
     ],
     "moduleFileExtensions": [
       "js",
       "json",
       "jsx"
     ]
   }
   ```

7. Run `yarn test` again
