const router =require('express').Router();

const ApiController = require('../controllers/ApiController')
const newApiController = new ApiController()

router.get('/getUsers',newApiController.getUsers);
router.post('/signUp',newApiController.signUp);
router.post('/login',newApiController.login);

module.exports = router;
