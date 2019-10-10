import React from 'react';
import { shallow } from 'enzyme';
import TPTimeline from './TPTimeline';

describe('TPTimeline', () => {
  it('should render correctly in Debug', () => {
    const component = shallow(<TPTimeline debug />);
    expect(component).toMatchSnapshot();
  })
})
