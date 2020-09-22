import React from 'react';
import { shallow } from 'enzyme';

import Logo from '../Logo';

describe('<Logo /> in Card Merchant', () => {
  it('has a image', () => {
    const wrapper = shallow(<Logo />);
    const img = wrapper.find('img');
    expect(img).toHaveLength(1);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
