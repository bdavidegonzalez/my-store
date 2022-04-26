import  { User, UserSchema } from './user.model'

export function setupModels(sequelize: any) {
  User.init(UserSchema, User.config(sequelize));
}

export default setupModels