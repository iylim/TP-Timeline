import React, {Component, Fragment} from 'react';
import VerticalTimeline  from './Timeline';
import VerticalTimelineElement from './TimelineItem';
import { FontAwesomeIcon } from './utils/FontAwesome';
import rollercoaster from './images/rollercoaster.jpg';
import logo from './images/Talent-Path-logo.png';
import spaceRace from './images/space-race.jpg';

class TPTimeline extends React.Component {
  render() {
    return(
      <Fragment>
        <header>
          <img src={logo} alt='Talent Path Logo' />
          <h2>Timeline</h2>
        </header>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 28"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon="star-of-life"></FontAwesomeIcon>}
            >
            <h3 className="vertical-timeline-element-title">First Day!</h3>
            <h4 className="vertical-timeline-element-subtitle">Met the Cohort.</h4>
            <br />
            <img src={rollercoaster} alt="rollercoaster" width="450px" height="300px" />
            <p>
              Met the instructors and cohort. We built a ping pong rollercoaster out of paper and straws.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 29"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon="star-of-life"></FontAwesomeIcon>}
            >
            <h3 className="vertical-timeline-element-title">Leadership</h3>
            <h4 className="vertical-timeline-element-subtitle">What makes a great leader? < br />with Jeff Frey.</h4>
            <p>
              We shared our real life superpowers. Mine is I have an amazing memory. <br /> We did self SWOT analysis.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 30"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon="star-of-life"></FontAwesomeIcon>}
            >
            <h3 className="vertical-timeline-element-title">Web</h3>
            <h4 className="vertical-timeline-element-subtitle">What do we know about the web?</h4>
            <p>
              We learned different ways to serve a static site. <br /> Worked in groups to research web protocols, web servers and browser security.
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 31"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon="star-of-life"></FontAwesomeIcon>}
            >
            <h3 className="vertical-timeline-element-title">What do programmers do?</h3>
            <h4 className="vertical-timeline-element-subtitle">Specifically in the entertainment industry</h4>
            <br />
            <img src={spaceRace} alt="space race" width="450px" height="300px"/>
            <p>
              Research company job postings. What tech do they use?
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 1"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon="star-of-life"></FontAwesomeIcon>}
            >
            <h3 className="vertical-timeline-element-title">Disney Tour</h3>
            <p>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
    </Fragment>
    )
  }
}

export default TPTimeline;