import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../../Components/Calculator';

describe('Calculator component test', () => {
  test('snapshot renders', () => {
    const calc = renderer
      .create(<Calculator />)
      .toJSON();
    expect(calc).toMatchSnapshot();
  });

  test('user interaction', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('testResult')).toHaveTextContent(/3/i);
  });

  test('matches element', () => {
    render(<Calculator />);
    expect(screen.getByText(/math/)).toBeInTheDocument();
  });
});
