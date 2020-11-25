import * as actions from './actions';

describe('Shopping Action Creators', () => {
  it('SET_PRODUCT_ITEM', () => {
    const products: ProductType[] = [];
    expect(actions.setProductItem(products)).toEqual({
      type: 'SET_PRODUCT_ITEM',
      payload: [],
    });
  });

  it('ADD_ITEM', () => {
    expect(actions.addItem(1)).toEqual({
      type: 'ADD_ITEM',
      payload: 1,
    });
  });

  it('INCREASE_ITEM', () => {
    expect(actions.increaseItem(1)).toEqual({
      type: 'INCREASE_ITEM',
      payload: 1,
    });
  });

  it('DECREASE_ITEM', () => {
    expect(actions.decreaseItem(1)).toEqual({
      type: 'DECREASE_ITEM',
      payload: 1,
    });
  });

  it('REMOVE_ITEM', () => {
    expect(actions.removeItem(1)).toEqual({
      type: 'REMOVE_ITEM',
      payload: 1,
    });
  });

  it('SELECT_CHECKOUT_ITEM', () => {
    expect(actions.selectCheckoutItem(1)).toEqual({
      type: 'SELECT_CHECKOUT_ITEM',
      payload: 1,
    });
  });

  it('CHECKOUT_SINGLE_ITEM', () => {
    expect(actions.checkoutSingleItem(1)).toEqual({
      type: 'CHECKOUT_SINGLE_ITEM',
      payload: 1,
    });
  });

  it('CHECKOUT_ITEMS', () => {
    expect(actions.checkoutItems()).toEqual({
      type: 'CHECKOUT_ITEMS',
    });
  });

  it('CHECKOUT_COMPLETE', () => {
    expect(actions.checkoutComplete()).toEqual({
      type: 'CHECKOUT_COMPLETE',
    });
  });
});