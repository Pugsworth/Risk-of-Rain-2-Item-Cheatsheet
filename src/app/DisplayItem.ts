import { ItemSchema } from "./itemschema";

export class DisplayItem
{
    display: boolean = true;
    item!: ItemSchema;


    constructor(_item: ItemSchema)
    {
        this.item = _item;
    }
}