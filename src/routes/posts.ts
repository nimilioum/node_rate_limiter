import { Router } from 'express';
const router = Router();
import rateLimit from '../middlewares/rateLimit';
import { list, create, detail, deleteOne, update } from '../controllers/blogController';


/* GET home page. */
router.get('/', list);
router.post('/',rateLimit(5, 30), create);
router.get('/:id', detail);
router.delete('/:id', deleteOne);
router.put('/:id', rateLimit(5, 30), update);

export default router;
