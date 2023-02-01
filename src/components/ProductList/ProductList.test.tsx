import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { testProducts } from '../../utils/testUtils';
import ProductList from '.';

test('ProductList empty state', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  render(<ProductList data={[]} />);
  expect(screen.getByText('No data')).toBeInTheDocument();
  expect(screen.getByText('0-0 of 0')).toBeInTheDocument();
});

test('ProductList should contain products', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  const total = testProducts.length;
  const component = render(<ProductList data={testProducts} />);
  expect(component.container.querySelectorAll('img').length).toBe(total);
  expect(screen.getByText(`1-${total} of ${total}`)).toBeInTheDocument();
});
