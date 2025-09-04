const AddProduct = (req,res)=>{
    try {
     return res.status(200).send({
        success: true,
        message: 'This is a message'
     })
    } catch (error) {
        console.log("Server Have Error: ", error);
        return res.status(500).send({
            success: false,
            message: 'Add Product have an Error',
        })
    }
}

module.exports = AddProduct;