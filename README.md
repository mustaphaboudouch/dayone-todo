# DayOne Todos Application

## Project structure

<pre>
dayone-todo
├── client : _Frontend folder_
│ ├── App.js : _Entry component_
│ ├── ./graphql
│ │ ├── Queries.js : _Contains all GraphQL queries_
│ │ └── Mutations.js : _Contains all GraphQL mutations_
│ ├── ./components
│ │ ├── ./Error : _Contains all GraphQL queries_
│ │ ├── ./Loading : _Contains all GraphQL queries_
│ │ ├── ./Todo : _Contains all GraphQL queries_
│ │ └── ./Filters : _Contains all GraphQL mutations_
│ ├── ./pages
│ └── ./pages
└── server : _Backend folder_
└── ...
</pre>

## Running the project

1. Clone the repository : `git clone https://github.com/mustaphaboudouch/dayone-todo.git`

2. Install backend dependencies : `cd ./server && npm install`

3. Install frontend dependencies : `cd ./client && npm install`

4. Run local PostgreSQL database on port `5432` : ``

5. Migrate the database : `cd ./server && npm run migrate`

6. Seed the database with fake data : `cd ./server && npm run seed`

7. Run backend server : `cd ./server && npm start`

8. Run frontend server : `cd ./client && npm start`

9. Preview the app : [http://localhost:3000/](http://localhost:3000/)

## Encountered problems

1. Docker gives me an update error, so I decide to do the project without Docker so as not to waste time.

2. The main server gives me an error that it cannot import from a module, I add `"type": "module"` to `package.json` file but the problem is not resolved. So I decided to change the import / export syntax from ES6 to ES5.
