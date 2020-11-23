import ProductData from './ProductData.json';

export const ProductService = (): Promise<ProductType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = ProductData.data.map((e) => {
        return { ...e, q: 1 };
      });

      resolve(results);
    }, 500);
  });
};
