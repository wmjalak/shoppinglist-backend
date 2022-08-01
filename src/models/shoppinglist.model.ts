import { Schema, model } from 'mongoose';

import { IShoppingList } from '../interfaces/shoppinglist.interface';

export const ShoppingListSchema = new Schema(
    {
        name: { type: String, required: [true, 'Field is required'] },
        ownerId: { type: String },
    },
    { versionKey: false }
);

const ShoppingList = model<IShoppingList>('ShoppingList', ShoppingListSchema);

export default ShoppingList;
