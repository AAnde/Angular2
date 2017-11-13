var productRepository = require(__base + '/server/repositories/product.repository');
var utility = require(__base+"/server/utils/utility");
var messages = require(__base+"/server/config/messages");

module.exports = {
    getProducts : function(req,res){
        productRepository.getProducts().then(function(successResponse){
            if(successResponse == null || successResponse.length == 0){
                utility.buildResponse(messages.CODE_STATUS_OK,true,messages.MSG_NO_DATA_FOUND,successResponse,res);
            }
            else{
                utility.buildResponse(messages.CODE_STATUS_OK,true,messages.MSG_DATA_FOUND,successResponse,res);
            }
        }).catch(function(error){
            utility.buildResponse(messages.CODE_BAD_REQUEST,false,error.message,null,res);
        })
    },
    saveProduct : function(req,res){
        productRepository.createProduct(req.body).then(function(successResponse){
            if(successResponse == null || successResponse == ""){
                utility.buildResponse(messages.CODE_STATUS_OK,false,messages.MSG_OPERATION_FAILED,successResponse.res);
            }
            else{
                utility.buildResponse(messages.CODE_STATUS_OK,true,messages.MSG_STATUS_SAVED,successResponse,res);
            }
        }).catch(function(error){
            utility.buildResponse(messages.CODE_BAD_REQUEST,false,error.message,null,res);
        })
    }
}