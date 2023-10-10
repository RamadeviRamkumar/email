const Dao = require('../Dao/Dao.js');

exports.Service_index = async function (err, callback) {
    try {
        const result = await Dao.Dao_index(err);
        callback(null, result);
    } catch (error) {
        console.error(error);
        callback(error);
    }
}

exports.Service_add = async function (err, callback) {
    try {
        const result = await Dao.Dao_add(err);
        callback(null, result);
    } catch (error) {
        console.error(error);
        callback(error);
    }
}

exports.Service_view = async function (err, callback) {
    try {
        const result = await Dao.Dao_view(err);
        callback(null, result);
    } catch (error) {
        console.error(error);
        callback(error);
    }
}

exports.Service_update = async function (err, callback) {
    try {
        const result = await Dao.Dao_update(err);
        callback(null, result);
    } catch (error) {
        console.error(error);
        callback(error);
    }
}

exports.Service_Delete = async function (err, callback) {
    try {
        const result = await Dao.Dao_Delete(err);
        callback(null, result);
    } catch (error) {
        console.error(error);
        callback(error);
    }
}
