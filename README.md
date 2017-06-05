# Sapmle React todo list

This is a simple todo list with React + Webpack + Babel.

While there are hundreds of similar projects out there, this project may be helpful with someone who:

* Just begin with React
* Want to learn React best practices
* Want to learn coding standars and design pattern

### Project structure

The good thing of React is that you can define your app's structure in any way you like. However, a clear and well defined structure will make your app easy to read, understand, co-operate with team members and also easy to maintenant when the project grows up with hundred or thousand of components.

I have defined the project structure as follow:

```
/src
  /helpers
  /services
  /components 
    /Footer 
      /index.jsx
      /style.css
    /Todo
      /components
        /AddTodo 
        /TodoList
        /TodoDetail
          /components
            /CommentList
              /components
                /AddComment
                /CommentItem
      /index.jsx
    /Navbar
      /index.jsx
      /style.css
  /app.jsx
  /index.jsx
  /tempalte.jsx
```

In this structure, each component will work independently and each of them will have it's own child components located in /components directory. In many cases, some components are just used in only one place and not reused in any where, so adding all of them in root component will make you confuse with hundred of orther components when your project becomes larger. Categorize them as a sub-component will get much easier to find and maintain them.

### Coding standars

### Paterns

### Components Comunication

Reference: https://github.com/alicoding/react-webpack-babel