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

import React, { Component } from "react";
import ReactDOM from "react-dom/client";

//> React Element
/*
const heading = <h1>Namaste React using JS 🚀</h1>;
const body = <h1>Hey i am the Body Explore me </h1>;
*/
//> React Functional Component
/*
const Title = () => <h1>Hello i am the React Heading ✅</h1>;
const HeadingComponent = () => (
  <div id="container">
    <Title />
    {Title()}  //* This also works and completly new Bro .
    <h1 className="heading">Namaste React Functional Component</h1>
    {body}
    //!this is a react variable and how we can render with curly brasis .and inside the curly brasis all content is also santized before executing by jsx . 
  </div>
);

//* This is what we called componet composition . where there are component inside the Component .

const root = ReactDOM.createRoot(document.querySelector(".main"));
root.render(<HeadingComponent />);
// root.render(heading); //* This is the way we render react elem

*/

//> Header Component

const Header = ()=>{
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://i.pinimg.com/736x/f7/bd/47/f7bd473b21744aa670ca1e42256d13c1.jpg"
          ></img>
        </div>
        <div className="nav-list">
          <ul>
            <li> Home</li>
            <li> About us </li>
            <li> Contact Us</li>
            <li> Cart</li>
          </ul>
        </div>
      </div>
    );
}

//> Resturant Card 
const ResturantCard = (props)=>{
// const ResturantCard = ({resName="Hotel Not Found !"})=>{  //* This is also a way to destructure the props
    const {resName = "Hotel Not Found !"} = props; //* Destructuring the props 
    
    return (
      <div className="res-card">
        <img
          alt="image not found"
          src="https://i.pinimg.com/736x/09/e4/ac/09e4acfe3778136b196f0202b45f49d5.jpg"
          style={{ objectFit: "cover", height: "180px", width: "280px" , borderRadius:"0.5em" }}
        />
        <h3 className="res-titile">{resName}</h3>
        <p>North Indian, Chinese, Fast Food Janta Nagar</p>
        <h4>4.7 *</h4>
      </div>
    );
}
ResturantCard.defaultProps = {
  resName: "Hotel Not Found",
};
//> Body Component 
const Body = ()=>{
    return (
      <div className="body">
        <div className="search">Seaech</div>
        <div className="res-container">
          <ResturantCard resName="Meghna Foods" />
          <ResturantCard resName="KFC" />
          <ResturantCard resName="Nimantran" />
          <ResturantCard resName="Macdonalds" />
          <ResturantCard resName="Burger Kings" />
          <ResturantCard resName="Dominoz's" />
          <ResturantCard />
          <ResturantCard />
          <ResturantCard resName="mayFair" />
        </div>
      </div>
    );
}

const Applayout = ()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('.main'))
root.render(<Applayout/>)