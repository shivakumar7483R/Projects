Nosql databse CRUD operations using nodejs express framework

//install the followings
nodejs- sudo apt-get install nodejs
npm-sudo apt-get install npm
expressjs- npm i express --save
lodash - npm i lodash --save
mongoose - npm i mongoose --save
body-parser - npm i body-parser --save
nodemon - npm i nodemon --save

//to run 
command ->> nodemon


method -url 
1.get -http://localhost:3000/books ->get all books details
2. post - http://localhost:3000/books -> add book 
data format-{
	"title":"xyzz",
	"author": "sak",
	"price": 1000,
	"email":"xyz@gmail.com"
    }

3. get - http://localhost:3000/books/5c7666bdc6dfea0bcd5254 - get book with id
4. put - http://localhost:3000/books/5c7666bdc6dfea0bcd5254 - eddit book details with id .
data format {
"title":"data structuree",
"author":"abvcdf"
}
5. delete - http://localhost:3000/books/5c7666bdc6dfea0bcd5254 - delete book with id







