import { updates,removdes,listPost ,addPost,list} from '../src/controllers/product';
import { Router } from 'express';
import { checkAuth } from '../middlewares/checkAuth';
const router = Router();
router.get('/products', checkAuth, list);

router.put('/product/:id', checkAuth, updates);
router.post('/products', checkAuth,addPost);
router.delete('/product/:id', checkAuth, removdes);
// router.patch("/product/:id", checkAuth, update )

export default router;