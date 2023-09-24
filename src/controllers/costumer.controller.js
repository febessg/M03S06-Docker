const { Costumer } = require('../models/Costumer');

class CostumerController {

    async create(req,res) {
        try {
            const {
                name,
                balance
            } = req.body;

            const costumerExist = await Costumer.findOne({where: {name:name}});

            if (costumerExist) {
                return res.status(403).send({message: "Cliente já está cadastrado."});
            };

            const costumerCreated = await Costumer.create({
                name,
                balance
            });

            return res.status(201).send(costumerCreated);
        } catch (error) {
            return res.status(400).send({
                message: "Erro ao cadastrar cliente.",
                cause: error.message
            })
        }
    }
};

module.exports = new CostumerController();