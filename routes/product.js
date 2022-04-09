import { updates,removdes   ,addPost,list,getProductById, post, search} from '../src/controllers/product';
import { Router } from 'express';

import { userById } from "../src/controllers/user";
import { requireSignin,isAuth,isAdmin ,checkAuth} from '../middlewares/checkAuth';
const router = Router();
router.get('/products', checkAuth, list)
router.get('/products/:id', checkAuth, getProductById)
router.put('/products/:id', checkAuth, updates)
router.post('/products/:userId', requireSignin, isAuth, isAdmin, post)
router.post('/products', checkAuth,addPost)
router.delete('/products/:id', checkAuth, removdes)
router.post('/search',search);
// router.patch("/product/:id", checkAuth, update )

router.param('userId', userById)    
export default router;