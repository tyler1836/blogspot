const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//initializes Comment model (table) to store data
class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                key: "id",
                model: "post",
            },
        },
    },

    {
        sequelize,
        freezeTableName: true,
        // modelName: "comment",
        underscored: true,
    }

);

module.exports=Comment;