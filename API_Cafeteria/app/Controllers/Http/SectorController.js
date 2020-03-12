'use strict'

const Sector = use('App/Models/Sector');
const Database = use('Database');

class SectorController {
    async index({auth, request, response}){
        const Sectores = await Database.select('*').from('sectores');
        return sectores;
    }

    async store({ auth, request, params }){
        const { name, status } = request.all();
        const sector = await Sector.create({
            name, 
            status
        });
        return sector;
    }

    async update({ request, response, params}){
        const { id } = params;
        const sector = await Sector.find(id).first();
        //agregar autentificacion
        sector.merge(request.only([
            'name', 
            'status'
        ]));
        await sector.save();
        return sector;
    }

    async destroy({ request, response, params}){
        const { id } = params;
        const sector = await Sector.find(id).first();
        await sector.delete();
        return sector;
    }
}

module.exports = SectorController
