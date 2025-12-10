const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/your-database-name ");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

module.exports = { connect };