/*
npm init - create package.json,node modules
npm init -y -> ignore questions to create project
npm i -D parcel
npx parcel index.html (entry of the project - file)
parcel - created server, enabled all below


  HMR - Hot Module Replacement
  Internal algo of HMR -> File watcher algorithm -C++
  Once we give ctrl + s this algo will run.
  MINIFY
  Cleaning our code
  Dev and Production Build
  Super Fast build algorithm
  Image Optimization
  Caching while development
  HTTPS on dev
  port number
  consistent Hashing algorithm
  zero config
  transitive dependencies
  -----------------------------------------------

  https://browsersl.ist/
  https://browserslist.dev/?q=bGFzdCAyIENocm9tZSB2ZXJzaW9ucw%3D%3D
  browserslist - make this app compactible for all browsers
*/

import React from "react";
import ReactDOM from "react-dom/client";
import {useState}from "react";
/*
 React Element
React.createElement - gives JS object. -> Render to DOM -> HTML element
React.createElement  - gives react element - at the end it is JS object -> it is rendered as HTML element.
*/
const Title = React.createElement("h1", { id: "heading" }, "Nameste React");

/*

For displaying virtual DOM to Real HTML elements created from above statement -> 
we use ReactDOM

takes above object and convert to DOM.

*/
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading);
/*
JSX - It is very hard to write React.createElement("h1", {id: "heading"},"Nameste React");
for every HTML elements ,that is why JSX is created.

IT IS not HTML in javascript
IT is  HTML like syntax.
or XML like syntax.

*/ 
const jsxHeading = <h1 className="head">Nameste React using JSX</h1>;
console.log(jsxHeading);



/*
JSX - transpiled before it reaches the JS Engine
Because JS engine does not understand JSX. JS Engine knows only ecmascript.
When parcel builds our code - babel will convert JSX to js
Parcel is like manager. Babel is built along with it.

(<h1>Nameste React using JSX</h1>) JSX - this is converted to React.createElement() - which is a JS object
-> it is rendered as HTML element
                               [JS Object ]
Babel is converting JSX -> React.createElement() -> HTML element

If we want to use attributes inside JSX
we use camelcase - className,tabIndex
try how to use image src inside JSX
*/

/*
   React Components
   -> class based
   -> functional based

*/
//React Element:

const Heading = () => (
  <h1 className="head" tabIndex="5">
    Nameste React
  </h1>
);
//React functional component => a normal javascript  function that returns JSX element /  react element

const HeadingComponent = () => <h1>Namaste React Functional Component</h1>;
/* -------------------------BOTH ARE SAME-------------------------*/
const HeadingComponent2 = () => (
  <div id="container">
    <Heading /> 
    <h1>Namaste React Functional Component</h1>
  </div>
);
/*
  Component inside component - Component Composition
*/
/*
   we cannot render  React functional component like this
   root.render(HeadingComponent);
   Instead we can render like this
    root.render(<HeadingComponent/>);
*/



const Button = () => {
   const[count, setCount] = useState(0);
   const onClick = () => {
    setCount(count+1);
 
  }
  return (
    <div>
       <button type = "button" onClick={onClick}>Counter</button>
       <p>Clicked {count}</p>
    </div>
    
  );
}


root.render(<Button/>);
/*

✔ Correct mental model
------------->React component

Must return JSX

React controls when it runs

Hooks allowed

------------->Event handler

Runs when user clicks

React does NOT treat it like a component

Hooks NOT allowed
-------------------------------------------------------------------------------------------------

The right way to separate logic

If you want:

UI in one component

Logic in another function

You must pass the state setters, not use hooks inside handler.

Example: Logic separated correctly
function handleClick(count, setCount) {
  setCount(count + 1);
}

const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => handleClick(count, setCount)}>
        Counter
      </button>
      <p>Clicked {count}</p>
    </div>
  );
};


Now:

Hook is inside component

Logic is separate

Everything works
*/