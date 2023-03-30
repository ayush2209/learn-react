# Chapter 04

## Is `jsx` is mandatory for React?

A: - No! But with the help using jsx it's very easy to build react app. - JSX maked developement fast, easy to maintian the code and debug.

## Is `ES6` Mandatory for react?

A: No! We can still develope react app without ES6.

## How can i Write comment in `JSX`?

## What is `<React.Fragement></React.Fragement>` and `<></>`?

A: React accepts only one parent directory at aprent lavel. It mean we need a parent div and all the other things/items can be wrapped into parent section.
-But if we want to add two dev at parent lavel, react wont allowed.
to overcome from this, we have a option that add a parent div and add all in this, but when we debug and see our html/DOM we'll see there is one div/section with no use, which is not a good practice while developing.
-So react gives us an option to add a parent div/section and wrap all nested section in that and in DOM tree it doesnot create an entry.which is `<React.Fragement></React.Fragement>`

### Syntax

```
<React.Fragement>
    <div className="sectionOne">
    </div>
    <div className="sectionTwo">
    </div>
</React.Fragement>
```

-   And `<></>` is exactly samne as `<React.Fragement></React.Fragement>`

## What is Virtual DOM?

A:`The virtual DOM (VDOM)` is a programming concept where an ideal, or “virtual”, representation of a UI is kept in `memory` and `synced` with the “real” DOM by a library such as `ReactDOM`. This process is called `reconciliation`.

## What is `Reconciliation` in React?

## Why we need keys in React? When do we nedd keys in React?

## Can we use index as keys in React?

## What is props in React? Ways to pass props?

## What is a config driven UI?
