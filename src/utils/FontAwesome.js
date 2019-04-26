import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

config.autoAddCss = false
library.add( faStarOfLife );

export { FontAwesomeIcon };