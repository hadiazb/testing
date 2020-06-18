import React from 'react';
import { mount, shallow } from 'enzyme';
import ProvideMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('<Product/>', () => {
  test('Render del componente', () => {
    const product = shallow(
      <ProvideMock>
        <Product />
      </ProvideMock>
    );
    expect(product.length).toEqual(1);
  });
  test('Comprobar el boton de comprar', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProvideMock>
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProvideMock>
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
