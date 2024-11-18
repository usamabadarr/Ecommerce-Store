import Department from '../models/Department.js'
import { Request, Response } from 'express';

export const getDepartments = async (_req: Request, res: Response) => {
    try{
        const departments = await Department.find();
        res.json(departments);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getSingleDepartment = async (req: Request, res: Response) => {
    try {
        const department = await Department.findOne({ _id: req.params.departmentId })
        .select('-__v')
        .populate('items');

    if (!department) {
        res.status(404).json({ message: 'No Department with that ID' })
    } else {
        res.json(department);
    }
    } catch (err) {
        res.status(500).json(err);
    }
}

export const addDepartment = async (req: Request, res: Response) => {
    try {
        const dbDeptData = await Department.create(req.body);
        res.json(dbDeptData);
    } catch (err) {
        res.status(500).json(err)
    }
}
