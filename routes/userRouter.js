const express = require('express')
const createuser = require('..//controllers/user/createuser');
const singleuser = require('../controllers/user/singleuser');
const userlist = require('../controllers/user/userlist');
const deleteuser = require('../controllers/user/deleteuser');
const router = express.Router()
router.get('/userlist', userlist)
router.get('/:id', singleuser)
router.post('/createuser', createuser)
router.delete('/:id', deleteuser)

module.exports = router