'use strict'

const UserRol = use('App/Models/UserRol');

class UserRolController {
    async store ({request}) {
        const { name } = request.all();
        console.log(name);
        const userRol = await UserRol.create({
            name
        });
        return name;
    }
}

module.exports = UserRolController
