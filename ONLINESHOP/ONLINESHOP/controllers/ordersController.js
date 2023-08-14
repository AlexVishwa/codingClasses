const {Order} = require ("../model/orderModel")

const getAllOrders=async (req,res) => {
    let orders = await Order.find({}).exec();
    res.render ("pages/allorder", {orders : orders})
};
const getOneOrder=async (req,res) => {
    let order = await Order.findById(req.params.id).exec();
    
    res.render ("pages/vieworder", {order : order})
};
const deleteOneOrder = async  (req,res) => {
    await Order.findByIdAndDelete(req.params.id).exec();
    res.redirect ("/orders")
};



const updateOneOrder =  async (req,res)=>{
	//console.log(req.params);
	try{
		console.log(req.body);
		let order = await Order.findById(req.params.id).exec();
        Order.updateOne({_id:req.params.id},{$set:
			{product1:req.body.product1}}).exec()
            res.render ("pages/vieworder", {order : order})
                //return res.status(200).send({"msg":"success"});

	}
	catch(err){
		console.error(err.message);
	}
};

module.exports = {
    getAllOrders,
    getOneOrder,
    deleteOneOrder,
    updateOneOrder
}