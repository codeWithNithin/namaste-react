// with vanilla JS
// const heading = document.createElement('h1');
// heading.innerHTML = 'Hello world using JS!';

// const root = document.getElementById('root');
// root.appendChild(heading);

// WITH REACT
// createElement in react doesnt return the html tag instead it returns a object that the react understands
// const heading = React.createElement('h1', {}, 'Hello world from REACT!');

// CHALLENGE

{
  /* <div id="parent">
<div id="child">
  <h1>im h1 tag</h1>
  <h2>im h2 tag</h2>
</div>
<div id="child2">
  <h1>im h1 tag</h1>
  <h2>im h2 tag</h2>
</div>
</div> */
}

// 1. need a parent div
// 2. pass a child div
const h1 = React.createElement('h1', {}, 'im h1 tag');
const h2 = React.createElement('h2', {}, 'im h2 tag');
const child = React.createElement('div', { id: 'child' }, [h1, h2]);
const child2 = React.createElement('div', { id: 'child2' }, [h1, h2]);

const parent = React.createElement('div', { id: 'parent' }, [child, child2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// render method will convert that react object to html element and renders it.
root.render(parent);
