# Clean React Trees

A small repo with simplified examples of React component anti-patterns. Avoiding these patterns keeps our code more readable, maintainable and performant.

There are examples of anti-patterns in most of the components. Browse through the source code and read the comments to see how take a better approach.

## Anti-patterns

- Using `div` or other HTML elements to fix React's `Adjacent JSX elements must be wrapped in an enclosing tag` error
  - See [App.js](./src/App.js)
- Creating unnecessary components
  - See [unnecessarySplits](./src/unnecessarySplits/index.js)
- Spreading object props onto child components
  - See [opaqueProps](./src/opaqueProps/index.js)
- Creating single use JSX variables
  - See [singleUseJSXVariables](./src/singleUseJSXVariables/index.js)
- Waiting to conditionally return null.
  - See [returnNullEarly](./src/returnNullEarly/index.js)
- Destructing props in a functional component's body
  - See [destructurePropsInDefinition](./src/destructureArgsInProps/index.js)

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

