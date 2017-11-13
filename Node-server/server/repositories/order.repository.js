var orderModel = require(__base+"/server/models/order.model");

module.exports = {
    createOrder : function(data){
        var order_model = new orderModel(data);
        return order_model.save();
    },

    getOrdersByUserId : function(userId){
        return orderModel.find({_userId:userId}).exec();
    }
}