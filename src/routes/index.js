const { Router } = require('express')
const { routesFromCostumer } = require('./costumers.routes')
const { routesFromProduct } = require('./products.routes')
const { routesFromSale } = require('./sales.routes')

const routes = new Router()

routes.use('/api', [
    routesFromCostumer(),
    routesFromProduct(),
    routesFromSale()
])

module.exports = routes