import React from 'react';
import { shallow } from 'enzyme';
import Timeline from './Timeline';

describe('Timeline', () => {
  it('should render', () => {
    const component = shallow(<Timeline debug />);
  
    expect(component).toMatchSnapshot();
  })
})