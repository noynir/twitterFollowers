const router = require('express').Router();
const controller = require('../controllers/twitter');
const cors = require('cors');

router.use(cors());
router.get('/', controller.getFollowers);


module.exports = router;