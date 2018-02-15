const express = require('express')

module.exports = function(server){
	

	//API routes
	const router = express.Router()
	server.use('/api',router)

	const billingCycleService = require('../billingCycle/billingCycleService')
	billingCycleService.register(router, '/billingCycles')
}