const {
    responseConstant,
    statusCodes,
    messages,
} = require("../constant/responseConstant")
const OrderSchema = require("../models/OrderSchema");

//Add Order Details Here
exports.addOrderDetails = async(req,res) =>{
    try {
        const { ItemName , ItemPrice , ItemModel , OrderStatus } = req.body;
        if(!ItemName || !ItemPrice || !ItemModel || !OrderStatus) {
            return res.status(statusCodes.BAD_REQUEST).json({message: "Please Insert the Data"});
        }
        const addOrderDetails = await OrderSchema.create(req.body)
        console.log(addOrderDetails)
            return res.status(statusCodes.OK).json({message: "Order Details Added Successfully"});
    } catch(error) {
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({message: error})
    }
}

// Update Order Details in the Database
exports.updateOrderDetails = async(req,res) => {
    try {
        const update = await OrderSchema.findOneAndUpdate({ItemName: req.body.ItemName}, {$set: {OrderStatus: req.body.OrderStatus}}, {new: true})
        console.log(update)
        return res.status(statusCodes.OK).json({message: "Order Details Updated Successfully"})
    } catch(error) {
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({message: error})
    }
}

//Get Order Details From the DataBase

exports.getOrderDetails = async(req,res) => {
    try {
        const getOrderDetails = await OrderSchema.find({ItemName: req.body.ItemName})
        console.log(getOrderDetails)
        if(getOrderDetails){
            return res.status(statusCodes.OK).json({message: getOrderDetails})
        }
        else {
            return res,status(statusCodes.BAD_REQUEST).json({message: "There is No Data With the provided Details"})
        }
    }
    catch (error) {
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({message: "Internal Server Error"})
    }
}

// Deleting Order Details From DataBase

exports.deleteOrderDetails = async(req,res) => {
    try {
        if(req.body.ItemName) {
            const deleteOrderDetails = await OrderSchema.deleteOne({ItemName : req.body.ItemName})
            console.log("The Data Is Deleted",deleteOrderDetails)
            if(deleteOrderDetails.deletedCount == 1) {
                return res.status(statusCodes.OK).json({message:"The Details Got Deleted"})
        }
            else {
                return res.status(statusCodes.NOT_FOUND).json({message: "No Data Found"})
            }
    } else {
        return res.status(statusCodes.NOT_FOUND).json({message: "Item Name is Not Found"})
    }
} catch (error) {
    return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({message: "Internal Server Error"})
}
}