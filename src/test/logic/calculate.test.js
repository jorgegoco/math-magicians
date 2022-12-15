import calculate from '../../logic/calculate';

describe('Tests for the calculate function', () => {
  test('Test normal operation', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    let value = calculate(obj, '4');
    value = calculate(value, '+');
    value = calculate(value, '3');
    value = calculate(value, '-');
    value = calculate(value, '1');
    value = calculate(value, 'x');
    value = calculate(value, '2');
    value = calculate(value, '÷');
    value = calculate(value, '6');
    value = calculate(value, '=');
    expect(value.total).toBe('2');
  });
});
