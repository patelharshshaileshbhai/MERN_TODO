import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import userRouter from "./routes/userRoute.js"
import taskRouter from "./routes/taskRoute.js"
import forgotPasswordRouter from "./routes/forgotPassword.js"

//app config
dotenv.config()
const app = express()
const port = process.env.PORT || 8001
mongoose.set('strictQuery', true);

//middlewares
app.use(express.json())
app.use(cors())


const URL=process.env.MONGO_URI
console.log(URL)
//db config
const connectDB = async () => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true, // Add this option for better compatibility
        });
        console.log("DB Connected");
    } catch (error) {
        console.error("Error connecting to the database", error);
        // Additional logic to handle the error, e.g., retry connection or exit process
    }
};

connectDB();

//api endpoints
app.use("/api/user", userRouter)
app.use("/api/task", taskRouter)
app.use("/api/forgotPassword", forgotPasswordRouter)

//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`))