const TreeCollection = require('../models/tree');

exports.findAll = () => {
    return TreeCollection.find({});
};

exports.save = (insertData) => {
    const data = new TreeCollection(insertData);
    return data.save();
}