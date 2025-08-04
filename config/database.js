//mongoDB Connection
require("dotenv").config();

const mongodbUrl = "mongodb://localhost:27017";
const mongoose = require("mongoose");

const mongodbConnection = async () => {
try {
if (!mongodbUrl) {
console.error("DB_URL is not defined in environment variables.");
process.exit(1);
}
await mongoose.connect(mongodbUrl);
console.log("MongoDB Connected");
} catch (error) {
console.error("MongoDB Connection Error:", error?.message, error);
process.exit(1);
}
}
module.exports = mongodbConnection