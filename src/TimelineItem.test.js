import React from 'react';
import { shallow } from 'enzyme';
import VerticalTimelineElement from './TimelineItem';
import { FontAwesomeIcon } from './utils/FontAwesome';

describe('VerticalTimelineElement', () => {
  it('should render correctly without props', () => {
    const component = shallow(<VerticalTimelineElement/>);
    expect(component).toMatchSnapshot();
  })

  it('should render date', () => {
    const date = 'Oct 10';
    const component = shallow(<VerticalTimelineElement date={date} />);
    expect(component).toMatchSnapshot();
  })

  it('should render icon with correct styles',() => {
    const icon = <FontAwesomeIcon icon={['fab', 'node-js']} />;
    const iconStyle = { background: '#FA7268', color: '#fff' };
    const component = shallow(<VerticalTimelineElement icon={icon} iconStyle={iconStyle} />);
    expect(component).toMatchSnapshot();
  })
})