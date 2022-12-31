const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    Name: { type: String, required: true, trim: true },
    PhoneNumber: { type: String, required: true, unique: true, trim: true },
    Age: { type: Number, required: true, trim: true },
    Pincode: { type: Number, required: true, trim: true },
    AadharNumber: { type: Number, required: true, unique: true, trim: true },
    password:{type:String,required:true, trim: true}
},
    { timestamps: true })

    module.exports= mongoose.Model("User",userSchema)
