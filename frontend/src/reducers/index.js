import {combineReducers} from 'redux';
import articles from './articles'
import feedbacks from './feedbacks'
import products from './products'
import priveleges from './priveleges'
import about from './about'
import pps from './pps'
import agreements from './agreements'
import denials from './denials'
import siterules from './siterules'
import thanks from './thanks'
import categories from './categories'

export default combineReducers({
  articles,
  categories,
  feedbacks,
  products,
  priveleges,
  about,
  pps,
  agreements,
  denials,
  siterules,
  thanks
});