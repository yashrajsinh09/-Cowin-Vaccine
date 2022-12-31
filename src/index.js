const express = require("express");
//const route = require("./routes/route");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

mongoose.connect("",
{UseNewUrlParser:true})
.then(() => console.log("MongoDb is connected"))
.catch(err => console.log(err));

app.use('/',routes);

app.listen(3000, () => console.log("Express app running on port 3000"));