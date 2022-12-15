import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from '../../Components/Home';

describe('Home component test', () => {
  test('snapshot renders', () => {
    const home = renderer
      .create(<Home />)
      .toJSON();
    expect(home).toMatchSnapshot();
  });

  test('matches element', () => {
    render(<Home />);
    expect(screen.getByText(/Welcome to our page!/)).toBeInTheDocument();
  });
});
