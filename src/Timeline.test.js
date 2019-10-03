import React from 'react';
import { shallow } from 'enzyme';
import Timeline from './Timeline';

describe('Timeline', () => {
  it('should render correctly in Debug', () => {
    const component = shallow(<Timeline debug />);
    expect(component).toMatchSnapshot();
  })
})