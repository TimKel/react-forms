import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  
});

it('matches snapshot', function () {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
})
