var vetModel = require(__base+'/server/models/vet.model');

module.exports = {
    addVet : function(vetData, callback){
        var vet_model = new vetModel(vetData);
        return vet_model.save();
    },
    getVets : function(){
        return vetModel.find({}).exec();
    },
    getVet : function(id){
        return vetModel.findOne({_id:id}).exec();
    },
    updateVet : function(queryData,updateData){
        return vetModel.findOneAndUpdate(queryData,updateData).exec();
    },
    deleteVet : function(id){
        return vetModel.find({_id:id}).remove();
    }
}