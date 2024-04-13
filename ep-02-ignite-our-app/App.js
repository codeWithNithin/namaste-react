import React from 'react';
import ReactDOM from 'react-dom/client';

// To create element, we use createElement
const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'Hello World in React!!!'
);

// Below Result will be JS object
console.log(heading);

{
  /* <div>
<div>
  <h1>I am h1 tag</h1>
  <h2>I am h2 tag</h2>
</div>
</div> */
}

// So writing complex nested HTML elements using React Element is complicated, but with JSX we can write it easily
const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'I am h1 tag'),
    React.createElement('h2', {}, 'I am h2 tag'),
  ]),
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'I am h1 tag'),
    React.createElement('h2', {}, 'I am h2 tag'),
  ]),
]);

// ReactElement(Object) => HTML(Browser Understands)

const root = ReactDOM.createRoot(document.getElementById('root'));

// Takes the object, converts it into tag and puts it in the DOM
root.render(parent);
