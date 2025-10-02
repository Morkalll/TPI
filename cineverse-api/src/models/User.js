
import { DataTypes } from "sequelize"
import { sequelize } from "../db.js"
// SE IMPORTA LA FUNCIÓN CREADA EN ESA RUTA, NO "SEQUELIZE" LITERAL


export const User = sequelize.define("user",
{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "user", // Valores posibles: "user", "admin" o "sysAdmin"
    },
},

{
    timestamps: false,
}

);


