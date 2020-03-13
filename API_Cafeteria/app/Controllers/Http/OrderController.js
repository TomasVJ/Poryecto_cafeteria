'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Order = use('App/Models/Order');
const Database = use('Database');
/**
 * Resourceful controller for interacting with orders
 */
class OrderController {
  async index_all({auth, request, response}){
      const orders = await Database.select('*').from('orders');
      return orders;
	}
	
	async store({ auth, request, params }){
		const { product, sale } = request.all();
		const order = await Order.create({
			product,
			sale
		});
		return order;
	}
	
	async update({ request, response, params}){
		const { id } = params;
		const order = await Order.find(id);
		//agregar autentificacion
		order.merge(request.only([
			'product',
			'sale'
		]));
		await order.save();
		return order;
	}

	async destroy({ request, response, params}){
		const { id } = params;
		const order = await Order.find(id);
		await order.delete();
		return order;
	}


}

module.exports = OrderController
