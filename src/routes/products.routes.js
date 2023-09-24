const {create} = require('../controllers/product.controller');

class ProductRouter {
    routesFromProduct() {
        const productRoutes = Router()
        productRoutes.post('/product', create)

        return productRoutes
    }
};

module.exports = new ProductRouter();