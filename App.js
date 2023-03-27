// To create element in react, it will return a object. it is a react element

const h1Tag = React.createElement('h1', {}, "I'm a h1 tag");
const h2Tag = React.createElement('h2', {}, "I'm a h2 tag");
const child1 = React.createElement('div', { id: 'child1' }, [h1Tag, h2Tag]);
const child2 = React.createElement('div', { id: 'child2' }, [h1Tag, h2Tag]);
const parent = React.createElement('div', { id: 'parent' }, [child1, child2]);

// const heading = React.createElement(
//   'h1',
//   { id: 'heading' },
//   'Hello world from react'
// );

// To map to DOM, we need to use ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
