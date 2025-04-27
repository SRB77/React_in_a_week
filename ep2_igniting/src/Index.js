//? Let's dive into Component
import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";





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