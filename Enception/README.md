---------------------------------------- Class Notes ----------------------------------------

## Q1. What is `CDN` and why do we use CDN?
A content delivery network (CDN) refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content. The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.

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
Answer:
Emmet is a set of plug-ins for text editors that allow for high-speed coding and editing in HTML, XML, XSLT, and other structured code formats via content assist. The project was started by Vadim Makeev in 2008 and continues to be actively developed by Sergey Chikuyonok and Emmet users.


## Q2. Difference b/w `framework and library`.
Answer: 
`framework`: A framework is a set of pre-written code that provides a structure for developing software applications.
`library`: A library, on the other hand, is a collection of pre-written code that can be used to perform specific tasks.


## Q3. Why is React knwon as `React`?
Answer: `React` is called `React` because it was designed to be a `declarative`, `efficient`, and `flexible` Java`Script library for building user interfaces.
The name "React" was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.


## Q4. What is `cross-origion` in the script tag?
Answer:
The crossorigin attribute, valid on the <audio>, <img>, <link>, <script>, and <video> elements, provides support for CORS, defining how the element handles cross-origin requests, thereby enabling the configuration of the CORS requests for the element's fetched data. Depending on the element, the attribute can be a CORS settings attribute.
The crossorigin content attribute on media elements is a CORS settings attribute.

### _Syntax_
```
<script crossorigin="use-credential | anonymous">
```


## Q5. Diff b/w `React` and `ReactDOM`?
Answer:
React is a JavaScript library for building User Interfaces whereas ReactDOM is also JavaScript library that allows React to interact with the DOM. The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().


## Q6. What is difference between `react.development.js` and `react.production.js` files via `CDN`?
Answer:
Development is the stage of an application before it's made public while production is the term used for the same application when it's made public. Development build is several times `(maybe 3-5x)` `slower` than the `production build`.


## Q7. What are `async` and `defer` in JavaScript?
Answer: `Async` - The async attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the    page, and `executed as soon` as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.
### _Syntax_
```sh
<script src="demo_async.js" async></script>
```

`Defer` - The defer attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed after the page` has finished parsing(when browser finished DOM construction). The `defer attribute` tells the browser `not to wait for the script`. Instead, the browser will continue to process the HTML, build DOM.
### _Syntax_
```sh
<script src="demo_defer.js" defer></script>
```

## References:
- https://beta.reactjs.org/apis/react/createElement
- https://www.youtube.com/watch?v=IrHmpdORLu8

Credit to Chetan