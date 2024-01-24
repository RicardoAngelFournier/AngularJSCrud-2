"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.datos = exports.deleteVehiculo = exports.putVehiculo = exports.postVehiculo = exports.getVehiculo = exports.getVehiculos = void 0;
const conexion_1 = __importDefault(require("../db/conexion"));
const vehiculos_modelo_1 = __importDefault(require("../models/vehiculos_modelo"));
const tiempo_modelo_1 = __importDefault(require("../models/tiempo_modelo"));
const sequelize_1 = require("sequelize");
const getVehiculos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const vehiculo = yield vehiculos_modelo_1.default.findAll();
    res.json(vehiculo);
});
exports.getVehiculos = getVehiculos;
const getVehiculo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const vehiculo = yield vehiculos_modelo_1.default.findByPk(id);
    if (vehiculo) {
        res.json(vehiculo);
    }
    else {
        res.status(404).json({
            msg: `No existe ese vehiculo: ${id}`
        });
    }
});
exports.getVehiculo = getVehiculo;
const postVehiculo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existePlacas = yield vehiculos_modelo_1.default.findOne({
            where: {
                placas_id: body.placas_id
            }
        });
        if (existePlacas) {
            return res.status(400).json({
                msg: 'Ya existe un vehiculo con esa placa' + body.placas_id
            });
        }
        const vehiculo = yield vehiculos_modelo_1.default.create(body);
        yield vehiculo.save();
        const tiempo = yield tiempo_modelo_1.default.create(body.placas_id);
        yield tiempo.save();
        res.json(vehiculo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Conexion fallo'
        });
    }
});
exports.postVehiculo = postVehiculo;
const putVehiculo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const vehiculo = yield vehiculos_modelo_1.default.findByPk(id);
        if (!vehiculo) {
            return res.status(404).json({
                msg: 'El vehiculo no existe' + id
            });
        }
        yield vehiculo.update(body);
        res.json(vehiculo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Conexion fallo'
        });
    }
});
exports.putVehiculo = putVehiculo;
const deleteVehiculo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const vehiculo = yield vehiculos_modelo_1.default.findByPk(id);
    if (!vehiculo) {
        return res.status(404).json({
            msg: 'El vehiculo que estas tratando de Eliminar no existe' + id
        });
    }
    yield vehiculo.destroy();
    res.json(vehiculo);
});
exports.deleteVehiculo = deleteVehiculo;
const datos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let sSql = '';
    const consulta = 'SELECT * FROM `proyecto1`.`vehiculos`';
    let datos = yield conexion_1.default.query(consulta, { type: sequelize_1.QueryTypes.SELECT,
    }).then((result) => {
        return result;
    });
    return res.status(200).send(datos);
});
exports.datos = datos;
//export const getAllInfoVehiculos = async (res: Response) => {
//let list = await VehiculoInfo.getAllRegisters({});
//return res.status(200).send(list);
//}
exports.default = exports.getVehiculo;
//# sourceMappingURL=usuarios.js.map