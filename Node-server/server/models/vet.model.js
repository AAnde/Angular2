var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vetSchema = new Schema({
    name : {type:String,required:true},
    experience : {type:Number,required:true},
    qualification : {type:String,required:true}
});

var vet = mongoose.model('vet',vetSchema);

module.exports = vet;