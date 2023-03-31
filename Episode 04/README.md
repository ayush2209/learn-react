# Chapter 04

## Is `jsx` is mandatory for React?

A: - No! But with the help using jsx it's very easy to build react app. - JSX maked developement fast, easy to maintain the code and debug.

## Is `ES6` Mandatory for react?

A: No! We can still develop react app without ES6.

## How can i Write comment in `JSX`?

### Syntax

```
{/_
Line 1
Line 2
_/}
```

## What is `<React.Fragement></React.Fragement>` and `<></>`?

A: React accepts only one parent directory at aprent level. It mean we need a parent div and all the other things/items can be wrapped into parent section.

-   But if we want to add two dev at parent level, react wont allowed. to overcome from this, we have a option that add a parent div and add all in this, but when we debug and see our html/DOM we'll see there is one div/section with no use, which is not a good practice while developing.
-   So react gives us an option to add a parent div/section and wrap all nested section in that and in DOM tree it doesnot create an entry which is `<React.Fragement></React.Fragement>`

### Syntax

```
<React.Fragement>
    <div className="sectionOne">
    </div>
    <div className="sectionTwo">
    </div>
</React.Fragement>

`or`
<>
    <div> </div>

    <div> </div>
</>
```

-   And `<></>` is exactly samne as `<React.Fragement></React.Fragement>` the only difference is in `<React.Fragement>` we can give `key` property and in `<></>` we can not.

## What is Virtual DOM?

A:`The virtual DOM (VDOM)` is a programming concept where an ideal, or “virtual”, representation of a UI is kept in `memory` and `synced` with the “real” DOM by a library such as `ReactDOM`. This process is called `reconciliation`.

## What is `Reconciliation` in React?

A:`Reconciliation` is the process through which React updates the Browser DOM and makes React work faster. React use a diffing algorithm so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components. React stores a copy of Browser DOM which is called Virtual DOM. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by Diffing Algorithm. React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.

## What is React Fiber?

A: React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React. Because Fiber is asynchronous, React can:

-   Pause, resume, and restart rendering work on components as new updates come in
-   Reuse previously completed work and even abort it if not needed
-   Split work into chunks and prioritize tasks based on importance

## Why we need keys in React? When do we nedd keys in React?

A: Keys in react is a special attribute and unique Identifier used to give an identity to the elements. - To keep each item identical with other/unique,

# Benefits of giving keys in react element,

-   Suppose there are a list/table having multiple data(lets assume 500).
    and if we dont provide unique key and if there is some in any one the row then react has to re-render all the 500 element.
-   `But` If we provide `keys` in React element which must be unique for each item and then if there will be change in any item suppose 400th item has some modification, now react will `re-render` only 400th element not all the.
-   So here we can see how big performace impact is there after using `key`.

### Example

```
<li key={0}>1</li>
<li key={1}>2</li>
<li key={2}>3</li>
```

## Can we use index as keys in React?

A: Yes, we can use the index as keys, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state. Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.

## What is props in React? Ways to pass props?

A: `props` stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another.

### Syntax

```
function App() {
  return (
    <div>
        <RestaurantCardComponent key={eachRes.data.id} `resObj={eachRes}` />
    </div>
  )
}
Here we can see "RestaurantCardComponent" we are using and passing resObj as pros and where we have decleared this compoenent there we have to add like this (below),

const RestaurantCardComponent = ({ resObj }) => {
    const {item1, item2 } = resObj
    return (
        <div>Name: {item1} </div>
    )
}
```

## What is a config driven UI?

A: A config driven UI is a UI that is buult and configured using declarative configuration file or data structure. rether than being hardcoded. Tha configuration file or data structure typically contains information about the structure of UI, such that the layout of elements, the properties and behaviours of each element,and any data sources or API that the UI intracts with.

-   This makes easier to maintain , extend and scale the UI and also allows for more rapis developement and iteration.

## Q: Difference between `Virtual DOM` and `Real DOM`?

A: DOM stands for `Document Object Model`, which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes. DOM is an interface that allows scripts to update the content, style, and structure of the document.

-   `Virtual DOM`
    -   The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM.
    -   Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.
    -   Reconciliation is a process to compare and keep in sync the two files (Real and Virtual DOM). Diffing algorithm is a technique of reconciliation which is used by React.
-   `Real DOM`
    -   The DOM represents the web page often called a document with a logical tree and each branch of the tree ends in a node and each node contains object programmers can modify the content of the document using a scripting language like javascript and the changes and updates to the dom are fast because of its tree-like structure but after changes, the updated element and its children have to be re-rendered to update the application UI so the re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render the entire list and not only those item that receives the update .

| `Real DOM`                                                       | `Virtual DOM`                                            |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| DOM manipulation is very expensive                               | DOM manipulation is very easy                            |
| There is too much memory wastage                                 | No memory wastage                                        |
| It updates Slow                                                  | It updates fast                                          |
| It can directly update HTML                                      | It can’t update HTML directly                            |
| Creates a new DOM if the element updates.                        | Update the JSX if the element update                     |
| It allows us to directly target any specific node (HTML element) | It can produce about 200,000 Virtual DOM Nodes / Second. |
| It represents the UI of your application                         | It is only a virtual representation of the DOM           |

# Thanks Chetan for Notes on DOM VS V-DOM.
