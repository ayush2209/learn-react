# Chatpeter Exploring the World.

---

# Assignment

## Q. What is Microservice and Monolith architecture , What is the difference between?

-   Monolith Vs Microservices
    ![Alt Text](./monolith-microservices.png)

## `Monolith`

-   Monolithic Architecture is like a big container, wherein all the software components of an app are assembled and tightly coupled, i.e., each component fully depends on each other.

```Example:
Let’s take an example of an e-commerce site- Which has 3 Component
1.Service
2.Payment
3.Products

In this architecture all the three component will be directly connected to each other
    |-----------------------------------|
    |  Service <=> Payment <=> Products |
    |-----------------------------------|
Now Suppose: If we want to change in code or something we have to change in all the services as well.
***
Disadvantage:
***
Large and Complex Applications:
    -For large and complex application in monolithic, it is difficult for maintenance because they are dependent on each other.
Slow Development:
    -It is because, for modify an application we have to redeploy whole application instead of updates part. It takes more time or slow development.
Unscalable:
    -Each copy of the application will access the hole data which make more memory consumption. We cannot scale each component independently.
Unreliable:
    -If one services goes down, then it affects all the services provided by the application. It is because all services of applications are connected to each other.
Inflexible:
    -Really difficult to adopt new technology.It is because we have to change hole application technology.
***
Advantage:
***
Simplicity of development:
    -The monolithic approach is a standard way of building applications. No additional knowledge is required. All source code is located in one place which can be quickly understood.
Simplicity of debugging:
    -The debugging process is simple because all code is located in one place. You can easily follow the flow of a request and find an issue.
Simplicity of testing:
    -You test only one service without any dependencies. Everything is usually clear.
Simplicity of deployment:
    -Only one deployment unit (e.g. jar file) should be deployed. There are no dependencies. In cases when UI is packaged with backend code you do not have any breaking changes. Everything exists and changes in one place.
Simplicity of application evolution:
    -Basically, the application does not have any limitations from business logic perspective. If you need some data for new feature, it is already there.
Cross-cutting concerns and customizations are used only once:
    -You should take care about cross-cutting oncerns only once. For instance, security, logging, exception handling, monitoring, choosing and setting up tomcat parameters, setup of data source connection pool, etc.
Simplicity in onboarding new team members:
    -The source code is located in one place. New team members can easily debug some functional flow and to get familiar with the application.
Low cost on early stages of the application:
    -All source code is located in one place, packaged in a sinlge deployment unit and deployed. What can be easier? There is no overhead neither in infrastructure cost nor development cost.
```

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

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

## Q. What is async and await?

The async function declaration declares an async function where the await keyword is permitted within the function body. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

```
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();

Output:
> "calling"
> "resolved"
```
