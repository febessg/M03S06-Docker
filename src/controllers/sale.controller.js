const { Costumer } = require('../models/Costumer');
const { Product } = require('../models/Product');
const {Sale} = require('../models/Sale');

class SaleController {
    async create(req, res) {
        try {
            const {
            costumerId,
            productId,
            discount
            } = req.body

            const costumer = await Costumer.findByPk(costumerId);

            if (!costumer) {
                return res.status(404).send({message: 'Cliente não encontrado.'})
            };

            const product = await Product.findByPk(productId);

            if (!product) {
                return res.status(404).send({message: 'O produto não existe.'})
            };

            const saleCreated = await Sale.create({
                costumerId,
                productId,
                discount
            });

            return res.status(201).send(saleCreated);
        } catch (error) {
            return res.status(400).send({
                message: 'Erro ao realizar compra',
                cause: error.message
            })
        }
        
    }
};

module.exports = new SaleController();