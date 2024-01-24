"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conexion_1 = __importDefault(require("../db/conexion"));
const Tiempos = conexion_1.default.define('Tiempos', {
    placas_id: {
        type: sequelize_1.DataTypes.STRING
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    entrada: {
        type: sequelize_1.DataTypes.TIME
    },
    salida: {
        type: sequelize_1.DataTypes.TIME
    },
    minutos: {
        type: sequelize_1.DataTypes.TINYINT
    },
    importe: {
        type: sequelize_1.DataTypes.TINYINT
    },
});
exports.default = Tiempos;
//# sourceMappingURL=tiempo_modelo.js.map