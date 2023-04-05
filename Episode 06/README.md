# Chatpeter Exploring the World.

---

# Assignment

## Q. What is Microservice and Monolith architecture , What is the difference between?

-   Monolith Vs Microservices
    ![Alt Text](./monolith-microservices.png)

## Q. Why do we need a useEffect Hook?

-   React will `re-render` the whole component when the State will change.

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

## Q. What is Optional Chaining?

-   If a varible is exit then only it'll check for next value in conditional expression.
-   We can avoid unwanted error if we use this, suppose if some data is not present in api resposne then it'll stop checking further.

```Syntax
if(data?.list?.name) {
}
in Word this means if data is there then only check for data.list and if data.list is there then only go for data.list.name, if at any point something is not there in structure like list is not there in `data` then it'll not check for name.
```

## Q. What is Shimmer UI?

-   Load the skeleton of UI withiut any data with some animated effect and once the data comes load the UI.
-   Alternate of `Loader Spinner`.
-   User frinedly/ not hurting on user eyes/looks very smooth/ all big companies uses this.

## Q. What is the difference between JS expression and JS statement?

-   let x = 10; // is a statement.
-   (console.log(10)) // is an expression.

## Q. What is Conditional Rendering?

-   Render the `React COmponent` based on condition.

```Syntax of Conditional Rendering
    const var_Name = true;
    {
        (
             ? return (<h1>Hello! I am loading becuase the value is true.</h1>) : return (<h1>Hello! I will load once the value will be false.</h1>)
        )
    }
```

## Q. What is CORS?

## Q. What is async and await?
