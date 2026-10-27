import express from "express";
 import User from "./user.js"

const app = express();

app.get("/", (req, res) => {
    res.send("server is ready");
})

app.get("/api/user",(req, res) => {
    res.json(User);
})


const port  = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server ar http://localhost:${port}`)
})