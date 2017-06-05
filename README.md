# Sapmle React todo list

This is a simple todo list with React + Webpack + Babel.

While there are hundreds of similar projects out there, this project may be helpful with someone who:

* Just begin with React
* Want to learn React best practices
* Want to learn coding standars and design pattern

### Project structure

/src
  /components 
    /Button 
    /Notifications
      /components
        /ButtonDismiss  
          /images
          /locales
          /specs 
          /index.js
          /styles.scss
      /index.js
      /styles.scss
  /data
    /users
      /actions.js
      /api.js
      /reducer.js
  /scenes
    /Home 
      /components 
        /ButtonLike
      /services
        /processData
      /index.js
      /styles.scss
    /Sign 
      /components 
        /FormField
      /scenes
        /Login
        /Register 
          /locales
          /specs
          /index.js
          /styles.scss
  /services
    /api
    /geolocation
    /session
      /actions.js
      /index.js
      /reducer.js
  index.js 
  store.js

### Coding standars

### Paterns

### Components Comunication

Reference: https://github.com/alicoding/react-webpack-babel