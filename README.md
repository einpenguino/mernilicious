# **Alabaster**

## **Introduction**
Hello, fellow skincare enthusiasts! This app is meant to be a onestop solution to discover your optimal skincare routine with product recommendations! Currently, there are similar services provided by skincare companies. However, recommendations are brand-locked to the service provider and it makes finding optimal cross-brand skincare products to incorporate in your routing more cumbersome. This project aims to curb some of those issues, by providing a platform where you can find your products based on your target skincare goals (in progress)

## **Startup**

### **Local Usage on a full-stack environment like your own computer or [cyclic.sh](cyclic.sh)**
1. Your own computer (localhost)

### **Local Usage but the Front End is hosted somewhere else**
```
- Create .env file in top level directory of folder with the following fields (You can change the Mongo URL to wherever your mongodb server resides)
```
MONGO_URL=mongodb://127.0.0.1:27017/mern
PROCESS_PORT=3000
JWT_SECRET=<YourSecretString>
```
- ## **Add .env to .gitignore**
- seed DB with info using  ```npm run seed```
- you can clear contents of db using ```npm run cleardb```
- to start: ```npm run dev```
```

## **Libraries Used (MERN)**
1. ### **Front End(FE):**
   1. [React](https://reactjs.org/)
   2. [Redux v6](https://react-redux.js.org/) (Used to store authentication *status*, authorisation level and user profile info)
   3. [React Router v6](https://reactrouter.com/en/main)
   4. [MUI](https://mui.com/material-ui/getting-started/overview/)
2. ### **Back End(BE):**
   1. [Express](https://expressjs.com/)
   2. [Mongoose](https://mongoosejs.com/)
3. ### **Database**
   1. [MongoDB](https://www.mongodb.com/)
4. ### **Authentication & Authorization:**
   1. [Json Web Token](https://jwt.io/)
   2. [BCrypt for hashing and verifying hashes](https://www.npmjs.com/package/bcrypt)

## **Authentication**
Back End compares login information sent by Front End (Username & Login) to the stored user credentials that are stored on MongoDB.
- If Username and Password sent from front end matches, Back end sends a **200** status code with a cookie that can be used to call server endpoints that require the person to be a **admin** user
  - For Logout, the server tells the browser to clear the cookie and resets user info within Redux
- If Username OR Password does not match, the user will be prompted to login again.

## **Authorization**
There are 2 user levels for this app:
- Non-Admin (Can browse and filter products)
- Admin (Non-Admin  + Can perform CRUD on products list. Requires cookie + admin privileages associated with the account)

#### **Features:**
- Login
- Signup

## **Routing**
Routing is handled by React Router v6, with these features:
- Private routes (Check authentication status and privileages stored in Redux on every navigate to a protected page)
- Error Handling (Shows error page for searches that are not defined e.g domain/kdsejqanhoipfuehqp9u will redirect the user to an error page)

## **Models used in FE:**
- User Credentials model
- Products model

## **CRUD Endpoints for FE:**
- **User Credentials:**
  - POST: /login
    - request body contains username and plaintext password
    - BE Server responds with relevant user data like admin privileages. FE stores user data in Redux
  - POST: /signout
    - BE server triggers res.clearCookie command, FE resets redux user-related states to default
  
- **Products Model:**
  - POST: /products (Used to GET info, but *js fetch* does not allow attaching request body in GET. We require the use of request body pararms, so we need to use POST instead.)
    - GET filtered product info from BE to display on products catalog
    - FE filter buttons amend request body params so the server only sends information necessary for populating the page, reducing load times should the database become larger.
  
- **Requires Authorisation:** (Valid Cookie to complete the request)
  - POST: /createproducts
    - Takes input from FE to create a new product in products model
  - PUT: /updateproducts
    - Updates a specific product in products model based on request body params
  - DELETE: /deleteproducts
    - Deletes specific product in products model

## Appendix
- More models are available in BE but are not incorporated in FE due to time constraints, you can use an app like [POSTMAN](https://www.postman.com/) or [INSOMNIA](https://insomnia.rest/) (Because it's REST geddit? :D)