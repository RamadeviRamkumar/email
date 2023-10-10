const Service = require('../service/service.js');

exports.index = async function (err, user) {
  try {
    await Service.Service_index(err, user);
    if (err) console.error(err);
  } catch (error) {
    console.error(error);
  }
};

exports.add = async function (err, user) {
  try {
    await Service.Service_add(err, user);
    if (err) console.error(err);
  } catch (error) {
    console.error(error);
  }
};

exports.view = async function (err, user) {
  try {
    await Service.Service_view(err, user);
    if (err) console.error(err);
  } catch (error) {
    console.error(error);
  }
};

exports.update = async function (err, user) {
  try {
    await Service.Service_update(err, user);
    if (err) console.error(err);
  } catch (error) {
    console.error(error);
  }
};

exports.Delete = async function (err, user) {
  try {
    await Service.Service_Delete(err, user);
    if (err) console.error(err);
  } catch (error) {
    console.error(error);
  }
};
