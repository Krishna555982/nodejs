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
const productsRoutes = require("./Routes/Productroutes")
const OrderRoutes = require("./Routes/OrderRoutes")
app.use("/api/customer",customerRoutes)
app.use("/api/products",productsRoutes)
app.use("/api/Orders",OrderRoutes)

app.listen(PORT, () => {
console.log('Server running on http://localhost:',PORT);
});

