## Real Estate web app
1. create a directory that is REAL ESTATE WEB APP
2. crate a directory that is api(back end)
3. routes-> auth, post, user
4. controllers -> auth controller ->make register api
5. install prisma
6. create database using mongodb
7. create user model (schema file)
    - After making any change on prisma.schema, run "npx prisma db push"
8. create new user and save to db
    - install prismaClient
    - make a directory lib->prisma.js then export prisma and use in auth controller file for creare new user

When i hit the register api then some error 
PrismaClientValidationError:
Invalid `prisma.user.create()` invocation:

then i install 'npx prisma generate' the run
9. npx prisma db push -> any changes in db

10. make login api 
install cookie-parser
also use jwt token
11. make logout api






 