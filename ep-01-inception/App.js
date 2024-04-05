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
  <h1></h1>
</div>
</div> */
}

const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement(
    'div',
    { id: 'child' },
    React.createElement('h1', { id: 'heading' }, 'I am h1 tag')
  )
);

const root = ReactDom.createRoot(document.getElementById('root'));

// Takes the object, converts it into tag and puts it in the DOM
root.render(heading);
