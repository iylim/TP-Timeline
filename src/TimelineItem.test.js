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


// describe('Visibility Sensor', () => {
//   it('button click should toggle component', () => {
//     function onVisibilitySensorChange(isVisible) {
//       if (isVisible) {
//         this.setState({ visible: true });
//       }
//     };
//     const isVisible = false;
//     const component = shallow(<VisibilitySensor onChange={onVisibilitySensorChange} isVisible={isVisible} />);
//     window.scrollTo(5, 1000);

//     expect(onVisibilitySensorChange).toHaveBeenCalled();
//   });
// });