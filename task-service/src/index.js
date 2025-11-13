const express = require("express");
const connectDb = require("./config/db.config");
const taskRoute = require("./routes/task.routes");
const { connectRabbitMQWithRetry } = require("./utils/rabitmq");
// const { connectRabbitMQWithRetry } = require("./utils/rabitmq");
const app = express();

const PORT = process.env.PORT || 3100;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", taskRoute);

app.get("/", (req, res) => {
    return res.status(200).json({ success: true, message: "Server is up and running" })
})

app.listen(PORT, () => {
    // connectDb();
    connectRabbitMQWithRetry();
    console.log("Server is listening on Port", PORT)

})