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


import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
      "h1",
      {
        id: "title",
        style: { marginLeft: "10px" },
        className: "div-wrap",
      },
      "Heading 1"
    );

    const heading2 = React.createElement(
      "h2",
      {
        id: "title2",
 
      },
      "Heading 2"
    );
    const container = React.createElement(
      "div",
      {
        id: "container",
      },
      [heading, heading2]
    );

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(container);