to run server with local db data -  npm run json:server
to run server with remote db data - npm run json:server:remote
GET ALL USERS
http://localhost:3000/users

GET SINGLE USER
http://localhost:3000/users/1

GET ALL COMPANIES
http://localhost:3000/companies

GET SINGLE COMPANY
http://localhost:3000/companies/1

GET ALL USERS OF A COMPANY
http://localhost:3000/companies/1/users

FILTER COMPANIES BY NAME   - filterig by field
http://localhost:3000/companies?name=Microsoft
http://localhost:3000/companies?name=Microsoft&name=Apple

PAGINATION & LIMIT
http://localhost:3000/companies?_page=1&_limit=2

SORTING   ascending(asc)   descending(desc)
http://localhost:3000/companies?_sort=name&_order=asc

USERS AGE RANGE   greater than or equal to(gte), less than or equal to(lte)
http://localhost:3000/users?age_gte=30
http://localhost:3000/users?age_gte=30&age_lte=40

FULL TEXT SEARCH   find anything with paul
http://localhost:3000/users?q=Paul


use postman or a form to make post requests to http://localhost:3000/users  
   Header -  content-type: application/json
   body(raw) - {
			"firstname": "Ian"
			"lastname": "Cenry",
			"email":"test@gmail.com",
			"age": "21",
			"companiId":  "3"
		}  -- when send is hit a user id is automatically generated

make delete request to http://localhost:3000/users  for user with id 4
   enter http://localhost:3000/users/4 then press send

make update/patch request
   enter http://localhost:3000/users/3 then press send
   Header -  content-type: application/json
   body(raw) - {
			"lastname": "Johnson",
		} 




When will you need a fake rest API:
When building e.g. react app where you need to connect to something on the backend(you need some kind of server with some data),
you may not want to at the time to create a backend (setting up a server with express and routes) and connecting to a DB,
the fake rest API will mimic that entire functionality/backend so that you can strictly focus on react or the frontend.


There is a remote verion @  - jsonplaceholder.typicode.com
a local one is better since the data edited will persist to a json file
installation
1. check the github page /typicode/json-server#install
2. npm i --save json-server   -- add -g flag to install globally
3. Start server  - json-server --watch db.json - run in terminal
4. Create db.json which is the data file
