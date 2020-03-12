'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CoffeeTableSchema extends Schema {
  up () {
    this.create('coffeeTable', (table) => {
      table.increments()
      table.integer('order_id').unsigned().references('id').inTable('order')
      table.integer('number').notNullable()
      table.string('sector', 40)
      table.boolean('status', 40)
      table.timestamps()
    })
  }

  down () {
    this.drop('coffeeTables')
  }
}

module.exports = CoffeeTableSchema
