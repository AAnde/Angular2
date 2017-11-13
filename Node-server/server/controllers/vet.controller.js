var utility = require(__base + "/server/utils/utility");
var vetRepository = require(__base + "/server/repositories/vet.repository");
var messages = require(__base + "/server/config/messages");

module.exports = {

    saveVet: function (req, res) {
        var vetData = req.body;
        vetRepository.addVet(vetData).then(function (successResponse) {
            utility.buildResponse(messages.CODE_STATUS_OK, true, messages.MSG_STATUS_SAVED, {}, res);
        }).catch(function(error){
            utility.buildResponse(messages.CODE_BAD_REQUEST, false, error.message, {}, res);
        })
    },

    getAllVets : function(req,res) {
        vetRepository.getVets().then(function(successResponse){
            if(successResponse == null || successResponse.length == 0){
                utility.buildResponse(messages.CODE_STATUS_OK, true, messages.MSG_NO_DATA_FOUND, successResponse, res);
            }
            else{
                utility.buildResponse(messages.CODE_STATUS_OK, true, messages.MSG_DATA_FOUND, successResponse, res);
            }
        }).catch(function(error){
            utility.buildResponse(messages.CODE_BAD_REQUEST, false, error.message, {}, res);
        })
    },

    getById : function(req,res) {
        vetRepository.getVet(req.params.id).then(function(successResponse){
            if(successResponse == null || successResponse == ""){
                utility.buildResponse(messages.CODE_STATUS_OK, false, messages.MSG_NO_DATA_FOUND, successResponse, res);
            }
            else{
                utility.buildResponse(messages.CODE_STATUS_OK, true, messages.MSG_DATA_FOUND, successResponse, res);
            }
        }).catch(function(error){
            utility.buildResponse(messages.CODE_BAD_REQUEST, false, error.message, {}, res);
        })
    },

    deleteVet : function(req,res) {
        vetRepository.deleteVet(req.params.id).then(function(successResponse){
            if(successResponse == null || successResponse == ""){
                utility.buildResponse(messages.CODE_STATUS_OK, false, messages.MSG_NO_DATA_FOUND, successResponse, res);
            }
            else{
                utility.buildResponse(messages.CODE_STATUS_OK, true, messages.MSG_DELETED, successResponse, res);
            }
        }).catch(function(error){
            utility.buildResponse(messages.CODE_BAD_REQUEST, false, error.message, {}, res);
        })
    },

    updateVet : function(req,res) {
        var queryData = {
            _id : req.body.id
        }
        delete req.body["id"];
        var updateData = req.body;
        vetRepository.updateVet(queryData,updateData).then(function(successResponse){
            if(successResponse == null){
                utility.buildResponse(messages.CODE_STATUS_OK, false, messages.MSG_NO_DATA_FOUND, successResponse, res);
            }
            else{
                utility.buildResponse(messages.CODE_STATUS_OK, true, messages.MSG_DATA_UPDATED, {}, res);
            }
        }).catch(function(error){
            utility.buildResponse(messages.CODE_BAD_REQUEST, false, error.message, {}, res);
        })
    }
}