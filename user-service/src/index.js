const express = require("express");
const connectDb = require("./config/db.config");
const userRoutes = require("./routes/user.routes");
const app = express();

const PORT = process.env.PORT || 3100;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", userRoutes);

app.get("/", (req, res) => {
    return res.status(200).json({ success: true, message: "Server is up and running" })
})

app.listen(PORT, () => {
    connectDb();
    console.log("Server is listening on Port", PORT)

})