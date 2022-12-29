const express = require("express");
const mongoose = require("mongoose");
const Student = require("./model/schema")
const app = express();
require("./db/conn")
const port = process.env.PORT || 3000;
app.use(express.json());

app.post("/",(req,res) => {
    console.log(req.body);
    const finalStudent = new Student(req.body)
    finalStudent.save().then(() => {
        res.status(201).send(finalStudent);
        // you can use also this syntax | res.status(201).send(finalStudent);
    }).catch((err) => {
        res.status(400).send(err);
    })
    res.send('this is the post page');
})


app.listen(port, () => console.log(`Server is running on port number ${port}`))