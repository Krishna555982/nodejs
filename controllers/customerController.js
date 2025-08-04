
const {
responseStatus,
statusCodes,
messages,
} = require("../constant/responseConstant")
const customersSchema = require("../models/CustomersSchema")

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


