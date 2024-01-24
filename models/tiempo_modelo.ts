import { DataTypes } from 'sequelize';
import db from '../db/conexion';

const Tiempos = db.define('Tiempos',{
    placas_id: {
        type:DataTypes.STRING
    },
    nombre: {
        type:DataTypes.STRING
    },
    entrada: {
        type:DataTypes.TIME
    },
    salida: {
        type:DataTypes.TIME
    },
    minutos: {
        type:DataTypes.TINYINT
    },
    importe: {
        type:DataTypes.TINYINT
    },
});

export default Tiempos;

