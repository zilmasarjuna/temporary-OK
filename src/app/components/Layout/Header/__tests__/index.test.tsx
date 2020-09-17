import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Wrapper } from '../index';

describe('<Header />', () => {
  it('Will be hide in mobile device', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toHaveStyleRule('display', 'none', {
      media: '(max-width: 960px)',
    });
  });
});
