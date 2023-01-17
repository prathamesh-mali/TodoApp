import mongoose from 'mongoose';

const Connection = () => {

    mongoose.connect("mongodb://127.0.0.1:27017/TodoApp");

    mongoose.connection.on("connected", () => {
        console.log("Database Connected");
    })

    mongoose.connection.on("disconnected", () => {
        console.log("Database disconnected");
    })
    mongoose.connection.on("error", () => {
        console.log("Error while connecting to database", error.message);
    })
}

export default Connection;