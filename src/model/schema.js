const mongoose = require("mongoose");
const { stringify } = require("querystring");
const validator = require("validator");

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Eamil ID already present"],
        validate(value){
            if (validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
        unique: [true, "Already Add Phone Number"]
    },
    city: {
        type: String,
        required: true
    }
});

// We will create the new collection
const Student = new mongoose.model("Student", Schema)
module.exports = Student;