var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var fs = require('fs');
var q = require('q');

global.__base = __dirname+"/";
var config = require(__base+'/server/config/config');
var vetController = require(__base+"/server/controllers/vet.controller");
var userController = require(__base+"/server/controllers/user.controller");
var productController = require(__base+"/server/controllers/product.controller");
var orderController = require(__base+"/server/controllers/order.controller");

var app = express();
var urlEncoder = bodyParser.urlencoded({extended:true});
app.use(bodyParser.json());

//mongoose.connect(config.DATABASE);
mongoose.connect(config.MLAB_DATABASE);
// q
mongoose.Promise = q.Promise;
// native promises
mongoose.Promise = global.Promise;

app.get('/', function (req, res) {
    res.send("server is up and running..");
})
app.get('/data', function (req, res) {
    var data = {
        name : "ashok",
        city : "Hyderabad"
    }
    res.send(data);
})

//vet api's
app.route('/api/vet/save').post(vetController.saveVet);
app.route('/api/vet/getAll').get(vetController.getAllVets);
app.route('/api/vet/get/:id').get(vetController.getById);
app.route('/api/vet/delete/:id').delete(vetController.deleteVet);
app.route('/api/vet/update').put(vetController.updateVet);

//user api's
app.route('/api/user/signUp').post(userController.createUser);
app.route('/api/user/login').post(userController.login);
app.route('/api/user/update').post(userController.updateUser);
app.route('/api/user/resetPassword').post(userController.resetPassword);

//product api's
app.route('/api/product/getAll').get(productController.getProducts);
app.route('/api/product/save').post(productController.saveProduct);

//order api's
app.route('/api/order/confirm').post(orderController.confirmOrder);
app.route('/api/order/get/:userId').get(orderController.getOrders);

app.listen(process.env.PORT || 8080);
console.log("server up and running...");
// http.createServer(function (req, res) {
    
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Hello, world!');
    
// }).listen(process.env.PORT || 8080);