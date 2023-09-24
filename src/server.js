const express = require('express');
const { connection } = require('./database/connection');
const cors = require('cors');
const routes = require('./routes');

class Server {
    constructor ( server = express())
    {
        this.middlewares(server)
        this.database()
        this.initializeServer(server)
    }
    async middlewares(app) {
        app.use(cors())
        app.use(express.json())
    }
    async database() {
        try {
            await connection.authenticate();
            console.log('Conexão bem sucedida!')
        } catch (error) {
            console.error('Não foi possível se conectar', error)
        }
    }
    async initializeServer(app) {
        const PORT = 3333
        app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`))
    }
    async allRoutes(app) {
        app.use(routes)
    }    
};

module.exports = { Server }