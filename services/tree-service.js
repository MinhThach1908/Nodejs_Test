const treeRepository = require('../repositories/tree-repository');

exports.getAll = () => {
    return treeRepository.findAll();
}

exports.store = (storeData) => {
    return treeRepository.save(storeData)
}