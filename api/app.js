import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js"
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
dotenv.config();

const app = express();
// app.use(cors({origin:process.env.CLINET_URL, credentials:true}))
// app.use(cors({origin:'*', credentials:true}))
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoute);
app.use("/api/auth/", authRoute);
app.use("/api/test/", testRoute);
app.use("/api/posts/", postRoute);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

app.listen(8800,()=>{
    console.log("Server is running!");
} )