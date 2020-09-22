import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from 'enzyme';

import SectionStore from '../SectionStore';

describe('<SectionStore />', () => {
  it('render title', () => {
    const wrapper = render(
      <MemoryRouter>
        <SectionStore />
      </MemoryRouter>,
    );
    expect(wrapper.find('h2').text()).toEqual('Toko Terdekat di Lokasi Anda');
  });
});
