import operate from '../../logic/operate';

describe('Tests for the operate function', () => {
  test('Test "+" operation', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });

  test('Test "-" operation', () => {
    expect(operate(2, 3, '-')).toBe('-1');
  });

  test('Test "÷" operation with a denominator of "0"', () => {
    expect(operate(2, 0, '÷')).toBe('Can\'t divide by 0.');
  });
});
