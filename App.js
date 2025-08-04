const mongodbConnection = require("./config/database")
mongodbConnection()
const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
const customerRoutes = require("./Routes/route")
app.use("/api/customer",customerRoutes)


app.listen(PORT, () => {
console.log('Server running on http://localhost:',PORT);
});

