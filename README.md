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
