'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserRol extends Model {
    user () {
        return this.hasMany('App/Models/User')
    }
}

module.exports = UserRol
