##EAT DA BURGER ##
Eat Da Burger is a burger logger.  
* It is a restaurant app that lets users input the names of burgers they'd like to eat.
* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured
* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.
* This app will store every burger in a database, whether devoured or not.
** On the back end it uses
* node.express: a declaritive routing system. 
* node.body-parser: bodyParser object uses various factories to create middlewares that reads a form's input + stores it as javascript object accessible through req.body
* node.path: module provides utlitlies for working w/file + directory paths
* node express-handlebars: uses sane defaults that leverage the "Express-way" of structuring an app's views. This makes it trivial to use in basic apps.
* method-override: Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
* The file structure was designed in ORM format.  Please see at the very buttum, if interested.

How to use:
1. visit: https://thawing-refuge-56336.herokuapp.com/

Here is a screenshot:
![screen shot 2018-08-18 at 10 09 46 pm](https://user-images.githubusercontent.com/36605965/44304817-fd69db00-a334-11e8-98a7-d950af2741a4.png)

This Project in maintained by peter6468 and users can contact him to get help.

### ORM FORMAT ###
```
.
├── config: stores connection files
│   ├── connection.js
│   └── orm.js
│ 
├── controllers: hold all the routes being used
│   └── burgers_controller.js
│
├── db: has db files for mysql
│   ├── schema.sql
│   └── seeds.sql
│
├── models: is what is using ORM within our configurations in order to collect data from database and send it to our controllers folder
│   └── burger.js
│ 
├── node_modules: javascript libraries for node
│ 
├── package.json: what you need to know about what's required. It must be actual JSON, not just a JavaScript object literal.
│
├── public: contains all the public assets
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js: in charge of creating express connection and running our node server
│
└── views: express handlebars folders
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```
