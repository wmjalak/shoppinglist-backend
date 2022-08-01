import { Request, Response, NextFunction } from 'express';

import ShoppingList from '../models/shoppinglist.model';

const findAll = async (_: Request, res: Response, next: NextFunction) => {
    const shoppingLists = await ShoppingList.find({}).exec();
    res.send(shoppingLists);
};

const addShoppingList = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const newShoppingList = new ShoppingList(req.body);
    const result = await newShoppingList.save();
    res.send(result);
};

const deleteShoppingList = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const deletedShoppingList = await ShoppingList.findByIdAndDelete(
        req.params.id
    ).exec();

    res.send(deletedShoppingList);
};

const updateShoppingList = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const updatedShoppingList = await ShoppingList.findByIdAndUpdate(
        req.params.id,
        req.body
    ).exec();

    res.send(updatedShoppingList);
};

export default {
    findAll,
    addShoppingList,
    deleteShoppingList,
    updateShoppingList,
};
