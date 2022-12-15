import renderer from 'react-test-renderer';
import Quote from '../../Components/Quote';

describe('Quote component test', () => {
  test('snapshot renders', () => {
    const quote = renderer
      .create(<Quote />)
      .toJSON();
    expect(quote).toMatchSnapshot();
  });
});
