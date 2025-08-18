const {
    responseConstant,
    statusCodes,
    messages,
} = require("../constant/responseConstant")
const OrderSchema = require("../models/OrderSchema")

//Add Order Details Here

exports.addOrderDetails = async(req,res) => {
    try {
        console.log(req.body)
        const {ItemName,ItemPrice,ItemModel,OrderSchema} = req.body;
        if(ItemName && ItemPrice && ItemModel && OrderStatus) {
            const OrderResult = await OrderSchema.create(req.body)
            console.log(OrderResult)
            return res.status(statusCodes.OK).json({message: "Order Placed Successfully"})
        } else {
            return res.status(statusCodes.BAD_REQUEST).json({message: "Fill All The Details"})
        }
    }catch(error) {
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({message: "Internal Server Error"})    }
}