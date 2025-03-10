import { Item } from '../model/item.model';
import { ItemCategory } from '../enum/category.enum';

export const ITEMS: Item[] = [
    {
    itemId: 1,
    itemName: '용품1',
    category: ItemCategory.OfficeSupplies,
    quantity: 10,
    price: 100,
    description: '이것은 전자제품입니다.',
    createdAt: new Date(),
    updateAt: new Date(),
    },

    {
    itemId: 2,
    itemName: '용품2',
    category: ItemCategory.OfficeEquipment,
    quantity: 50,
    price: 30,
    description: '이것은 사무용품입니다.',
    createdAt: new Date(),
    updateAt: new Date(),
    },
];
