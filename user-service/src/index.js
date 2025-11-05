const express = require("express");
const app = express();

const PORT = 8900

app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).json({ success: true, message: "Server is up and running" })
})

app.listen(PORT, () => {
    console.log("Server is listening on Port", PORT)
})