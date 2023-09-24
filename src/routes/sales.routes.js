const {create} = require('../controllers/sale.controller');

class SaleRouter {
    routesFromSale() {
        const saleRoutes = Router()
        saleRoutes.post('/sale', create)

        return saleRoutes
    }
};

module.exports = new SaleRouter();