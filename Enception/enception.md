---------------------------------------- Class Notes ----------------------------------------

## Q1. What is `CDN`?

## Q2. What is `crossorigin`?

## Q3. React.createElement(a,b,c):
    :Accept three arguement where
        a= tag name (whhch tag we want to create).
        b= An Object used to give attribute to the class.
        c= tag content (what content we want to display).
        like this,
        <!--
            const heading = React.createElement('h1',
                {id :'heading'},
                'Hello World Using React !'
            );
        -->

## Q4. What is crateRoot in react and what is the use of this.

    - Syntax: ReactDOM.createRoot(document.getElementById('root'));;
    - In react we need a root (in simple word we can say a container tachnically not the same) where our whole code esecute and render using react.render().

## Q5. Can we use react.render('element') multiple time in a file?

    - No! We can not write two time render method it'll override the latest one.

## Q6.

---------------------------------------- Assignment ----------------------------------------

## Q1. What is `Emmet`?

## Q2. Difference b/w `framework and library`.

Answer: `framework`:
        `library`:

## Q3. Why is React knwon as `React`?
Answer:

## Q4. What is `cross-origion in the script tag`?

## Q5. Diff b/w `React` and `ReactDOM`?

## Q6. What is difference between `react.development.js` and `react.production.js` files via `CDN`?

## Q7. What are `async` and `defer` in JavaScript?
Answer: `Async` - The async attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the    page, and `executed as soon` as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.