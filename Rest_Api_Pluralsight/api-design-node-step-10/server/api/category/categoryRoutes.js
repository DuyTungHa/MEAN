var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./categoryController');
require('../../util/createRoutes')(controller, router);


module.exports = router;
