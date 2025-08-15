const {
responseStatus,
statusCodes,
messages,
} = require("../constant/responseConstant")
const productSchema = require("../models/productSchema")

//ProductsSchema using postMethod for inserting the product Details
exports.addProductDetails = async(req,res) =>{
    try {
        // console.log(req.body)
        const {homeAppliencesname,price,Model,Avalibility} = req.body
        if(!homeAppliencesname && !price && !Model && !Avalibility) {
            return res.status(statusCodes.BAD_REQUEST).json({message: "Please Insert the Data"})
        }
        const addProductDetails = await productSchema.create(req.body)
        console.log(addProductDetails)
        if(addProductDetails) {
            return res.status(statusCodes.OK).json({message: "Product Details Added Successfully"})
        }
    } catch(error) {
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({mesage: error})
    }
}