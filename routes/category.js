import  {Router} from 'express';
import { create,read,list,remove,update } from '../src/controllers/category';

const router =Router();
router.post("/category", create);
router.get("/categories", list);
router.get("/category/:id", read);
router.delete("/category/:id", remove);
router.put("/category/:id", update)
export default router;    