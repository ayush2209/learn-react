Q1. What is CDN?

Q2. What is crossorigin?

Q3. React.createElement(a,b,c) -> Accept three arguement
    where
        a= tag name (whhch tag we want to create.)
        b= An Object. [Used to give attribute to the class.]
        c= tag content (what content we want to display).
        like this,
        <!-- 
            const heading = React.createElement('h1',
                {id :'heading'},
                'Hello World Using React !'
            ); 
        -->

Q4. What is crateRoot in react and what is the use of this.
    - Syntax: ReactDOM.createRoot(document.getElementById('root'));;
    - In react we need a root (in simple word we can say a container tachnically not the same) where our whole code esecute and render using react.render().

Q5. Can we use react.render('element') multiple time in a file?
    - No! We can not write two time render method it'll override the latest one.

Q6. 
