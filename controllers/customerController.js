
const {
responseStatus,
statusCodes,
messages,
} = require("../constant/responseConstant")
const customersSchema = require("../models/CustomersSchema")

//CustomerSignup function

exports.customerSignUp = async(req,res)=>{
    try { 
        console.log("testing", req.body)
        const {name,email,phoneNumber,password} = req.body;
        if(!name && !email && !phoneNumber && !password) {
            return "Fill the all details"
        } else { 
            const CustomerResult = await customersSchema.create(req.body) 
        console.log(CustomerResult)
        return "API created successfully"    
        }
        
} catch (error) {
return "internal server error"
}}

//Customer Details update

exports.customerUpdate = async(req,res) =>{
    try {
        // const update= await customersSchema.findOneAndUpdate({email: req.body.email},{$set:{name:'rahul'}},{new: true})
        const update= await customersSchema.findOneAndUpdate({email: req.body.email},{$set:{name:req.body.name,mobileNumber:req.body.mobileNumber}},{new: true})
        console.log("updated",update)
        return update
        
    } catch {
        console.log("Failed to Update")
    }
}

// Getting the customer Details

exports.gEtDetails = async(req,res) => {
    try{
        const getCustomerDeatils = await customersSchema.find({email: req.body.email})
        console.log("Get Customer Details",getCustomerDeatils)
        if (getCustomerDeatils)
        {
            return getCustomerDeatils
        }
        else {
            return "There is no data with the provided details"
        }
    }catch (error) {
return "internal server error"
}}

// Deleting the Details of the customer

exports.deleteDetails = async(req,res) =>{
    try {
        if(req.body.email){
        const CustomerDeletedDetails = await customersSchema.deleteOne({email: req.body.email})
        console.log("The data is deleted",CustomerDeletedDetails)
        if(CustomerDeletedDetails.deletedCount== 1){
            return res.status(200).json({message:" The Details got Deleted  "})
        }
        else{
            return res.status(404).json({message: "No Data Found"})
        }
        }else {
            return res.status(404).json({message: "Email shuld be Entered" })
        }
    } catch (error) {
        return res.status(500).json({message: error})
    }
}
// Making the isActive field from false to true

exports.signinUpdate = async (req,res) => {
    try {
        if (!req.body.email) {
        return res.status(400).json({message: "Email is required"})
        }
        const customerUpdate = await customersSchema.findOneAndUpdate({email: req.body.email},{$set: {isActive:true}}, {new: true})
        console.log(customerUpdate)
        if (customerUpdate) {
            return res.status(200).json({message: "Customer data Updated"})
        } else {
            return res.status(404).json({message: "Data Not Found"})
        }
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

// Making the Is Active field from true to false

exports.logoutUpdate = async (req,res) => {
    try {
        console.log("Updated",req.body.email)
        if (!req.body.email) {
            return res.status(400).json({message: "Email is required"})
        }
        console.log("updated2")
        // const logoutUpdate = await CustomersSchema.findOneAndUpdate({email: req.body.email},{$set: {isOnline:false}}, {new: true})
        const customerUpdate = await customersSchema.findOneAndUpdate({email: req.body.email},{$set: {isActive:false}}, {new: true})
        console.log(customerUpdate)
        if (customerUpdate) {
            console.log("Updated3")
            return res.status(200).json({message: "Customer Logout Successfully"})
        } else {
            return res.status(404).json({message: "Data Not Found"})
        }
    } catch (error) {
        return res.status(500).json({message: "error"})
    }
}