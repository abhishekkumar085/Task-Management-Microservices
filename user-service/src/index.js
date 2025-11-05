const express = require("express");
const connectDb = require("./config/db.config");
const app = express();

const PORT = process.env.PORT || 8900;

app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).json({ success: true, message: "Server is up and running" })
})

app.listen(PORT, () => {
    connectDb();
    console.log("Server is listening on Port", PORT)

})