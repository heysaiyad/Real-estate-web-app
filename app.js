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

const allowedOrigins = [
  'http://localhost:5173',
  'https://real-estate-web-app-1cus.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

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

app.listen(8800, () => {
    console.log("Server is running! on port 8800");
});