import { Router } from 'express';
import { getVehiculos, getVehiculo, postVehiculo, putVehiculo, deleteVehiculo, datos } from '../controller/usuarios';

const router = Router();

router.get('/',         datos);
router.get('/:id',      getVehiculo);
router.post('/',        postVehiculo);
router.put('/:id',      putVehiculo);
router.delete('/:id',   deleteVehiculo);
//router.get('/:',   datos);


export default router;