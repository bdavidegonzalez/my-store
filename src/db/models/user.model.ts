import { Model, DataTypes, Sequelize } from 'sequelize';

export const USER_TABLE = 'users';

export const UserSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER
	},
	email: {
		allowNull: false,
		type: DataTypes.STRING,
		unique: true
	},
	password: {
		allowNull: false,
		type: DataTypes.STRING
	},
	createdAt: {
		allowNull: false,
		type: DataTypes.DATE,
		field: 'create_at',
		defaultValue: Sequelize.toString	
    }
};

export class User extends Model {
    static associate() {
      // associate
    }
  
    static config(sequelize: any) {
      return {
        sequelize,
        tableName: USER_TABLE,
        modelName: 'User',
        timestamps: false
      }
    }
  }
  

export default  { USER_TABLE, UserSchema, User }