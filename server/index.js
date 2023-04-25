const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const UserModel = require("./model/user");
const serviceRouter = require("./routes/routes")
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api",serviceRouter);

mongoose.connect(
    "mongodb://127.0.0.1:27017/MERNDB", {
    usenewUrlParser: "true",
    useUnifiedTopology: "true"
    })
    .then(() => {
        console.log("Database Connection Successful");
    })
    .catch((err) => {
        console.log("Error Connecting to DB " + err.message);
    });

// app.get("/getUsers", (req, res) => {
//     UserModel.find({})
//         .then((result) => {
//             res.json(result);
//         })
//         .catch((err) => {
//             res.json(err);
//         });
// });

// app.post("/createUser", async (req,res) => {
//     const user = req.body;
//     const newUser = new UserModel(user);
//     await newUser.save();
//     res.json(user);
// });

app.listen(3001, () => {
    console.log("Server is running");
});
