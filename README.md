# Mernilicious
## Startup
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