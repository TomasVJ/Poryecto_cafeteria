'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SaleSchema extends Schema {
  up () {
    this.create('sales', (table) => {
      table.increments()
      table.integer('coffeeTable').unsigned().references('id').inTable('CoffeeTables')
      table.boolean('status').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('sales')
  }
}

module.exports = SaleSchema
