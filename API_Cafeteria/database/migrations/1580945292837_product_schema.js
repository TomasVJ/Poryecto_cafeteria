'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('name', 40).notNullable()
      table.integer('code')
      table.string('description', 400)
      table.integer('price').notNullable()
      table.boolean('status').defaultTo(true)
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
