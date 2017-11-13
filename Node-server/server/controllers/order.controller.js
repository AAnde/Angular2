var orderRepository = require(__base + '/server/repositories/order.repository');
var productRepository = require(__base + '/server/repositories/product.repository');
var utility = require(__base + "/server/utils/utility");
var messages = require(__base + "/server/config/messages");

module.exports = {
    confirmOrder: function (req, res) {
        try {
            var order = {};
            var totalPrice = 0;
            order._userId = req.body.userId;
            var input_items = req.body.items;
            var result_items = [];
            var counter = 0;
            for (var i = 0; i < input_items.length; i++) {
                productRepository.getProductById(input_items[i]).then(function (successResponse) {
                    counter++;
                    totalPrice += successResponse.price;
                    result_items.push(successResponse);
                    if (counter == input_items.length) {
                        order.items = result_items;
                        order.totalCost = totalPrice;
                        orderRepository.createOrder(order).then(function (success) {
                            if (success == null || success == "") {
                                utility.buildResponse(messages.CODE_STATUS_OK, false, messages.MSG_OPERATION_FAILED, success, res);
                            }
                            else {
                                utility.buildResponse(messages.CODE_STATUS_OK, true, messages.MSG_STATUS_SAVED, success, res);
                            }
                        }).catch(function (error) {
                            utility.buildResponse(messages.CODE_BAD_REQUEST, false, error.message, null, res);
                        })
                    }
                })

            }
        } catch (error) {
            utility.buildResponse(messages.CODE_STATUS_SERVERERROR, false, messages.MSG_STATUS_SERVERERROR, null, res);
        }
    },
    getOrders: function (req, res) {
        try {
            orderRepository.getOrdersByUserId(req.params.userId).then(function (successResponse) {
                if (successResponse == null || successResponse.length == 0) {
                    utility.buildResponse(messages.CODE_STATUS_OK, true, messages.MSG_NO_DATA_FOUND, successResponse, res);
                }
                else {
                    utility.buildResponse(messages.CODE_STATUS_OK, true, messages.MSG_DATA_FOUND, successResponse, res);
                }

            }).catch(function (error) {
                utility.buildResponse(messages.CODE_BAD_REQUEST, false, error.message, null, res);
            })
        } catch (error) {
            utility.buildResponse(messages.CODE_STATUS_SERVERERROR, false, messages.MSG_STATUS_SERVERERROR, null, res);
        }
    }
}