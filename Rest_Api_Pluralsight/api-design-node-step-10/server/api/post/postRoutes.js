var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./postController');
require('../../util/createRoutes')(controller, router);



module.exports = router;
