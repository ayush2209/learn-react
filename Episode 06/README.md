# Chatpeter Exploring the World.

## React will `re-render` the whole component when the State will change.

    -On every click on serachbar component will re-render.

`useEffects()`

```Use Effect
    {
        -useEffect is a react Hook
        -we need to call this and it taked one function as an argumenet, which is a callback function.
        -[] -> Is known a dependency array for useEffect.
        -If we provide any veribale in this array,
        -It means this useEffect is dependent on that variable state and will on every state chabge for the variable.
        -There are two condition when useEffect calls,
            1> On Load
            2> On State chnages
        -There are two thing where useEffect call based on Dependency Array.
            1>If array is empty => Once after render
            2>If dependency array has any variable like [searchText], then it'll call Once after render + each time when searchText updates/re-render.
    }

    useEffect(() => {}, []); or useEffect(() => {}, [searchText]);

```

## Monolith Vs Microservices

![Alt Text](./monolith-microservices.png)
