const express = require('express')
const router = express.Router()

const testControllers = require('../controllers/fetch')

router.get('/tractive-test', testControllers.fetchAll)


module.exports = router