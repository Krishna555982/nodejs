const {
responseStatus,
statusCodes,
messages,
} = require("../constant/responseConstant")
const productSchema = require("../models/productSchema")

//Add Products Details to DataBase

exports.addProductDetails = async(req,res) =>{
    try {
        const { homeAppliencesname , price , Model , Avalibility } = req.body;
        if(!homeAppliencesname || !price || !Model || !Avalibility) {
            return res.status(400).json({message: "Please Insert the Data"});
        }
        const addProductDetails = await productSchema.create(req.body)
        console.log(addProductDetails)
            return res.status(200).json({message: "Product Details Added Successfully"});
    } catch(error) {
        return res.status(500).json({message: error})
    }
}
// Update Product Details in the Database
exports.updateProducts = async(req,res) => {
    try {
        const update = await productSchema.findOneAndUpdate({homeAppliencesname: req.body.homeAppliencesname}, {$set: {price: req.body.price, Model: req.body.Model, Avalibility: req.body.Avalibility}}, {new: true})
        console.log("Updated",update)
        return res.status(statusCodes.OK).json({message: "Product Details Updated Successfully"})
    } catch(error) {
        return res.status(500).json({message: error})
    }
}

//Get Customer Details From the DataBase

exports.getProductDetails = async(req,res) => {
    try {
        const getProductDetails = await productSchema.find({homeAppliencesname: req.body.homeAppliencesname})
        console.log("Get Product Details",getProductDetails)
        if(getProductDetails) {
            return res.status(statusCodes.OK).json({message: getProductDetails})
        } else {
            return res.status(statusCodes.BAD_REQUEST).json({message: "There is No Data With the provided Details"})
        }
    } catch (error) {
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({message: "Internal Server Error"})
    }
}

// Deleting Product Details From DataBase

exports.deleteProductDetails = async(req,res) => {
    try {
        if(req.body.homeAppliencesname) {
            const deleteProductDetails = await productSchema.deleteOne({homeAppliencesname: req.body.homeAppliencesname})
            console.log("The Data Is Deleted",deleteProductDetails)
            if(deleteProductDetails.deletedCount == 1) {
                return res.status(statusCodes.OK).json({message:"The Details Got Deleted"})
            } else {
                return res.status(statusCodes.NOT_FOUND).json({message: "No Data Found"})
            }
        } else {
            return res.status(statusCodes.NOT_FOUND).json({message: "Home Applience Name is Not Found"})
        }
    }catch(error) {
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({message: "Internal Server Error"})
    }
}