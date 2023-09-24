const { Product } = require('../models/Product');

class ProductController {
    async create(req, res) {
        try {
            const {
                name,
                price,
                expirationDate
            } = req.body;


            const existProduct = await Product.findOnde({where: {name:name}});

            if (existProduct) {
                return res.status(403).send({message: "Produto já cadastrado"})
            };

            const productCreated = await Product.create({
                name,
                price,
                expirationDate
            });

            return res.status(201).send(productCreated);

        } catch (error) {
            return res.status(400).send({
                message: "Erro na criação do produto.",
                cause: error.message
            })
        }
    }
}

module.exports = new ProductController();