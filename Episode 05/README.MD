# Chapter 05: React Hook

## Two types of Import and Export.

-   Default Export/Import :

    -   export default ComponentName/Variable.
    -   import Component from _path_;

-   Named Export Import
    -   export const name = [] or () => {}
    -   import { Funcation_Name/Var_Nane } from '../file_path
    ### When it is required to import moltiple things then we can use named import/export.

# React Hooks

-React hooks is nothing but a Normal JS function/utility function written by Facebook developers.
`useState()`: It maintain the state of our component.
-When ever the state variabe changes, React will `re-render `the component.

## Q: Why do we need `useState Hook`?

A: `useState hook` is used to maintain the state in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component.
The useState hook is a special function that takes the `initial state` as an `argument` and `returns an array` of two entries. UseState encapsulate only singular value from the state, for multiple state need to have useState calls.

#### Syntax for useState hook

```
const [state, setState] = useState(initialstate);
```

#### Importing: To use useState you need to import useState from react as shown below:

```
import React, { useState } from "react";
```

we can use Hooks in Functional Components

```
const Example = (props) => {
  // You can use Hooks here!
  return <div />;
}
```

```
    const [var_Name] = useState();
```

---

# Assignment

## Theory Assignment:

-   What is the difference between `Named export`, `Default export`, and `* as export`?
-   What is the importance of `config.js` file?
-   What are `React Hooks`?
-   Why do we need `useState Hook`?

## Coding Assignment:

-   `Clean up` your code.
-   Create a `Folder Structure` for your app.
-   Make `different files` for each Component.
-   Create a `config file`.
-   Use all types of `import and export`.
-   Create a `Search Box` in your App.
-   Use `useState` to create a variable and `bind` it to the input box.
-   Try to make your `search bar work`.

# Reference:

-   React Fiber/Reconciliation : (https://github.com/acdlite/react-fiber-architecture)
-   AS Code Repo: (https://bitbucket.org/namastedev/namaste-react-live/src/master/)
