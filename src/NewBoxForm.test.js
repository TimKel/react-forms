import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('renders without crashing', () => {
  render(<NewBoxForm />);
  
});

it('matches snapshot', function () {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
})