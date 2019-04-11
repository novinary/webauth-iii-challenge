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