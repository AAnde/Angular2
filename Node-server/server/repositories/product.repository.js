var productModel = require(__base+"/server/models/product.model");

module.exports = {
    
    createProduct : function(data){
        var product_model = new productModel(data);
        return product_model.save();
    },

    getProducts : function(){
        return productModel.find({}).exec();
    },

    getProductById : function(id){
        return productModel.findOne({_id:id}).exec();
    }

}