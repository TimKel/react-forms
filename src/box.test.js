import { render } from '@testing-library/react';
import Box from './Box';

test('renders without crashing', () => {
  render(<Box />);
  
});

it('matches snapshot', function () {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
})