import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Heading</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

const HeadingComponent = () => (
    <div className='title'>
        <h1 tabIndex={00}>H1 Heading</h1>
        <h2 tabIndex={01}>H2 Heading</h2>
        <h3 tabIndex={02}>H3 Heading</h3>
    </div>
);

const NavComponent = () => (
    // <React.Fragment>
    <>
        <HeadingComponent />
        <hr />
        <HeadingComponent></HeadingComponent>
        <hr />
        {HeadingComponent()}
    </>
    // </React.Fragment>
);

const ToolBarComponent = () => (
    <div className='header'>
       <div> <strong>Ayush Anand</strong> </div>
       <div>
            <input type="text" placeholder="Enter to Search"/>
       </div>
       <div>
            <img src={'https://media.istockphoto.com/id/1293099290/photo/cartoonic-tea-shirt-design-cartoon-or-smiley-made-of-real-objects-best-for-dental-product-or.jpg?b=1&s=170667a&w=0&k=20&c=J_-2Q40_KIrOT_2rLowwIZPtNpzSd8rnONcQ_TrIUBQ='} width={50} height={50} alt="logo" srcset="" />
       </div>
    </div>
);

const AppComponent = () => <ToolBarComponent />;

root.render(<AppComponent />);
