const express = require('express')
const router = express.Router()

const testControllers = require('../controllers/fetch')

router.get('/', testControllers.fetchAll)


module.exports = router