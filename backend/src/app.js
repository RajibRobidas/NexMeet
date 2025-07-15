import express from "express";
import {createServer} from "node:http";

import {Server} from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js" 

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }))

app.get("/", (req, res) => {
    return res.json({"hello": "World"})
});

app.use("/api/v1/users", userRoutes);

const start = async () => {
    app.set("mongo_user")
    const connectiondb = await mongoose.connect("mongodb+srv://rajibrobidas22222:acjRQkzFPaAzaq1Y@cluster0.fjodbtp.mongodb.net/")

    console.log(`MONGO Connected DB Host: ${connectiondb.connection.host}`);
    server.listen(app.get("port"), () => {
        console.log(`Listening on port ${app.get("port")}`)
    })
}
start();