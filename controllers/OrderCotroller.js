const {
    responseConstant,
    statusCodes,
    messages,
} = require("../constant/responseConstant")
const OrderSchema = require("../models/OrderSchema")

//Add Order Details Here

exports.addOrderDetails = async(req,res) => {
    try {
        //console.log(req.body)
        const { ItemName, ItemPrice, ItemModel, OrderStatus } = req.body;
        if(!ItemName || !ItemPrice || !ItemModel || !OrderStatus) {
            return res.status(statusCodes.BAD_REQUEST).json({message: "Fill All The Details"})
        } else {
            const addDetails = await OrderSchema.create(req.body)
            console.log (addDetails)
            return res.status(statusCodes.OK).json({message: "API Created Successfully"})
        }
    } catch(error) {
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({message: "Internal Server Error"})    }
}