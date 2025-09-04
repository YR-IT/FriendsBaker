export interface IProduct {
    _id: string;
    name: string;
    price: number;
    category: string;
    rating: number;
    image: string;
}

export interface ICategory {
    _id: string;
    name: string;
    image: string;
}

export const getProducts = async (): Promise<IProduct[]> => {
    const response = await fetch('https://friends-backend-u2ve.onrender.com/api/getproducts');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
};

