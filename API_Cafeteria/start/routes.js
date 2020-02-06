'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
});

Route.group(() => {
  Route.post('users/register', 'UserController.store');
  Route.post('users/login', 'UserController.login');
  Route.get('users/list', 'UserController.index');

  //Categorias
  Route.get('categorias', 'CategoryController.index');
  Route.post('categorias/create', 'CategoryController.store'); //necesita {name, description}
  Route.patch('categorias/update/:id', 'CategoryController.update'); //necesita {name, description}
  Route.delete('categorias/delete/:id', 'CategoryController.destroy');

  //Productos
  Route.get('productos', 'ProductController.index');
  

}).prefix('api/v1')
