import Department from "../models/Department.js";
import Item from "../models/Item.js";
import { Request, Response } from 'express';

export const getItems = async (_req: Request, res: Response) => {
    try {
        const items = await Item.find().populate('department');
        res.json(items);

    } catch (err) {
        res.status(500).json(err);
    }
}

export const getSingleItem = async (req: Request, res: Response) => {
    const { itemId } = req.params;
    try {
        const items = await Item.findById(itemId)
            .select('-__v')
            .populate('department');

        if (!items) {
            res.status(404).json({ message: 'No Items in that Department' })
        } else {
            res.json(items);
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getAllFeaturedItems = async (_req: Request, res: Response) => {
    try {
        const items = await Item.find({ featured: true })
            .populate('departments')

        if (!items) {
            res.status(404).json({ message: 'No Featured Items' })
        } else {
            res.json(items);
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

export const getFeaturedItemsByDept = async (req: Request, res: Response) => {

    try {
        const items = await Item.find({department: req.params.departmentId, featured: true })
            .select('-__v')
            .populate('department')
        
        if (!items) {
            res.status(404).json({ message: 'No Featured Items found in that Department' })
        } else {
            res.json(items);
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

export const addItem = async (req: Request, res: Response) => {
    try {
        const item = await Item.create(req.body);
        res.json(item);
    } catch (err) {
        res.status(500).json(err)
    }
}

export const deleteItem = async (req: Request, res: Response) => {
    try {
        const item = await Item.findOneAndDelete({ _id: req.params.itemId })

        if (!item) {
            return res.status(404).json({ message: 'There is no Item to Delete'})
        }

        const department = await Department.findOneAndUpdate(
            { items: req.params.itemId },
            { $pull: { items: req.params.itemId } },
            { new: true }
        );

        if (!department) {
            return res.status(404).json({
                message: 'Item deleted, but no Department found',
            });
        }

        return res.json({ message: 'Item successfully deleted' });
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}
