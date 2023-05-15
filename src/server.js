import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan('dev');
app.use(logger);

// const globalRouter 

const gossipMiddleware = (req, res, next) => {
    console.log("hi I am middleware")
    next();
}

const handleHome = (req, res) => {
    return res.end();
}


app.get("/", gossipMiddleware, handleHome);



const handleListening =() => console.log(`Server listening on port ${PORT} 🚀🪐💫`);

app.listen(4000, handleListening);