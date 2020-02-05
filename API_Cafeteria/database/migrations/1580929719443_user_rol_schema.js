'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserRolSchema extends Schema {
  up () {
    this.create('user_rols', (table) => {
      table.increments()
      table.string('name', 40).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_rols')
  }
}

module.exports = UserRolSchema
