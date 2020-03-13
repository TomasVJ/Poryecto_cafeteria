'use strict'

const Tables = use('App/Models/CoffeTable');
const Database = use('Database');

class CoffeeTableController {
    async index({auth, request, response}){
        const tables = await Database.select('*').from('CaffeeTables');
        return tables;
    }
    
    async store ({ request, response, view }) {
        const { order_id, number, sector, status } = request.all();
        const tables = await Tables.create({
            order_id,
            number,
            sector,
            status
        });
        return tables;
    }

    async update({ request, response, params}){
        const { id } = params;
        const tables = await Tables.find(id);
        //agregar autentificacion
        tables.merge(request.only([
            'order_id', 
            'number', 
            'sector', 
            status
        ]));
        await tables.save();
        return tables;
    }

    async destroy({ request, response, params}){
        const { id } = params;
        const tables = await Tables.find(id);
        await tables.delete();
        return tables;
    }

    
}

module.exports = CoffeeTableController
