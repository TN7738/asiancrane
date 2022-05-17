const mongoose = require('mongoose');
const sale = mongoose.model('Sale');

const sendJSONResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

const saleListAll = (req, res) => {
    sale
        .find()
        .exec((err, saledata) => {
            if (err) {
                sendJSONResponse(res, 404, err);
                return;
            } else if (saledata.length <= 0) {
                sendJSONResponse(res, 404, { 'message': 'sale list empty' });
                return;
            } else {
                sendJSONResponse(res, 200, saledata);
            }
        });
};

const saleListCreate = (req, res) => {
    sale
        .create({
            name: req.body.name,
            price: req.body.price,
            list: req.body.list
        }, (err, saledata) => {
            if (err) {
                sendJSONResponse(res, 400, err);
            } else {
                sendJSONResponse(res, 200, saledata);
            }
        });
};

const saleListReadOne = (req, res) => {
    if (req.params && req.params.saleid) {
        sale
            .findById(req.params.saleid)
            .exec((err, saledata) => {
                if (!saledata) {
                    sendJSONResponse(res, 404, { 'message': 'saleid not found' });
                    return;
                } else if (err) {
                    sendJSONResponse(res, 404, err);
                    return;
                } else {
                    sendJSONResponse(res, 200, saledata);
                }
            });
    } else {
        sendJSONResponse(res, 404, { 'message': 'No saleid in request' });
    }
};

const saleListUpdateOne = (req, res) => {
    if (!req.params.saleid) {
        sendJSONResponse(res, 404, { 'message': 'saleid is required' });
        return;
    }
    sale
        .findById(req.params.saleid)
        .exec((err, saledata) => {
            if (!saledata) {
                sendJSONResponse(res, 404, { 'message': 'no saledata found' });
                return;
            } else if (err) {
                sendJSONResponse(res, 400, err);
                return
            }
            saledata.name = req.body.name;
            saledata.price = req.body.price;
            saledata.list = req.body.list;
            saledata.save((err, saledata) => {
                if (err) {
                    sendJSONResponse(res, 400, err);
                } else {
                    sendJSONResponse(res, 200, saledata);
                }
            });
        });
};

const saleListDeleteOne = (req, res) => {
    const saleid = req.params.saleid;
    if (saleid) {
        sale
            .findByIdAndRemove(saleid)
            .exec((err, saledata) => {
                if (err) {
                    sendJSONResponse(res, 404, err);
                    return;
                }
                sendJSONResponse(res, 204, null);
            });
    } else {
        sendJSONResponse(res, 404, { 'message': 'saleid is required' });
    }
};

module.exports = {
    saleListAll,
    saleListCreate,
    saleListReadOne,
    saleListUpdateOne,
    saleListDeleteOne
};