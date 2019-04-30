import React, {Component, Fragment} from 'react';
import VerticalTimeline  from './Timeline';
import VerticalTimelineElement from './TimelineItem';
import { FontAwesomeIcon } from './utils/FontAwesome';
import rollercoaster from './images/rollercoaster.jpg';
import logo from './images/Talent-Path-logo.png';
import disney from './images/disney.JPG';
import connectFour from './images/connect-four.png'
import movieMatchmaker from './images/MovieMatchmaker.png';
import yaMovie from './images/YaMovie.png';

class TPTimeline extends Component {
  render() {
    return(
      <Fragment>
        <header>
          <img src={logo} alt='Talent Path Logo' />
          <h2>Track 3 Timeline</h2>
        </header>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 28"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon='arrow-down' />}
            >
            <h3 className="vertical-timeline-element-title">First Day!</h3>
            <h4 className="vertical-timeline-element-subtitle">Met the Cohort.</h4>
            <br />
            <img src={rollercoaster} alt="rollercoaster" width="450px" height="250px" />
            <p>
              Met the instructors and cohort. We built a ping pong rollercoaster out of paper and straws.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 29"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon="chalkboard-teacher" />}
            >
            <h3 className="vertical-timeline-element-title">Leadership.</h3>
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
            icon={<FontAwesomeIcon icon="desktop" />}
            >
            <h3 className="vertical-timeline-element-title">World Wide Web.</h3>
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
            icon={<FontAwesomeIcon icon="desktop" />}
            >
            <h3 className="vertical-timeline-element-title">What do programmers do?</h3>
            <h4 className="vertical-timeline-element-subtitle">Specifically in the entertainment industry</h4>
            <br />
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ5xgyIjnUsABRF0zscGbgeUGUtXF2jhjlVGjexuVOkQMEZ2EW6LDBCnw21L99ypokFE_Zc0lrgOQii/embed?start=false&loop=false&delayms=3000" frameborder="0" width="460" height="290" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            <p>
              Research company job postings. What tech do they use?<br />
              We pitched a unique game idea.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 1"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon="walking" />}
            >
            <h3 className="vertical-timeline-element-title">Disney Tour!</h3>
            <h4 className="vertical-timeline-element-subtitle">Tour of broadcasting and main campus.</h4>
            <br />
            <img src={disney} alt="disney" width="450px" height="270px"/>
            <p>
              Listen to a presentation on what Disney does, learned about their hiring direction and process. Saw how shows are broadcasted and had lunch at the cafe.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 4"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'html5']} />}
            >
            <h3 className="vertical-timeline-element-title">HTML.</h3>
            <h4 className="vertical-timeline-element-subtitle">Coding begins.</h4>
            <p>
              We learned about HTML semantics and their benefits. <br />
              Git codealong.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 5"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'css3-alt']} />}
            >
            <h3 className="vertical-timeline-element-title">CSS.</h3>
            <h4 className="vertical-timeline-element-subtitle">Intro to CSS.</h4>
            <p>
              Link CSS file into HTML. Selectors and Pseudo-classes.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 6"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'css3-alt']} />}
            >
            <h3 className="vertical-timeline-element-title">Advance Design.</h3>
            <h4 className="vertical-timeline-element-subtitle">Design concepts and advance CSS.</h4>
            <p>
              We learn about design concepts. Hierarchy and Typography. Responsive design. CSS grid and animation.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 7"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'js-square']} />}
            >
            <h3 className="vertical-timeline-element-title">JavaScript.</h3>
            <h4 className="vertical-timeline-element-subtitle">Tools Setup.</h4>
            <p>
              We set up tools such as ESLint, snippets. We went over data structures and discussed Javascript in general.
              Got some code practice with pair programming JS Cardio. 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 8"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'js-square']} />}
            >
            <h3 className="vertical-timeline-element-title">JavaScript cont.</h3>
            <h4 className="vertical-timeline-element-subtitle">Create Connect Four App.</h4>
            <p>
              We began creating a Connect Four application using HTML, CSS and JavaScript.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 11"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon="chalkboard-teacher" />}
            >
            <h3 className="vertical-timeline-element-title">Consulting 101</h3>
            <h4 className="vertical-timeline-element-subtitle">Met Julie.</h4>
            <p>
              We practice presentations. Learned about Storytelling and Professionalism. Learned some consulting terms as well.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 12 - Feb 13"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon="clock" />}
            >
            <h3 className="vertical-timeline-element-title">Time Management</h3>
            <h4 className="vertical-timeline-element-subtitle">Real world experience in time management.</h4>
            <br />
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTLDi-vCvACY9C6g_ySulZ0l_4sA9PhljTbt9EVCFJTjuR-1llcXWOIadLIJeFrkxflmHD8hGc2_NJx/embed?start=false&loop=false&delayms=3000" frameborder="0" width="465" height="290" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            <p>
              We learned the importance of time management and asking questions through an exercise. We had to research one of four companies working in small groups to present to each other. The only guideline was that we had to 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 14"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon="handshake" />}
            >
            <h3 className="vertical-timeline-element-title">The Genuent Team!</h3>
            <h4 className="vertical-timeline-element-subtitle">Met Candice and Mackeever.</h4>
            <p>
              We met the Genuent team that supports Talent Path. Candice works with corporate partners. Mackeever manages the region. We practiced asking questions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 15"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon="code-branch" />}
            >
            <h3 className="vertical-timeline-element-title">What is Agile?</h3>
            <h4 className="vertical-timeline-element-subtitle">Agile as SCRUM and Kanban.</h4>
            <p>
              We learned about the agile process. We were introduced to Github projects to implement Agile. <br />
              We also met Ryan Craig.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 18"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon="code" />}
            >
            <h3 className="vertical-timeline-element-title">Finish Connect Four.</h3>
            <h4 className="vertical-timeline-element-subtitle">Modularity and Local Storage.</h4>
            <br />
            <a href='https://connect-four-app.netlify.com/' target='blank' alt='link to app'>
              <img src={connectFour} alt="connect4" width="450px" height="200px" />
            </a>
            <p>
              Click image to play. Built with HTML, CSS, JS and hosted on Netlify.       
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 19"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'js-square']} />}
            >
            <h3 className="vertical-timeline-element-title">Web Components.</h3>
            <h4 className="vertical-timeline-element-subtitle">Getting React-y.</h4>
            <p>
              We learned about web components in vanilla JS. Make code modular. Learned Andrew ❤s Wes Bos.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 20"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'js-square']} />}
            >
            <h3 className="vertical-timeline-element-title">Project Pitches.</h3>
            <h4 className="vertical-timeline-element-subtitle">Movie tinder?</h4>
            <br />
            <a href="https://infograph.venngage.com/view/27ed5d21-c036-45eb-a0d9-f207433f4e30" target="blank" ><img src={movieMatchmaker} alt='movieMatchmaker' width="450px" height="250px" /> </a>
            <p>
              Click image to see presentation on Venngage. <br /> 
              We continued pair coding web components. Pitched our project ideas. I presented an idea for a movie matchmaker.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 21 - Feb 22"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'js-square']} />}
            >
            <h3 className="vertical-timeline-element-title">Team YaMovie!</h3>
            <h4 className="vertical-timeline-element-subtitle">Project work.</h4>
            <br />
            <img src={yaMovie} alt='YaMovie logo' width="430px" height="100px" />
            <p>
              We met with our group and organized our projects on Github. We had a rotating SCRUM master each week. Sam was appointed Github manager/documenter. Developed our branding. 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 25 - Feb 26"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'node-js']} />}
            >
            <h3 className="vertical-timeline-element-title">Node and Asynchronous JS.</h3>
            <h4 className="vertical-timeline-element-subtitle">Callback, Promises, Async/Await.</h4>
            <p>
              We learned about callbacks, promises, and async/await by refactoring code. Callbacks are the old way to do things, promises are good but async/await is life-changing.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 27"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'node-js']} />}
            >
            <h3 className="vertical-timeline-element-title">Express.</h3>
            <h4 className="vertical-timeline-element-subtitle">Restful API, HTTP verbs, CRUD.</h4>
            <p>
              Learned Express used with Node. We learned how HTTP verbs correlate to a CRUD operation.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 1"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'node-js']} />}
            >
            <h3 className="vertical-timeline-element-title">Project Presentations.</h3>
            <h4 className="vertical-timeline-element-subtitle">First sprint completed.</h4>
            <p>
              We completed our first sprint working for a few hours each day. By this week, we had our branding: logo, color palette, and Lloyd. Our working application included the browse and about page.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 4"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'node-js']} />}
            >
            <h3 className="vertical-timeline-element-title">Consuming APIs.</h3>
            <h4 className="vertical-timeline-element-subtitle">Message board app.</h4>
            <p>
              We practiced consuming APIs with a message board application. We hosted the comments on Heroku to be consumed.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 5"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'react']} />}
            >
            <h3 className="vertical-timeline-element-title">React.</h3>
            <h4 className="vertical-timeline-element-subtitle">Postie codealong.</h4>
            <p>
              First day of React. Single page application with users and posts.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 6 - Mar 8"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'react']} />}
            >
            <h3 className="vertical-timeline-element-title">Pokemon Teambuilder.</h3>
            <h4 className="vertical-timeline-element-subtitle">Extreme programming.</h4>
            <br />
            <a href="https://pokemon-teambuilder.netlify.com/" target='blank'>
            <img src='https://i.imgur.com/l9aCuHC.png?1' alt="pokemon team-builder" width="450px" height="220px" />
            </a>
            <p>
              Click image to check out the app on Netlify. <br />
              Created an application to build a pokemon team of 6. Using the PokeAPI hosted database on Firebase. React, Node and Express.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 11"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'react']} />}
            >
            <h3 className="vertical-timeline-element-title">Routing.</h3>
            <h4 className="vertical-timeline-element-subtitle">Postie routes.</h4>
            <p>
              Implemented React router in our Postie applications. Created routes for all posts, a single post, and users.
            </p>
          </VerticalTimelineElement>

          {/* connect four application https://connect-four-app.netlify.com/ */}
        </VerticalTimeline>
    </Fragment>
    )
  }
}

export default TPTimeline;