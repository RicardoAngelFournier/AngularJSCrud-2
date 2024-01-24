import { DataTypes, QueryTypes} from 'sequelize';
import db from '../db/conexion';
import sequelize from 'sequelize';
import Tipos from './tipos_modelo';
import Tiempos from './tiempo_modelo';


const Vehiculo = db.define('Vehiculo',{
    placas_id: {
        type:DataTypes.STRING
    },
    esta_estacionado: {
        type:DataTypes.TINYINT
    },
    tipo: {
        type:DataTypes.BIGINT
    },
    activo: {
        type:DataTypes.TINYINT
    },
    nombre: {
        type:DataTypes.STRING
    },
    entrada: {
        type:DataTypes.TIME
    },
});


export default Vehiculo;