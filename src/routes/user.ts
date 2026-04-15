import { Router } from 'express';
import { postController } from '../controllers/userController';

const router = Router();

router.get('/', postController.getAll);
router.post('/', postController.create);
router.put('/:id', postController.update);
router.delete('/:id', postController.delete);

export default router;