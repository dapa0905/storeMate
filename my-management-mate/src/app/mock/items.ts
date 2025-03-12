import { Item } from '../model/item.model';
import { ItemCategory } from '../enum/category.enum';

export const ITEMS: Item[] = [
    {
    itemId: 1,
    itemName: 'printer',
    category: ItemCategory.OfficeSupplies,
    quantity: 10,
    price: 100,
    description: '이것은 전자제품입니다.',
    createdAt: new Date(),
    updateAt: new Date(),
    },

    {
    itemId: 2,
    itemName: 'notebook',
    category: ItemCategory.OfficeEquipment,
    quantity: 50,
    price: 30,
    description: '이것은 사무용품입니다.',
    createdAt: new Date(),
    updateAt: new Date(),
    },

    {
    itemId: 3,
    itemName: 'pen',
    category: ItemCategory.OfficeEquipment,
    quantity: 100,
    price: 3,
    description: '이것은 사무용품입니다.',
    createdAt: new Date(),
    updateAt: new Date(),
    },

    {
    itemId: 4,
    itemName: 'note',
    category: ItemCategory.OfficeEquipment,
    quantity: 200,
    price: 10,
    description: '이것은 사무용품입니다.',
    createdAt: new Date(),
    updateAt: new Date(),
    },
    
    {
    itemId: 5,
    itemName: 'waterMechine',
    category: ItemCategory.OfficeEquipment,
    quantity: 3,
    price: 1000,
    description: '이것은 정수기입니다.',
    createdAt: new Date(),
    updateAt: new Date(),
    },
    
    {
    itemId: 6,
    itemName: 'Fax',
    category: ItemCategory.OfficeEquipment,
    quantity: 2,
    price: 800,
    description: '이것은 팩스스입니다.',
    createdAt: new Date(),
    updateAt: new Date(),
    },

    {
    itemId: 7,
    itemName: "desk",
    category: ItemCategory.OfficeFurniture,
    quantity: 5,
    price: 300,
    description: "이것은 사무용 책상입니다.",
    createdAt: new Date(),
    updateAt: new Date(),
    },

    {
    itemId: 8,
    itemName: "chair",
    category: ItemCategory.OfficeFurniture,
    quantity: 10,
    price: 150,
    description: "이것은 사무용 의자입니다.",
    createdAt: new Date(),
    updateAt: new Date(),
    },

    {
    itemId: 9,
    itemName: "whiteboard",
    category: ItemCategory.OfficeSupplies,
    quantity: 4,
    price: 120,
    description: "이것은 회의실용 화이트보드입니다.",
    createdAt: new Date(),
    updateAt: new Date(),
    },

    {
    itemId: 10,
    itemName: "paperShredder",
    category: ItemCategory.SecurityPrivacy,
    quantity: 2,
    price: 500,
    description: "이것은 문서 세단기입니다.",
    createdAt: new Date(),
    updateAt: new Date(),
    },

    {
    itemId: 11,
    itemName: "filingCabinet",
    category: ItemCategory.StorageOrganization,
    quantity: 8,
    price: 250,
    description: "이것은 서류 정리용 캐비닛입니다.",
    createdAt: new Date(),
    updateAt: new Date(),
    },

    {
    itemId: 12,
    itemName: "projector",
    category: ItemCategory.OfficeEquipment,
    quantity: 3,
    price: 700,
    description: "이것은 회의용 프로젝터입니다.",
    createdAt: new Date(),
    updateAt: new Date(),
    },

    {
    itemId: 13,
    itemName: "mouse",
    category: ItemCategory.OfficeSupplies,
    quantity: 15,
    price: 25,
    description: "이것은 컴퓨터 마우스입니다.",
    createdAt: new Date(),
    updateAt: new Date(),
    },

    {
    itemId: 14,
    itemName: "keyboard",
    category: ItemCategory.OfficeSupplies,
    quantity: 10,
    price: 50,
    description: "이것은 컴퓨터 키보드입니다.",
    createdAt: new Date(),
    updateAt: new Date(),
    },

    {
    itemId: 15,
    itemName: "locker",
    category: ItemCategory.StorageOrganization,
    quantity: 6,
    price: 400,
    description: "이것은 개인물품 보관용 사물함입니다.",
    createdAt: new Date(),
    updateAt: new Date(),
    },
    
    {
    itemId: 16,
    itemName: "stickyNotes",
    category: ItemCategory.Stationery,
    quantity: 100,
    price: 5,
    description: "이것은 포스트잇입니다.",
    createdAt: new Date(),
    updateAt: new Date(),
    },
];
