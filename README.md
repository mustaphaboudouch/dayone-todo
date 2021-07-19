# DayOne Todos Application

## Project structure

<pre>
dayone-todo
├── client
│   ├── App.js : Entry component
│   ├── ./graphql
│   │   ├── Queries.js : Contains all GraphQL queries
│   │   └── Mutations.js : Contains all GraphQL mutations
│   ├── ./components
│   │   ├── ./Error : Component displayed in case of error in fetching data
│   │   ├── ./Loading : Component displayed during data fetching
│   │   ├── ./Todo : Component that represents a task (used in ./pages/TodoList)
│   │   └── ./Filters : Component contains form inputs to filter todos list (Select, Checkbox...)
│   └── ./pages
│       ├── ./TodoList : Page contains todos list with filters
│       └── ./TodoDetails : Page contains the details of a todo
└── server
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
