'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    Categories(){
        return this.belongsTo('App/Models/Category')
    }
}

module.exports = Product
