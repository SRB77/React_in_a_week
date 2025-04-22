// * Let's create this with help of React
/* 
    <div class="parent">
      <div class="class1">
        <h1 id="heading1">Hello i am heading 1</h1>
        <h2 id="heading2">Hello i am heading 2</h2>
      </div>
      <div class="class2">
        <h1 id="heading3">Hello i am heading 3</h1>
        <h2 id="heading4">Hello i am heading 4</h2>
      </div>
    </div> 
 */


//? This is core js .
/*
import React from "react"
import ReactDOM from "react-dom/client"
const parent = React.createElement("div", { className: "parent" }, [
  React.createElement("div", { className: "class1" }, [
    React.createElement("h1", { id: "heading1" }, "Hello i am heading1"),
    React.createElement("h1", { id: "heading2" }, "Hello i am heading2"),
  ]),
  React.createElement("div", { className: "class1" }, [
    React.createElement("h1", { id: "heading1" }, "Hello i am heading3 "),
    React.createElement("h1", { id: "heading2" }, "Hello i am heading4"),
  ]),
]);
const root = ReactDOM.createRoot(document.querySelector(".main"));
root.render(parent) 
*/

//? Let's dive into Component 
import React from "react";
import ReactDOM from "react-dom/client";

//> React Element 
const heading = (<h1>Namaste React using JS 🚀</h1>)


//> React Functional Component 
const Title = ()=> <h1>Hello i am the React Heading ✅</h1>
const HeadingComponent = ()=> (
    <div id="container">
        <Title/>
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
)
//* This is what we called componet composition . where there are component inside the Component .

const root = ReactDOM.createRoot(document.querySelector(".main"));
root.render(<HeadingComponent/>); 
// root.render(heading); //* This is the way we render react elem

