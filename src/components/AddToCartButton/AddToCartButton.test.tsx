import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { productSummaries } from '../../utils/testUtils';
import AddToCartButton from '.';

const product = productSummaries[0];
const btnText = 'Add To Cart';

test('AddToCartButton is in document', () => {
  const component = render(<AddToCartButton product={product} />);
  expect(component.container.querySelector('button')).toBeInTheDocument();
  expect(screen.getByText(btnText)).toBeInTheDocument();
});

test('Clicking the button calls the event handler once', () => {
  const mockHandler = jest.fn();
  const component = render(
    <AddToCartButton product={product} onAddToCart={mockHandler} />
  );
  const button = component.getByRole('button');
  fireEvent.click(button);
  expect(mockHandler.mock.calls).toHaveLength(1);
});
