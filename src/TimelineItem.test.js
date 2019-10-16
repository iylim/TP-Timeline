import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from './utils/FontAwesome';
import VerticalTimelineElement from './TimelineItem';
import VisibilitySensor from 'react-visibility-sensor';

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


describe('Visibility Sensor', () => {
  it('scroll should toggle component visible', () => {
    const onChangeMock = jest.fn();
    const component = shallow(<VerticalTimelineElement />);
    const sensor =  component.find(<VisibilitySensor onChange={onChangeMock} />);
    sensor.simulate('change');
    expect(onChangeMock).toBeCalled();
    component.unmount();   
  });
});