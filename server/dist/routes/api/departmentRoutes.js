import { Router } from 'express';
const router = Router();
import { getDepartments, getSingleDepartment, addDepartment } from '../../controllers/departmentController.js';
router.route('/').get(getDepartments).post(addDepartment);
router.route('/:departmentID').get(getSingleDepartment);
export default router;
