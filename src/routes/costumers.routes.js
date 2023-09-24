const {create} = require('../controllers/costumer.controller');

class CostumerRouter {
    routesFromCostumer() {
        const costumerRoutes = Router()
        costumerRoutes.post('/costumer', create)

        return costumerRoutes
    }
};

module.exports = new CostumerRouter();