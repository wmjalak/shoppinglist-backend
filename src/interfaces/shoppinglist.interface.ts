import { Document } from 'mongoose';

export interface IShoppingList extends Document {
    name: string;
    ownerId: string;
}
