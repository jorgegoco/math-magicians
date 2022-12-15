import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Calculator from '../../Components/Calculator';

describe('Calculator component test', () => {
  test('snapshot renders', () => {
    const calc = renderer
      .create(<Calculator />)
      .toJSON();
    expect(calc).toMatchSnapshot();
  });

  test('matches element', () => {
    render(<Calculator />);
    expect(screen.getByText(/math/)).toBeInTheDocument();
  });
});
