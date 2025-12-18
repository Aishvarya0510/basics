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
  consistent Hasing algorithm
  zero config
  transitive dependencies
  -----------------------------------------------

  https://browsersl.ist/
  https://browserslist.dev/?q=bGFzdCAyIENocm9tZSB2ZXJzaW9ucw%3D%3D
  browserslist - make this app compactible for all browsers
*/


import React from 'react';
import ReactDOM from 'react-dom/client';

//React.createElement => Object => HTMLElement(render)

// const heading = React.createElement(
//   "h1",
//   { id: "heading"},
//  "Nameste React")

// ----- this is jsx element --> a variable storing value ---- //
const Heading =  (
  <h1 className ="head" tabIndex="5">
      Nameste React using JSX element
    </h1>
);

const Heading2 = () => (
  <h1 className ="head" tabIndex="5">
      Nameste React using function
    </h1>
);
// ----- this is React Functional Component ---- //
//A function returns JSX code
const HeadingComp = () => {
  return (
  <div className="container">
    {Heading}
     <Heading2/>
   <h1>Parent Functional COmponent</h1>
  </div>
  );
}

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<HeadingComp/>);