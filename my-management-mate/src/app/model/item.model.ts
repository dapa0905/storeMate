import { ItemCategory } from "../enum/category.enum";

export class Item {
    public itemId: number;
    public itemName: string;
    public category: ItemCategory;
    public quantity: number;
    public price: number;
    public description?: string;
    public createdAt: Date;
    public updateAt: Date;

    constructor(
        itemId: number,
        itemName: string,
        category: ItemCategory,
        quantity: number,
        price: number,
        createdAt: Date,
        updateAt: Date,
        description?: string
    ) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.category = category;
        this.quantity = quantity;
        this.price = price;
        this.createdAt = createdAt;
        this.updateAt = updateAt;
        this.description = description;
    }
}
