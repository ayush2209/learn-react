# Chapter 03 - Laying the Foundation

## Q. `JSX`
A:  - `JSX` stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.  
    - `JSX` converts HTML tags into react elements.

### Example 1 using JSX:
```
const jsxElement = <h1>JSX Element</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```
### Example 2 Without JSX:
```
const withOutJSXElement = React.createElement('h1', {}, 'Without JSX');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```
- `Image` tag using JSX: 
const element = <img src={url}></img>;

## Q: `React.createElement` vs `JSX`
A: 

## Q. `Benefits of JSX` / `Superpowers` of `JSX`.?
A:  - JSX helps us in keeping our code simpler and elegant when writing large pieces of code.
    - According to the React docs, most people find it helpful as a visual aid when working with UI inside the JavaScript code.
    - JSX also allows React to show more useful error and warning messages.
I   - If one is familiar with HTML, it is quite easy to use JSX when building React application
    - Faster than normal JavaScript as it performs optimizations while translating to regular JavaScript.
    - JSX Prevents Injection Attacks
    - JSX Represents Objects
        - Babel compiles JSX down to React.createElement() calls.
        - These two examples are identical:
            const element = (
            <h1 className="greeting">
                Hello, world!
            </h1>
            );

            const element = React.createElement(
            'h1',
            {className: 'greeting'},
            'Hello, world!'
            );
    - Can write any javascript expression into JSX : `YES` like below
###
```
    function formatName(user) {
    return user.firstName + ' ' + user.lastName;
    }

    const user = {
    firstName: 'Harper',
    lastName: 'Perez'
    };

    const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
    );
```

- `Behind the Scenes of JSX`

## Q. `Babel` & `parcel` role in JSX?
A:  `Parcel`: JSX code transpiled into React.createElement and reactElement convert into normal javascipt object which JRE/browser understand.
    `Babel` : Parcel gives `transpiling` task to babel. `Babel` is JS compiler, it takes the JS code and convert into browser undertsbale JS.

## Q. `Components` ?
A: Everything in react is a compoenent. like, button, input, searchbar ...
    React hhave two ways to write a component,
        - `Functional Components` : (Recommneded Way and very new syntax)
        - `Composing Components` : (Old Way)

###
``` Syntax for Funcational Component

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
```

## Q. Component Composition?
A: Rendering a compoent inside another component.

### Syntax
```sh
    const TitleComponent = () => <h1> Title Component </h1>;

    const HeadingComponent = () => (
        <div id='conatiner'>
            <TitleComponent />
            <h1> Heading Component </h1>
        </div>
    );
```


## Q. How many ways a componet can be called/loaded?
or `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A:  <TitleComponent />
    `{TitleComponent()}`: At the end a react component is just a javscript function which can be calles using () thats it..
    <TitleComponent></TitleComponent>
    {/* All the above three lines are doing same things. */}


## References:
- [Babel](https://babeljs.io/)
- [Attribute Type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type) 
- [JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Babel Playground](https://babeljs.io/repl#)
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)


## Coding Assignment:
- Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")
    - Create the `same element using JSX`
    - Create a `functional component of the same with JSX`
    - `Pass attribute` into the tag in `JSX`
    - `Composition of Component` (Add a component inside another)
    - `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.


- Create a `Header Component` from scratch using `Functional Component` with JSX
    - Add a `Logo on Left`
    - Add a `search bar in middle`
    - Add `User icon on right`
    - Add `CSS to make it look nice`
