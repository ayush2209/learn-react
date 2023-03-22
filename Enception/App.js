const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World Using React !"
);

//What if we need to create a nested html like below.

// <div id="parent">
//     <div id="child">
//         <h1></h1>
//     </div>
// </div>

const parent = React.createElement(
    'div' , {id: 'parent'} , 
    React.createElement('div' , {id: 'child'} , 
    React.createElement('h1' , {id: 'heading'} , 'Hello, I am h1 tag from nested html.') 
    ), 
)

console.log(parent); //What will be op. - It'll be an onject. //React element.
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
// reactRoot.render(parent); // We can not write two time render method it'll override the latest one.
