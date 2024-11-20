import { Router } from 'express';

const router = Router();

router.use('/departments', departmentRouter);
router.use('/items', studentRouter)

export default router;
