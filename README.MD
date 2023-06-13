# E-Commerce API
A CRUD api with authentication written with Nodejs, Expressjs, and Mongodb.

**A live server with documentation of the API for this project can be found [here](https://e-commerce-api-iamjesse.onrender.com/)**

### Technologies
* HTML/CSS/JS
* NodeJS
* ExpressJS
* MongoDB
* Render

### Tools
* Visual Studio
* Git and GitHub
* Windows 11
* NPM
* Postman


## Functionality

### Registration 
* Validation for name, email, and password
* Password hashing with bcryptjs
* Save user in mongoDB
* Generate a Json Web Token(JWT)

### Login
* Validation for email and password
* Find User in mongoDB
* Authentication with comparePasswords
* Generate JWT with correct login
* Attach a JWT to cookies

### A Create, Read, Update, Delete(CRUD) API for multiple routes:
* CRUD for Users, Products, Orders and Reviews
* Most routes require authentication
* CRUD process intregrates with mongoDB

### Database models for Users, Products, Orders, and Reviews

### Aggegregate Functions for Product/Review
* Average ratings for products are calculcated dynamically through database aggreggate functions

### Error Handling
* Custom error handlers for validation, duplicates, and casting
* BadRequestERROR
* UnauthenticatedError

### Security Packages
* helmet
* cors
* xss-clean
* express-rate-limit

### Documentation created with DocGen


## What I learned

* Backend fundamenetals
* Working with a NoSQL database, connecting it to an application
* Setting up a RESTful API structure
* Working with authentication and JWT
* Improved understanding of CRUD API and the REST API best practices
* Improved understanding code structure and readability


### Academic
This application was created as part of the John Smilga [NodeJS](https://johnsmilga.com/) curriculum

