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

-Normal JS function/utility function written by Facebook developers.
`useState()`: It maintain the state of our component.
-When ever the state variabe changes, React will `re-render `the component.

```
    const [var_Name] = useState();
```

`useEffects()`

# Reference:

React Fiber/Reconciliation : https://github.com/acdlite/react-fiber-architecture
