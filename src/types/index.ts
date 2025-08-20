export type TProduct = {
  _id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  quantity: number;
};

export type TOrder = {
  _id: string;
  address: string;
  price: number;
  delivered: boolean;
  products: {
    product: string;
    quantity: number;
  }[];
};
