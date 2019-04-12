## Day 1 
## Step 1
Project setup
- Install dependencies - done
   yarn, 
   express,
   knex, 
   helmey,
   yarn add nodemon --dev,
   yarn add knex sqlite3
- Run knex init to generate a config file - done
- Create index.js and host a local server and use knex here - done

## Step 2
- Create migration scripts 
- npx knex migrate:make users_table - done
- create constraints and rollback function for users_table script - done
- run knex migrate:latest to run the migration scripts - done

## Step 3
Build the API with the following endpoints:
- Create helper functions before endpoints(users-model.js) - done
- yarn add bcrypt - done
- yarn add jasonwebtoken - done
- create a middleware that creates a jsonwebtoken - done
- POST for registering a user. - done
- POST to authenticate a user login - done
- GET for If the user is logged in, respond with an array of all the users contained in the database. If the user is not logged in respond with the correct status code and the message: 'You shall not pass!'. Use this endpoint to verify that the password is hashed before it is saved. - done


## Day 2
## implement a React client:
- use create-react-app client to generate a application to server as the client for the Web API. - done
- cd into client folder and run yarn add axios and yarn add react-router-dom - done
- inside the React application add client-side routes and components for signup, signin and showing the list of users stored in the database. - done
- the /signin route should provide a form to gather username and password for the user and make a POST request to the /api/login route on the API. Upon successful login, persist the returned token to the browser's local storage and redirect the user to the /users route. - done
- the /users route should read the token from local storage and make a GET request to the /api/users route on the API attaching the token as the value of the Authorization header. - done
- provide a button to sign out that will remove the token from local storage. - done
- the /signup route should provide a form to gather username, password and department for the user and make a POST request to the /api/register route on the API. If the user is created successfully, take the returned token, save it to the browser's local storage and redirect the user to the /users route, where they should see the list of users. - done
