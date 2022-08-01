import express from 'express';
import controller from '../../controllers/shoppinglist.controller';
const router = express.Router();

router.get('/', controller.findAll);
router.post('/', controller.addShoppingList);
router.put('/:id', controller.updateShoppingList);
router.delete('/:id', controller.deleteShoppingList);

export default router;
