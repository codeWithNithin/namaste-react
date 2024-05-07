# namaste react

- From scratch to advanced
- How React works behind the scenes
- How Browser renders react code
- Browser: Google chrome -> better dev tools
- IDE: VS code editor

# EP-01 Inception

- Agenda
- step1 -> with plan HTML, write Hello World
- step2 -> with JS, write Hello World
- step3 -> with React, write Hello World

# CDN

- step4 -> How to import CDN
- step5 -> explore CDN
- step6 -> creating React code
- step7 -> writing JS code seperately
- step8 -> add CSS
- step9 -> written nested HTML elements using React.createElement() method
- step10 -> Got to know about JSX, another alternative for creating React elements.
- step11 -> Will the order of files matter? yes it is.
- step12 -> task of render method is explored
- step13 -> how React works?
- step14 -> Diff between library and framework

# Theory

- Browser doesnt know, what is react. so we need to get react into our project.
- 2 ways to get React into our project, 1. CDN, 2. NPM package
- React at the end of the day is JS.
- React code is written by facebook developers
- 2 links from CDN, react.development.js, react-dom.development.js
- why 2 CDN links? because, React doesnt only work on desktop, it runs on mobile, tabs etc...
- react.development.js -> this gives the whole react thing
- react-dom.development.js -> bridge between the React and browser
- React.createElement('div', {}, 'content') -> this will create a react element
- first arg -> element
- second arg -> attributes, which later passed as props
- third arg -> content
- ReactDOM.createRoot() -> will create a root
- root.render() ->
- When React was, build it was build with philosopy that we want to manipulate the DOM using JS.
- Most costly operation inside a browser or a web page, is to when the DOM not needs to be manipulated.
- React can be written in 2 ways, 1. using React elements, 2. using JSX
- using React elements for complex HTML structure is hard, for that we can use JSX.
- render method, will replace all the tags present in it. not append it.
- React only works in place, whatever we make root as.
- At the end of the day, React is JS.

# Assignments

- What is CDN?
- why do we use CDN?
- What is crossOrigin in CDN?

# Ep-02 Ignite our app

- difference between git and github
- How to make app production ready
- create-react-app is already ignited, it has all the super powers
- How to create our own create-react-app
- React itself cant do production ready app. there are lot of other packages make our code fast...
- intro to NPM, doesnt stand for Node Package Manager. but it manages packages.
- exploring NPM
- How to add NPM, to our app
- npm init
- After running npm init, we get package.json file, which is basically a configuration for our NPM. basically all the configuration of NPM
- pacakges / dependencies
- Most important package Bundler, to make our app production ready, our whole code needs to be bundled together, our whole code needs to be minified, whole code needs to be cleaned. so a bundler will do all that.
- ex: webpack, parcel and vite, task is to, bundle or package our app so that it can be pushed to production
- create-react-app, comes with webpack bundler.
- used parcel bundler.
- parcel will ignite our app, parcel is a beast.
- to install parcel, use npm i -D parcel
- there are 2 types of dependencies: 1. normal dependencies and 2. dev dependencies
- normal: means these packages are used in both dev and production
- dev dependencies: means packages that are only used in dev env...
- minification, bundling etc... must be done in dev env only.
- when the package gets installed, it will come up with version number prefixed with either ^ or ~
- ^ - updates the major version automatically
- ~ - updates the minor version automatically
- package-lock.json - it keep the track of exact version of the packages.
- in a project, every pacakge has its own package.json.
- we can remove node_modules folder, as its huge and heavy.
- we need package.json and package-lock.json.
- generally, whatever we can regenerate, no need to put it on git.
- building our app using parcel, npx parcel index.html.
- Its not a good thing to import CDN links to our project
- 1. Fetching from CDN, will make a network call to unpkg.com. as we already have it in npm
- 2. suppose if we have another version of react comes in then, again we need to change the url. instead we can use react as a package.
- install react as a normal depency, as we need in production as well.
- after installing React and ReactDom, we need to import it.
- if we get err like, Browser scripts cannot have imports and exports, then add type="module" in script tag.
- Most costliest thing for the browser is to load images.
- To make our app first, React is not the only thing making it fast, there are so many more things.
- parcel is giving energy to our app, it also giving muscles to our bones.

# parcel features

- Hot module Reload (HMR)
- File Watching algorithm - written in c++
- Caching
- Faster Builds because of caching
- Image optimization
- Minification
- Bundling
- Compressing
- code splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling

# Ep-03 Laying the foundation

- Run NPM scripts
- inside pacakge.json file, go to scripts object and add start key
- Lets start the foundations of React
  --
