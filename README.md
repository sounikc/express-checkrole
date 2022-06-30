### rupee-yen
>It is an [Express](https://github.com/expressjs/express) dependant middleware i.e you must have express installed in your project

>Someone can use this middleware if you want to restrict a user to access specific resources(route) on the network

# Installation
npm i express 

npm install express-checkrole

# How to Use
**app.js**
```
var checkrole = require('express-checkrole');
```
```
app.use(checkrole(['<ROLE_NAME>'],<FLAG>,'<ROUTE_NAME>')); 
```

// MANDATORY: suppose ROLE_NAME is ['admin','writer']. It means only if HTTP endpoint has querystring **role** as '?/role=admin' OR '?/role=writer' then only the user can access the particular resource.

// OPTIONAL: FLAG is type of Boolean, by default it FALSE. Functioality of this flag is like if flag is true then it will be redirected the user to root route i.e '/'

// OPTIONAL: pass a specific ROUTE name to redirect the user to a specific route e.g. '/foo' 


All the best! Happy Coding! :+1: :beers: