import React from "react";
import ReactDOM from "react-dom/client";

const h1JSX = //This is recat element.
    (
        <h1 id='jsxH1' className='h1Heading'>
            Hi, this heading is created by JSX
        </h1>
    );

const TitleComponent = () => <h1> Title Component </h1>;

const reactElement = (
    <p>Hi I am an Element tryitng to render inside an component.</p>
)

const HeadingComponent = () => (
    <div id='conatiner'>
        {/* {10+20} We can write any javscript expression inside component using {any js expression} */}
        <TitleComponent />
        {/* {TitleComponent()} //At the end a react component is just a javscript function which can be calles using () thats it..
        <TitleComponent></TitleComponent> */}
        {/* All the above three lines are doing same things. */}
        {reactElement}
        <h1> Heading Component </h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
