var express = require('express');
var router = express.Router();
const treeController = require('../controllers/tree-controller');

router.get('/', async function(req, res, next) {
  await treeController.getAll(req, res);
});

router.get('/create', async function(req, res, next) {
  await treeController.createTree(req, res);
});

router.post('/store', async function(req, res, next) {
  await treeController.storeTree(req, res);
});

module.exports = router;
