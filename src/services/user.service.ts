/*
* david gonzalez
* my-store
*/

import  boom  from '@hapi/boom'
import  sequelize  from '../libs/database';

class UserService {
  constructor() {}

  async create(data: any) {
    return data;
  }

  async find() {

    console.log(sequelize.models.User.findAll());
    const user = await sequelize.models.User.findAll()
    return user
  }

  async findOne(id: any) {
    return { id };
  }

  async update(id: any, changes: any) {
    return {
      id,
      changes,
    };
  }

  async delete(id: any) {
    return { id };
  }
}


export default UserService;
