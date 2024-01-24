import { Router } from 'express';
import { getTiempos, getTiempo, postTiempo, putTiempo, deleteTiempo, getTiempoDia} from '../controller/tiempo_controller';

const router = Router();

router.get('/',         getTiempos);
router.get('/fecha/',    getTiempoDia);
router.get('/:id',      getTiempo);
router.post('/',        postTiempo);
router.put('/:id',      putTiempo);
router.delete('/:id',   deleteTiempo);

export default router;