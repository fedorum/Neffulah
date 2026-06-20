export interface Folder {
    id: number;
    name: string;
    parent: string;
}

export interface Product {
    id: number;
    name: string;
    path: string;
    category: string;
    parent: string;
}
