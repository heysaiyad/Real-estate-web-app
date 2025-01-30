import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js"
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";

import path from 'path';
import { fileURLToPath } from 'url';

// Resolve the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
dotenv.config();

const app = express();
// app.use(cors({origin:process.env.CLINET_URL, credentials:true}))
// app.use(cors({origin:'*', credentials:true}))
// app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
console.log("CLIENT_URL:", process.env.CLIENT_URL);

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoute);
app.use("/api/auth/", authRoute);
app.use("/api/test/", testRoute);
app.use("/api/posts/", postRoute);

// Use the client's build folder to serve the static files
app.use(express.static(path.join(__dirname, '/client/dist')));

// Render client
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/dist/index.html'));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

app.listen(8800,()=>{
    console.log("Server is running! on port 8800");
} )