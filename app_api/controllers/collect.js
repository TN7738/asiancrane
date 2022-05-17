const mongoose = require('mongoose');
const collect = mongoose.model('Collect');

const sendJSONResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

const collectListAll = (req, res) => {
    collect
        .find()
        .exec((err, collectdata) => {
            if (err) {
                sendJSONResponse(res, 404, err);
                return;
            } else if (collectdata.length <= 0) {
                sendJSONResponse(res, 404, { 'message': 'collect list empty' });
                return;
            } else {
                sendJSONResponse(res, 200, collectdata);
            }
        });
};

const collectListCreate = (req, res) => {
    collect
        .create({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            details: req.body.details,
            readFlag: false
        }, (err, collectdata) => {
            if (err) {
                sendJSONResponse(res, 400, err);
            } else {
                sendJSONResponse(res, 200, collectdata);
            }
        });
};

const collectListReadOne = (req, res) => {
    if (req.params && req.params.collectid) {
        collect
            .findById(req.params.collectid)
            .exec((err, collectdata) => {
                if (!collectdata) {
                    sendJSONResponse(res, 404, { 'message': 'collectid not found' });
                    return;
                } else if (err) {
                    sendJSONResponse(res, 404, err);
                    return;
                } else {
                    sendJSONResponse(res, 200, collectdata);
                }
            });
    } else {
        sendJSONResponse(res, 404, { 'message': 'No collectid in request' });
    }
};

const collectListUpdateOne = (req, res) => {
    if (!req.params.collectid) {
        sendJSONResponse(res, 404, { 'message': 'collectid is required' });
        return;
    }
    collect
        .findById(req.params.collectid)
        .exec((err, collectdata) => {
            if (!collectdata) {
                sendJSONResponse(res, 404, { 'message': 'no collectdata found' });
                return;
            } else if (err) {
                sendJSONResponse(res, 400, err);
                return
            }
            collectdata.name = req.body.name;
            collectdata.email = req.body.email;
            collectdata.number = req.body.number;
            collectdata.details = req.body.details;
            collectdata.readFlag = req.body.readFlag;
            collectdata.save((err, collectdata) => {
                if (err) {
                    sendJSONResponse(res, 400, err);
                } else {
                    sendJSONResponse(res, 200, collectdata);
                }
            });
        });
};

const collectListDeleteOne = (req, res) => {
    const collectid = req.params.collectid;
    if (collectid) {
        collect
            .findByIdAndRemove(collectid)
            .exec((err, collectdata) => {
                if (err) {
                    sendJSONResponse(res, 404, err);
                    return;
                }
                sendJSONResponse(res, 204, null);
            });
    } else {
        sendJSONResponse(res, 404, { 'message': 'collectid is required' });
    }
};

module.exports = {
    collectListAll,
    collectListCreate,
    collectListReadOne,
    collectListUpdateOne,
    collectListDeleteOne
};