const mongoose = require('mongoose');
const admin = mongoose.model('Admin');

const sendJSONResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

const adminListAll = (req, res) => {
    admin
        .find()
        .exec((err, admindata) => {
            if (err) {
                sendJSONResponse(res, 404, err);
                return;
            } else if (admindata.length <= 0) {
                sendJSONResponse(res, 404, { 'message': 'admin list empty' });
                return;
            } else {
                sendJSONResponse(res, 200, admindata);
            }
        });
};

const adminListCreate = (req, res) => {
    admin
        .create({
            username: req.body.username,
            password: req.body.password
        }, (err, admindata) => {
            if (err) {
                sendJSONResponse(res, 400, err);
            } else {
                sendJSONResponse(res, 200, admindata);
            }
        });
};

const adminListReadOne = (req, res) => {
    if (req.params && req.params.adminid) {
        admin
            .findById(req.params.adminid)
            .exec((err, admindata) => {
                if (!admindata) {
                    sendJSONResponse(res, 404, { 'message': 'adminid not found' });
                    return;
                } else if (err) {
                    sendJSONResponse(res, 404, err);
                    return;
                } else {
                    sendJSONResponse(res, 200, admindata);
                }
            });
    } else {
        sendJSONResponse(res, 404, { 'message': 'No adminid in request' });
    }
};

const adminListUpdateOne = (req, res) => {
    if (!req.params.adminid) {
        sendJSONResponse(res, 404, { 'message': 'adminid is required' });
        return;
    }
    admin
        .findById(req.params.adminid)
        .exec((err, admindata) => {
            if (!admindata) {
                sendJSONResponse(res, 404, { 'message': 'no admindata found' });
                return;
            } else if (err) {
                sendJSONResponse(res, 400, err);
                return
            }
            admindata.username = req.body.username;
            admindata.password = req.body.password;
            admindata.save((err, admindata) => {
                if (err) {
                    sendJSONResponse(res, 400, err);
                } else {
                    sendJSONResponse(res, 200, admindata);
                }
            });
        });
};

const adminListDeleteOne = (req, res) => {
    const adminid = req.params.adminid;
    if (adminid) {
        admin
            .findByIdAndRemove(adminid)
            .exec((err, admindata) => {
                if (err) {
                    sendJSONResponse(res, 404, err);
                    return;
                }
                sendJSONResponse(res, 204, null);
            });
    } else {
        sendJSONResponse(res, 404, { 'message': 'adminid is required' });
    }
};

module.exports = {
    adminListAll,
    adminListCreate,
    adminListReadOne,
    adminListUpdateOne,
    adminListDeleteOne
};