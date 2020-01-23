import { DataTypes, Model } from "sequelize";
import sequelize from "./connection";

export class User extends Model {}

User.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    passwordHash: {
      allowNull: false,
      type: DataTypes.CHAR(64)
    }
  },
  {
    defaultScope: {
      rawAttributes: {exclude: ["passwordHash"]},
    },
    modelName: "users",
    sequelize
  },
);
