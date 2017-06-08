# Sapmle React todo list

This is a simple todo list with React + Webpack + Babel and using HTML5 local storage as a database.

While there are hundreds of similar projects out there, this project may be helpful with someone who:

* Just begin with React
* Want to learn React best practices
* Want to learn coding standars and design pattern

### Run this project

* Please refer to this: https://github.com/alicoding/react-webpack-babel

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

In this structure, components will work independently and each of them will have it's own child components located in **/components** directory. In many cases, some components are just used in only one place and not reused in any where, so adding all of them in root component will make you confuse with hundred of orther components when your project becomes larger. Categorize them as a sub-component will get much easier to find and maintain them.

Every component follow this structure must:
* Has it's own stylesheet, place in **styles.css**
* Has it's own helpers, services, place in **/helpers** and **/services** directory
* Has 2 sub components: Container and View. The main functions of them will be described in Patterns section. 

### Coding standars

* [Aribnb coding standard](https://github.com/airbnb/javascript/tree/master/react) is good resource to follow. 

### Paterns

This project follows the **Container - Presentation** design pattern which components will be devided into 2 categories: 

* Container: works as a Controller in MVC model. It contains application logic that provide the data and behavior function to presentation or other container components.

* Presentation: works as a View in MVC model. It contains application user interface that receive data from controller and display to user. It also accept user's action such as: click, submit form, etc and call coresponding handler function.

Refer to this [blog post](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) for more detail about this pattern.

### Components Comunication

There are many ways to make components talk with each other. The most common way is using Flux or Redux as a state manager. However, Flux or Redux are quite complicated and take time to begin with. So, many [no flux tricks](http://andrewhfarmer.com/component-communication/) are available and you can follow up with one of them.

In this project, I use [facebook emmiter](https://github.com/facebook/emitter) for a simple event emitter - listener. Of course, this approach is not a good one when your application grows up since you must handle event emitter and event listener for every component. However, it's simple enough for you to start with and you can replace it by any aproaches available.  
