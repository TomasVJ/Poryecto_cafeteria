'use strict'

const User = use('App/Models/User');
const Database = use('Database')

class UserController {
    async login({ request, auth }){
		const { email, password } = request.all();
		const token = await auth.attempt(email, password);
		return token;
	}

    async store ({ request }) {
		const { email, password } = request.all();
		console.log(email, password);
		const user = await User.create({
			email,
			password,
			username: email
		});
	return this.login(...arguments);
	//return { message: "listo"}
    };
    
    async index({ request, auth, params }) {
        return await Database.select('*').from('users')
    }
}

module.exports = UserController
