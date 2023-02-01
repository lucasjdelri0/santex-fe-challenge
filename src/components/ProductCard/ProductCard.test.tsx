import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { productSummaries } from '../../utils/testUtils';
import ProductCard from '.';

test('ProductCard is rendering product info', () => {
  const product = productSummaries[0];
  const { name, price } = product;
  const component = render(<ProductCard product={product} />);
  expect(screen.getByText(name)).toBeInTheDocument();
  expect(screen.getByText(`$ ${price.toLocaleString()}`)).toBeInTheDocument();
  expect(component.container.querySelector('img')).toBeInTheDocument();
});
