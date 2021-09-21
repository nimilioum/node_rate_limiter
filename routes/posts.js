const express = require('express');
const router = express.Router();
const rateLimit = require('../middlewares/rateLimit');


const blogController = require('../controllers/blogController');

/* GET home page. */
router.get('/', blogController.list);
router.post('/',rateLimit(5, 30), blogController.create);
router.get('/:id', blogController.detail);
router.delete('/:id', blogController.delete);
router.put('/:id', rateLimit(5, 30), blogController.update)

module.exports = router;
