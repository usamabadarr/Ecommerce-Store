import { Router } from 'express';
const router = Router();
 
import { 
    getItems, 
    getSingleItem, 
    getAllFeaturedItems, 
    getFeaturedItemsByDept, 
    addItem, 
    deleteItem 
} from '../../controllers/itemController.js'

router.route('/').get(getItems).post(addItem);

router.route('/:itemId').get(getSingleItem);

router.route('/:featuredItems').get(getAllFeaturedItems)

router.route('/:featuredItemsByDept').get(getFeaturedItemsByDept)

router.route('/:itemId').get(getSingleItem).delete(deleteItem);

export { router as itemRouter };
