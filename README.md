# Working & Testing Semantic UI/React Apps

A simple React app that uses Semantic UI as a front-end framework.

## Purpose
The goal of this app is to demonstrate how to:

1. Build a React App from scratch (as opposed to running the command `create-react-app app-name`)
2. How to use Semantic UI
3. How to build out a full test schema using WebdriverIO (e2e, unit, ect.)

# Step 1: Create your Node project
There are a few ways to create React apps, including running the command: `create-react-app app-name` provided you have React install globally.

Because we're building from scratch, I started by creating my node project:
* `mkdir semantic-ui-app`
* `cd semantic-ui-app`

Then, because we're creating a new node project, we can run:
* `npm init`

You should then be prompted to input information about your project. As an easy work-around, you can just click `enter` and proceed through each question or feel free to add in additional information.

# Step 2: Install React
Because this is a React app, we should probably **install React** (and all other React components - pun/no pun intended).

* `npm install --save react react-dom`

Furthermore, we're going to use **webpack** for bundling our code into a single JS file. Webpack is a lib that is used to bundle and output JS code to the location specified.

* `npm install --save webpack webpack-dev-server`

The **webpack-dev-server** lib helps us to run a development server, which gives the benefits like `hmr & live reload`.

We'll use **babel** to convert our es6 code to an es5 browser understandable code.

* `npm install --save-dev babel-cli babel-core babel-loader babel-plugin-transform-object-rest-spread babel-preset-es2015 babel-preset-react babel-preset-stage-0 babel-register`.

By running the command above, we're telling our app to use the babel presets. The babel presets are able to understand the es6/react code and will convert it to es5.

**Want to make sure everything is actually being installed?** Just check your *package.json* file.

# Step 3: Setup Babel in your package.json
Once you've run the command above to install Babel, navigate to your *package.json* file and add the following:

```
// your package.json file
 "babel": {
   "presets": [
   "es2015",
   "react",
   "stage-0"
   ],
   "plugins": [
      "transform-object-rest-spread"
   ]
 }
 ```

 Through this addition, we're telling our app to make sure of the Babel presets we've just installed. By adding these presets, Babel can now take our es6 code and convert it to es5.

 The installation of a plugin allows for the understanding of the new rest/spread operator syntax.

# Step 4: Configuring Webpack
In order to make use of our babel loader, we need to configure webpack in order to transpile and output our bundle.js file.

In the root directory of your project, create a folder called `webpack`:

```
mkdir webpack
cd webpack
touch webpack.dev.config.js
```

To configure your webpack.dev.config.js file, add the following:

```
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, '../index.js')
  ],
}
```

This imports webpack and defines an entry point. In order to bundle our source files, we must add loaders. Add the following to your `webpack.dev.config.js` file just after the '],' containing module.exports:

```
module: {
  loaders: [{
    test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
    }, {
          test: /\.less$/,
          loaders: ["style-loader", "css-loader", "less-loader"]
      }
    ]
},
```

We add the `babel-loader` for loading js/jsx files and use `less-loader` for loading less files. In order to use `less-loader`, we need to also install `style-loader` and `css-loader`, which will directly append CSS to our `index.html`.

Since we haven't installed `style-loader`, `css-loader` and `less-loader`, we should run the following command:

* `npm install --save-dev style-loader css-loader less-loader`
* `npm install --save-dev less`

The final step in our setup of our webpack config is to provide options for our dev server:

```
devServer: {
  contentBase: __dirname + '/dist',
  historyApiFallback: true
}
```

After adding this bit, our webpack.dev.config.js should look something akin to this:

```
var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
  entry: [
    path.join(parentDir, 'index.js')
  ],
  module: {
      loaders: [{
        test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
      },{
            test: /\.less$/,
            loaders: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  output: {
    path: parentDir + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true
  }
}
```

# Step 5: Creating our index.html file
Inside the root directory of your project, create an `index.html` file.

Add the following to set up your `index.html` file:

```
<!DOCTYPE html>
<html>
  <head>
    <title> Bug Reporting Sheet </title>
  </head>
  <body>
    <div id="app"></div>
    <script type="text/javascript" src="/bundle.js"></script>
  </body>
</html>
```

Notice that inside the `index.html` file, there is a mount point `<div id="app"></div>`. We have also added the source to our `bundle.js` file.

# Step 6: Building our index.js file
The index.js file will be the entry point for our webpack configuration. Inside your directory, create `index.js`:

```
import React from 'react';
import ReactDOM from 'react-dom';

// main app
import App from './containers/App';

ReactDOM.render(<App />, document.getElementById('app'))
```

We've imported `React` and `ReactDOM` from their respective packages.

# Step 7: Building our App.js file
We're going to be creating a folder called `containers` where we'll store our `App.js` file.

* `mkdir containers`
* `cd containers`
* `touch App.js`

Inside the App.js file, add the following code:

```
import React, {Component} from 'react';

export default class App extends Component {
  render () {
    return <p>Bug Testing App</p>
  }
}
```

Inside our App.js file, we've created a simple react component that will display 'Bug Testing App' when rendered.

# Step 8: Running your app in the browser
In order to run the app in the browser, we need to first ensure there's a script ready to help launch.

We want to create a npm script that will run just by typing `npm run dev` in the console.

Navigate to your `package.json` file and inside the script object, add a new dev script:

```
"scripts" {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "./node_modules/.bin/webpack-dev-server --config ./webpack/webpack.dev.config.js"
}
```
After adding the script above, you should be good to go!
Type the following in your console:

* `npm run dev`

And navigate to `http://localhost:8080`. You should see your app up and running! 
