import { sequelize } from '../config/data-source.js';
import { DataTypes } from 'sequelize';
import User from './userModel.js';

const Todo = sequelize.define('Todo', {
  userId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Todo.belongsTo(User, { foreignKey: 'userId', allowNull: false });

export default Todo;
