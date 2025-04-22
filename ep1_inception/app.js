//? this is a JS only script now we will do same thing using React CDN below .
//  <script>
//   const heading = document.createElement("h1");
//   heading.innerHTML = "Hello World from Javascript !";
//   const main = document.querySelector(".main");
//   main.appendChild(heading);
// </script>

// const heading = React.createElement("h1", {id:"headings",className:"heading1"}, "Hello welcome to React !");
// console.log(heading);
// const root = ReactDOM.createRoot(document.querySelector(".main"));
// root.render(heading);


//* Let's Build this using React 
/*
    <div id="parent">
        <div id = "child1">
            <h1 id="heading1"> HELLO I AM H1 TAG </h1>
            <h2 id ="heading2"> HELLO I AM H2 TAG </h2>
        </div>
        <div id = "child2">
            <h1 id ="heading3"> HELLO I AM H3 TAG </h1>
            <h2 id ="heading4"> HELLO I AM H4 TAG </h2>
        </div>
    </div>
 */

const parent = React.createElement('div',{id:"parent"},[
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading1" }, "Hello i am H1 tag"),
    React.createElement("h2", { id: "heading2" }, "Hello i am H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading3" }, "Hello i am H3 tag"),
    React.createElement("h2", { id: "heading4" }, "Hello i am H4 tag"),
    ])
]
);

const root = ReactDOM.createRoot(document.querySelector(".main"));
root.render(parent)