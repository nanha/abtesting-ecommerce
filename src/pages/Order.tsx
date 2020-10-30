// eslint-disable-next-line
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';

import styled from 'styled-components';
import { Table, Button, Image } from 'react-bootstrap';

import ABTest from '../libs/abtest';
import { RootState } from '../store/modules';
import TotalAmount from '../components/ToalAmount';

// a/b testing init.
ABTest.init();

const OrderPage: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  const ordered = useSelector((state: RootState) => state.Shopping.ordered);

  useEffect(() => {
    ABTest.track('order');

    return () => {
      dispatch({
        type: 'CHECKOUT_COMPLETE',
      });
    };
  }, [dispatch]);

  const GoToHome = () => {
    history.push('/');
  };

  return (
    <OrderContainer>
      <h2>주문 내역</h2>
      <hr />
      <Table hover>
        <thead>
          <tr>
            <th colSpan={2}>상품정보</th>
            <th>수량</th>
            <th>주문금액</th>
          </tr>
        </thead>
        <tbody>
          {ordered.map((product) => (
            <tr key={product.id}>
              <td>
                <Link to={`/view/${product.id}`}>
                  <Image
                    src={`../images/${product.imageUrl}`}
                    width="100"
                    height="100"
                    alt=""
                  />
                </Link>
              </td>
              <td>
                {product.name} in {product.color}
              </td>
              <td>
                <b>{product.q}</b>
              </td>
              <td>
                <b>${product.price * product.q}</b>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <hr />

      <TotalAmount products={ordered} />

      <Button size="lg" block variant="outline-primary" onClick={GoToHome}>
        쇼핑 계속하기
      </Button>
    </OrderContainer>
  );
};

export const OrderContainer = styled.div``;

export default OrderPage;
