import { updates,removdes,listPost ,addPost} from '../src/controllers/product';
import { Router } from 'express';
import { checkAuth } from '../middlewares/checkAuth';
const router = Router();

router.get('/products', checkAuth, listPost);
router.put('/products/:id', checkAuth, updates);
router.post('/products', checkAuth,addPost);
router.delete('/products/:id', checkAuth, removdes);
// router.patch("/product/:id", checkAuth, update )

export default router;