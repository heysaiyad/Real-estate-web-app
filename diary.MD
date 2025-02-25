## Real Estate Web App
1. Create a directory that is a REAL ESTATE WEB APP.
2. Create a directory that is an API. (back end)
3. routes: auth, post, user
4. controllers -> auth controller -> make register api
5. Install Prisma
6. Create a database using MongoDB.
7. Create a user model (schema file).
    After making any changes to prisma.schema, run "npx prisma db push."
8. Create a new user and save it to the database.
    install prismaClient
Make a directory lib->prisma.js, then export prisma and use it in the auth controller file to create a new user.

When I hit the register API, I got some errors.
PrismaClientValidationError:
Invalid `prisma.user.create()` invocation:

then I install 'npx prisma generate' in the run
9. npx prisma db push: any changes in db

10. Make login API
install cookie-parser
also use a JWT token.
11. Make a logout API
## Client Side
1. Register routes.
2. login routes
3. In the library directory, create apirequest.js for the base URL.
4. Registration and login are completed (bugs fixed).
5. Logout features completed
6. Authentiaction: should-be-logged-in, should-be-admin
7. Make a middleware -> verifyToken
8. login nhi hai fir v hm profile page access kar pa rhe hai to react contextapi se ye handle kar skte hai, we can store our user information anywhere, when our needed, just call caontext hook and we can reach that data and also we will create function that we update our user for example username, avatar, immediatlly.

9. When I logged out and went back, it showed an error message. So now I fixed this issue using the context API and navigated to the login page.
10. Update profile: For an updated profile, I make a file whose file name is profileupdatepage, and then I use the context API to update the username, password, and avatar.
11. api-> make a route for user -> user update, delete, get user, get users 
12. client -> make ui for above routes
13. update avatar
14. update User model and create post, type, property  model
15. push->using this cmd-> npx prisma db push 
16. create post router -> get posts, get post, create post, delete post.
17. create post controller ->  get posts, get post, create post, delete post.
18. format getPost response to include postData and postDetail separately and add schema for postDetail in Prisma
19. Implemented a new component `newPostPage` for creating posts, integrated React Quill for rich text editing in the post description, added image upload functionality.













