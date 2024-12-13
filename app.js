import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import{perros} from "./backend/controller/controllers.js"

dotenv.config();

mongoose.connect(process.env.urlbd)


.then(() => {
    console.log("si jala")
})
.catch((error) => {
    console.log("no jala", error)
});

const app = express();

app.use(cors()); 


app.listen(4001, () => {
    console.log("Sí se escucha");
});

test();
