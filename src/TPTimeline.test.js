import React from 'react';
import { shallow } from 'enzyme';
import TPTimeline from './TPTimeline';

describe('TPTimeline', () => {
  it('should render correctly without props', () => {
    const component = shallow(<TPTimeline />);
    expect(component).toMatchSnapshot();
  })
})
