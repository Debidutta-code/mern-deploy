const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 8080;



// middleware

// to make it more secure to not access from any port except than 3000
const corsOption = {
    origin : "https://mern-deploy-backend-jhxc.onrender.com"
}

app.use(express.json());
app.use(cors(corsOption));

// connect mongodb

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("db connected..");
}




// requests

app.get('/', (req, res) => {
    res.json({message : "Hello world Dev"});
})





// backend connection with listen

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})