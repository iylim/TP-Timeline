import React from 'react';
import { shallow } from 'enzyme';
import Timeline from './Timeline';

describe('Timeline', () => {
  it('should render correctly without props', () => {
  const defaultProps =  {
  id: '',
  children: '',
  className: '',
  icon: null,
  iconStyle: null,
  style: null,
  date: '',
  position: '',
  iconOnClick: null,
  visibilitySensorProps: { partialVisibility: true, offset: { bottom: 80 } },
  }
    const component = shallow(<Timeline children={defaultProps.children} />);
    expect(component).toMatchSnapshot();
  })

  
})