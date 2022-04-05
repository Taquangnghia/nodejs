import { updates,removdes,listPost ,addPost,list,getProductById} from '../src/controllers/product';
import { Router } from 'express';
import { checkAuth } from '../middlewares/checkAuth';
const router = Router();
router.get('/products', checkAuth, list);
router.get('/products/:id', checkAuth, getProductById)
router.put('/products/:id', checkAuth, updates);
router.post('/products', checkAuth,addPost);
router.delete('/products/:id', checkAuth, removdes);
// router.patch("/product/:id", checkAuth, update )

export default router;