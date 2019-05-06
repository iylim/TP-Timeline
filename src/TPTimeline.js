import React, {Component, Fragment} from 'react';
import VerticalTimeline  from './Timeline';
import VerticalTimelineElement from './TimelineItem';
import { FontAwesomeIcon } from './utils/FontAwesome';
import './index.css'

class TPTimeline extends Component {
  render() {
    return(
      <Fragment>
        <header>
          <img src='./images/Talent-Path-logo.png' alt='Talent Path Logo' />
          <h2>Track 3 Timeline</h2>
        </header>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Jan 28"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon='arrow-down' />}
            >
            <h3 className="vertical-timeline-element-title">First Day!</h3>
            <h4 className="vertical-timeline-element-subtitle">Met the Cohort.</h4>
            <br />
            <img src='./images/rollercoaster.jpg' alt="rollercoaster" width="450px" height="250px" />
            <p>
              Met the instructors and cohort. <br /> We had an icebreaker exercise to build a ping pong rollercoaster out of paper and straws.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Jan 29"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon="chalkboard-teacher" />}
            >
            <h3 className="vertical-timeline-element-title">Leadership.</h3>
            <h4 className="vertical-timeline-element-subtitle">What makes a great leader? with Jeff Frey.</h4>
            <p>
              We shared our real life superpowers. Mine is I have an amazing memory. <br /> We did self SWOT analysis.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Jan 30"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon="desktop" />}
            >
            <h3 className="vertical-timeline-element-title">World Wide Web.</h3>
            <h4 className="vertical-timeline-element-subtitle">What do we know about the web?</h4>
            <p>
              We learned different ways to serve a static site. <br /> 
              Worked in groups to research and present web protocols, web servers and browser security.
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Jan 31"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon="desktop" />}
            >
            <h3 className="vertical-timeline-element-title">What do programmers do?</h3>
            <h4 className="vertical-timeline-element-subtitle">Specifically in the entertainment industry.</h4>
            <br />
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ5xgyIjnUsABRF0zscGbgeUGUtXF2jhjlVGjexuVOkQMEZ2EW6LDBCnw21L99ypokFE_Zc0lrgOQii/embed?start=false&loop=false&delayms=3000" frameborder="0" width="460" height="290" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            <p>
              We researched company job postings. What tech do they use? <br />
              We presented as a group a unique game idea.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Feb 1"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon="walking" />}
            >
            <h3 className="vertical-timeline-element-title">Disney Tour!</h3>
            <h4 className="vertical-timeline-element-subtitle">Tour of broadcasting and main campus.</h4>
            <br />
            <img src='./images/disney.JPG' alt="disney" width="450px" height="270px"/>
            <p>
              Listen to a presentation on what Disney does, learned about their hiring direction and process. Saw how shows are broadcasted and had lunch at the cafe.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Feb 4"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'html5']} />}
            >
            <h3 className="vertical-timeline-element-title">HTML.</h3>
            <h4 className="vertical-timeline-element-subtitle">Coding begins.</h4>
            <p>
              We learned about HTML semantics and their benefits. <br />
              Git codealong portfolio page.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
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
            className="vertical-timeline-element"
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
            className="vertical-timeline-element"
            date="Feb 7"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'js-square']} />}
            >
            <h3 className="vertical-timeline-element-title">JavaScript.</h3>
            <h4 className="vertical-timeline-element-subtitle">Tools Setup.</h4>
            <p>
              We set up tools such as ESLint, snippets. We went over data structures and discussed Javascript in general. <br />
              Got some code practice with pair programming JS Cardio. 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
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
            className="vertical-timeline-element"
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
            className="vertical-timeline-element"
            date="Feb 12 - Feb 13"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon="clock" />}
            >
            <h3 className="vertical-timeline-element-title">Time Management</h3>
            <h4 className="vertical-timeline-element-subtitle">Real world experience in time management.</h4>
            <br />
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTLDi-vCvACY9C6g_ySulZ0l_4sA9PhljTbt9EVCFJTjuR-1llcXWOIadLIJeFrkxflmHD8hGc2_NJx/embed?start=false&loop=false&delayms=3000" frameborder="0" width="460" height="290" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            <p>
              We learned the importance of time management and asking questions through an exercise. We had to research one of four companies working in small groups to present to each other. The only guideline was that it was a 15-20min presentation to executives at the business and Talent Path. We had to include an overview, market segment, competition and opportunities for partnership.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Feb 14"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon="handshake" />}
            >
            <h3 className="vertical-timeline-element-title">The Genuent Team!</h3>
            <h4 className="vertical-timeline-element-subtitle">Met Candice and Mackeever.</h4>
            <p>
              We met the Genuent team that supports Talent Path. Candice works with corporate partners. Mackeever manages the region. <br /> We practiced asking questions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
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
            className="vertical-timeline-element"
            date="Feb 18"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon="code" />}
            >
            <h3 className="vertical-timeline-element-title">Finish Connect Four.</h3>
            <h4 className="vertical-timeline-element-subtitle">Modularity and Local Storage.</h4>
            <br />
            <a href='https://connect-four-app.netlify.com/' target='blank' alt='link to app'>
              <img src='./images/connect-four.png' alt="connect4" width="430px" height="200px" />
            </a>
            <p>
              Click image to play Connect Four. <br />
              Built with HTML, CSS, JS and hosted on Netlify.       
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Feb 19"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'js-square']} />}
            >
            <h3 className="vertical-timeline-element-title">Web Components.</h3>
            <h4 className="vertical-timeline-element-subtitle">Getting React-y.</h4>
            <p>
              We learned about web components in vanilla JS which helps make code modular. <br />
              We did a codealong to create a WYSIWYG editor. <br /> 
              Learned Andrew ❤s Wes Bos.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element "
            date="Feb 20"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon='desktop' />}
            >
            <h3 className="vertical-timeline-element-title">Project Pitches.</h3>
            <h4 className="vertical-timeline-element-subtitle">Movie tinder?</h4>
            <br />
            <a href="https://infograph.venngage.com/ps/1ITvWoYoljg/purple-checkered-social-media-presentation" target="blank" ><img src='./images/MovieMatchmaker.png' alt='movieMatchmaker' width="450px" height="250px" /> </a>
            <p>
              Click image to see presentation on Venngage. <br /> 
              We continued pair coding web components. <br /> 
              Pitched our project ideas. I presented an idea for a movie matchmaker.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Feb 21 - Feb 22"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon='code' />}
            >
            <h3 className="vertical-timeline-element-title">Team YaMovie!</h3>
            <h4 className="vertical-timeline-element-subtitle">Project work.</h4>
            <br />
            <img src='./images/YaMovie.png' alt='YaMovie logo' width="400px" height="100px" />
            <p>
              We met with our group and organized our projects on Github. Our team decided to rotate SCRUM master each week. Sam was appointed Github manager/documenter. Developed our branding. 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
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
            className="vertical-timeline-element"
            date="Feb 27"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'node-js']} />}
            >
            <h3 className="vertical-timeline-element-title">Express.</h3>
            <h4 className="vertical-timeline-element-subtitle">Restful API, HTTP verbs, CRUD.</h4>
            <p>
              Learned Express used with Node. We learned semantic API designs and how HTTP verbs correlate to a CRUD operation.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Mar 1"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon='desktop' />}
            >
            <h3 className="vertical-timeline-element-title">Project Presentations.</h3>
            <h4 className="vertical-timeline-element-subtitle">First sprint completed.</h4>
            <p>
              We completed our first sprint working for a few hours each day. By this week, we had our branding: logo, color palette, and Lloyd. Our working application included the home, browse and about page.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
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
            className="vertical-timeline-element"
            date="Mar 5"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'react']} />}
            >
            <h3 className="vertical-timeline-element-title">React.</h3>
            <h4 className="vertical-timeline-element-subtitle">Postie codealong.</h4>
            <p>
              First day of React. We covered React basics, such as state, props, actions up/data down, and immutability. <br />
              Started Postie, a single page application with users and posts.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Mar 6 - Mar 8"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon='code' />}
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
            className="vertical-timeline-element"
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
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Mar 12"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'react']} />}
            >
            <h3 className="vertical-timeline-element-title">React cont.</h3>
            <h4 className="vertical-timeline-element-subtitle">PropTypes and Firebase.</h4>
            <p>
              We learned about PropTypes for React and benefits. PropTypes provide extra checks. <br />
              We also learned how to store our data on Google Firebase.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Mar 15"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon='walking' />}
            >
            <h3 className="vertical-timeline-element-title">Blizzard Tour.</h3>
            <h4 className="vertical-timeline-element-subtitle">Main campus, StarCraft, and tools.</h4>
            <br />
            <img src='./images/blizzard.jpg' alt="blizzard" width="450px" height="300px"/>
            <p>
              We had a presentation from the tools team on some of the application they created. We also got a look at what game teams do. 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Mar 20 - Mar 21"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fab', 'react']} />}
            >
            <h3 className="vertical-timeline-element-title">Redux.</h3>
            <h4 className="vertical-timeline-element-subtitle">Trello World.</h4>
            <p>
              We created a Trello clone and implemented redux for state management.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Mar 22"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon='walking' />}
            >
            <h3 className="vertical-timeline-element-title">Volunteering.</h3>
            <h4 className="vertical-timeline-element-subtitle">Food Bank.</h4>
            <br />
            <img src="./images/food-bank.jpg" alt="foodbank" width="430px" height="290px" />
            <p>
              We volunteered at the LA food bank. We assembled 2445 packages for children and the elderly.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Mar 26"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon='database' />}
            >
            <h3 className="vertical-timeline-element-title">MongoDB.</h3>
            <h4 className="vertical-timeline-element-subtitle">Atlas, Compass and Mongoose.</h4>
            <p>
              We setup to use MongoDB with Atlas and Compass. Atlas is a cloud database and Compass provides us a way to interact with our database. Hooked up our application to Mongo database with Mongoose.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Mar 29"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon='handshake' />}
            >
            <h3 className="vertical-timeline-element-title">MotorTrend.</h3>
            <h4 className="vertical-timeline-element-subtitle">First client presentation.</h4>
            <br />
            <iframe src="https://drive.google.com/file/d/15IKmPaICAO6KeIEWc_eJ1c6YYg3E2bsC/preview" width="460" height="290" />
            <p>
              We created a commercial product pitch for MotorTrend. A c.A.R. Spotter app. <br />
              We met with MotorTrend and shared what we have been working on. 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element "
            date="Apr 2"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon='key' />}
            >
            <h3 className="vertical-timeline-element-title">Authentication.</h3>
            <h4 className="vertical-timeline-element-subtitle">JSON web tokens.</h4>
            <p>
              We created user login in our message board app. We encrypted user passwords to be stored in our database. We used passport middleware to issue JSON tokens.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element "
            date="Apr 3"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon='handshake' />}
            >
            <h3 className="vertical-timeline-element-title">Cornerstone on Demand.</h3>
            <h4 className="vertical-timeline-element-subtitle">Cornerstone visit.</h4>
            <p>
              We presented our application to Cornerstone on Demand and recieved feedback. They shared what other positions available besides software engineers such as project managers and designers. 
            </p>
          </VerticalTimelineElement>

          {/* april 5 escape room */}
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Apr 8"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon='handshake' />}
            >
            <h3 className="vertical-timeline-element-title">Sysco.</h3>
            <h4 className="vertical-timeline-element-subtitle">Sysco came out from Texas to visit.</h4>
            <p>
              We had a visit from Sysco and we were able to share our presentation. They provided feedback, told us about the company, shared their experiences and what it is like to work there.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Apr 8 - Apr 12"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon='chalkboard-teacher' />}
            >
            <h3 className="vertical-timeline-element-title">Interview Prep.</h3>
            <h4 className="vertical-timeline-element-subtitle">Code challenges and mock interviews.</h4>
            <p>
              We worked on various code challenges and mock interviews that covered computer science fundamentals. <br /> 
              We did one on one code reviews with Andrew. 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Apr 15"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon='handshake' />}
            >
            <h3 className="vertical-timeline-element-title">Magenic.</h3>
            <h4 className="vertical-timeline-element-subtitle">Magenic visited.</h4>
            <p>
              We had a visitor from Magenic that shared what their company does. We shared our presentation and recieved feedback.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Apr 17"
            animate={true}
            iconStyle={{ background: '#FA7268', color: '#fff' }}
            icon={<FontAwesomeIcon icon='graduation-cap' />}
            >
            <h3 className="vertical-timeline-element-title">Graduation.</h3>
            <h4 className="vertical-timeline-element-subtitle">Beta launch of YaMovie.</h4>
            <br />
            <a href="https://yamovie.me" target='blank'>
            <img src='https://i.imgur.com/rhdXkTz.png?1' alt="YaMovie" width="430px" height="220px" />
            </a>
            <p>
              Click image to check out YaMovie. <br /> Last day of training! <br /> 
              We presented full working version of our application we have been working on over the last few weeks.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
    </Fragment>
    )
  }
}

export default TPTimeline;