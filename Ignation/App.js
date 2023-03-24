const parent = React.createElement(
    "h1",{id: "h1_tag" }, "Episode : 02 ; Ignation the React Appilcation."
);
  
console.log(parent); // What will be op. - It'll be an onject. //React element ?
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(parent);