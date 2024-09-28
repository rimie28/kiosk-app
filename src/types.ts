export type ItemsType = {
    name: string;
    image: string;
    price: number;
    count: number;
}

export type ItemButtonType = {
    item: ItemsType;
    key: number;
    addItem: (name: string) => void;
}