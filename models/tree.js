const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const treeSchema = new Schema({
    treename: String,
    description: String,
    image: String,
})

const TreeCollection = mongoose.model("TreeCollection", treeSchema);

module.exports = TreeCollection;
