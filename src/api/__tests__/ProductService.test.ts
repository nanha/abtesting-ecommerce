import * as API from '../';

test('get product data', async () => {
  const products = await API.fetchItems();

  expect(products.length).toBe(10);
});
