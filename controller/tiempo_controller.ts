import { Request } from 'express'
import { Response } from 'express'
import Tiempos from '../models/tiempo_modelo';
const { Op } = require('sequelize');


export const getTiempos = async (req: Request, res: Response) => {
    
    const tiempo = await Tiempos.findAll();
    res.json(tiempo);

}

export const getTiempo = async (req: Request, res: Response) => {
    
    const{placas_id} = req.params;
    const tiempo = await Tiempos.findByPk(placas_id);
    
        if (tiempo){
            res.json(tiempo);
        } else {
            res.status(404).json({
                msg: `No existe ese tiempo: ${placas_id}`
            });
        }

}

export const postTiempo = async (req: Request, res: Response) => {
    
    const { body } = req;

        const tiempo = await Tiempos.create(body);
        await tiempo.save();
        res.json(tiempo);

}

export const putTiempo = async (req: Request, res: Response) => {
    const{placas_id} = req.params;
    const { body } = req;
    try {
    const tiempo = await Tiempos.findByPk(placas_id);
    if (!tiempo){
        return res.status(404).json({
            msg: 'El tiempo no existe' + placas_id
        })
    } 
    await tiempo.update( body );
    res.json(tiempo);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:'Conexion fallo'
        })
    }

}

export const deleteTiempo=  async (req: Request, res: Response) => {
    
    const{id} = req.params;
    const tiempo = await Tiempos.findByPk(id);
    if (!tiempo){
        return res.status(404).json({
            msg: 'El tiempo o vehiculo no existe' + id
        })
    } 

   await tiempo.destroy();
   // await tiempo.update({activo: false});
    res.json(tiempo)
}


export const getTiempoDia = async (req: Request, res: Response) => {
    try {
        const { startDate, endDate } = req.query;

        const tiempo = await Tiempos.findAll({
            where: {
                createdAt: {
                    [Op.between]: [startDate, endDate]
                }
            }
        });
        res.json(tiempo);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({
            msg: 'Connection failed'
        });
    }
};

export default getTiempo