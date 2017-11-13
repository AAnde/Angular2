var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name : {type:String,required:true},
    price : {type:Number,required:true},
    description : {type:String,default:""},
    image : {type:String,default:""}
})

var productModel = mongoose.model("product",productSchema);

module.exports = productModel;