import { library, config, findIconDefinition, icon } from '@fortawesome/fontawesome-svg-core';
import { faClock, faWalking, faDesktop, faChalkboardTeacher, faArrowDown, faCodeBranch, faHandshake, faCode, faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


config.autoAddCss = false
library.add( faClock, faHtml5, faCss3Alt, faJsSquare, faWalking, faReact, faDesktop, faChalkboardTeacher, faArrowDown, faHandshake, faCodeBranch, faCode, faNodeJs );



export { FontAwesomeIcon };