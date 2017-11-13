var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema =  new Schema({
    _userId : {type:Schema.ObjectId,required:true},
    items : [{
        _id : {type:Schema.ObjectId},
        name : {type:String},
        price : {type:Number},
        description : {type:String},
        image : {type:String}
    }],
    totalCost : {type:Number,required:true}
})

var orderModel = mongoose.model("orders",orderSchema);

module.exports = orderModel;


