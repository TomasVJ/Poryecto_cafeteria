'use strict'

const Category = use('App/Models/Category');
const Database = use('Database');


class CategoryController {
    async index({auth, request, response}){
        const categories = await Database.select('*').from('categories');
        return categories;
    }

    async store ({ request, response, view }) {
        const { name, description } = request.all();
        const category = await Category.create({
            name,
            description
        });
        return category;
    }

    async update({ request, response, params}){
        const { id } = params;
        const category = await Category.find(id);
        //agregar autentificacion
        category.merge(request.only([
            'name',
            'description'
        ]));
        await category.save();
        return category;
    }

    async destroy({ request, response, params}){
        const { id } = params;
        const category = await Category.find(id);
        await category.delete();
        return category
    }
}

module.exports = CategoryController
