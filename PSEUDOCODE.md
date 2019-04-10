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