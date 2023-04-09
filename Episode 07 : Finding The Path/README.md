## Namaste React Course by Akshay Saini

# Chapter 07 - Finding the Path

## Assignment:

## Q. What are various ways to `add images` into our App? Explain with `code examples`.

A: We can use image url provided as CDN. (We can export to the cloud which will be optimised image for better performance this is good).

```
<img src="https://reactjs.org/logo-og.png" alt="React Image" />
```

-We can keep the file in our app, import and use.

```
import Image from "../assets/img.png";
const App = () => {
  return <img src={Image} alt="logo" />
}

```

## Q. What would happen if we do `console.log(useState())`?

A:We get an array `[undefined, function]` where first item in an array is `state` is `undefined` and the second item in an array is `setState` `function` is bound dispatchSetState.

## Q. How will `useEffect` behave if we `don't add` a `dependency array`?

A:

-   It will call on every compoenent render or re-render.

```
useEffect(() => {
	console.log("I will everytime when this component renders")
});
```

-   When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the initial render of the component.

```
useEffect(() => {
	console.log("I will run only once when the component gets rendered)")
}, []);
```

-   When the `dependency array contains a condition`, the callback function will be executed `one time` during the initial render of the component and also rerender if there is a `state change in the condition`.

```
useEffect(() => {
	console.log("I'll run each time when condtion state changes.")
}, [condition]);
```

## Q. What is `SPA`? (Single Page Appication)

A: Doesn't reload the app when reute changes.

## Q. What is the difference between `Client Side Routing` and `Server Side Routing`?

A: In `Server-side routing or rendering (SSR)`, every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.

In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All `Single Page Applications uses client-side routing`.

-   Add `Shimmer Effect` without installing a library. (Done Added in Restaurant List Component.)

-   Install `react-router-dom`. (Done Created route, dynamci route).

-   Create an `appRouter` and Provide it to the app. `Done`
-   Create a `Home, About, and Contact Page` with Link (use child routes). `Done`
-   Make an `Error page` for routing errors. `Done`
-   Create a `Restaurant Page` with dynamic restaurant ID. `Done`
-   Create a `login Page` using `Formik Library`. `Done`

## References:

-   [React Router DOM](https://reactrouter.com/en/main)
-   [Client Side Routing](https://reactrouter.com/en/main/start/overview)
-   [Formik](https://formik.org/)
