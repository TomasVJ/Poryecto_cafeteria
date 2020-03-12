'use strict'

const Product = use('App/Models/Product');
const Category = use('App/Models/Category');
const Database = use('Database');


class ProductController {
    async index_all({auth, request, response}){
        const products = await Database.select('*').from('products');
        return products;
    }

    async index_categ({ auth, request, params }){
        //const user = await auth.getUser();
        const { id } = params;
        const category = await Category.find(id);
        //AuthorizationService.verificarPermiso( project, user);
        return await category.products().fetch();
    }
    
    async store({ auth, request, params }){
        const { name, description, precio, status, category_id } = request.all();
        const product = await Product.create({
            name, 
            description, 
            precio, 
            status, 
            category_id
        });
        return product;
    }

    async update({ request, response, params}){
        const { id } = params;
        const product = await Product.find(id);
        //agregar autentificacion
        product.merge(request.only([
            'name', 
            'description', 
            'precio', 
            'status', 
            'category_id'
        ]));
        await product.save();
        return product;
    }

    async destroy({ request, response, params}){
        const { id } = params;
        const product = await Product.find(id);
        await product.delete();
        return product;
    }

}

module.exports = ProductController
