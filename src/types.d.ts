export type ItemsType = {
    id: number;
    name: string;
    image: string;
    price: number;
    count: number;
}

export type ItemButtonType = {
    item: ItemsType;
    key: number;
    addItem: (id: number) => void;
}

export type orderedItemsType = {
    items: ItemsType[];
    deleteItem: (id: number) => void;
}