const amqp = require('amqplib');

let channel, connection;

async function connectRabbitMQWithRetry(retries = 10, delay = 5000) {

    while (retries) {
        try {
            connection = await amqp.connect("amqp://rabbitmq");
            // connection = await amqp.connect(process.env.RABBITMQ_URL);
            channel = await connection.createChannel();
            await channel.assertQueue("task_created", { durable: true })
            console.log("Connected to RabbitMQ successfully");
            return channel;
        } catch (error) {
            console.log("error", error.message);
            retries -= 1;
            console.error("Failed to connect to RabbitMQ, retries left:", retries);
            await new Promise(res => setTimeout(res, delay));

        }

    }

}

function getChannel() {
    return channel;
}

module.exports = {
    getChannel,
    connectRabbitMQWithRetry,
}