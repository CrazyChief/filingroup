import {combineReducers} from 'redux';
import articles from './articles'
import feedbacks from './feedbacks'
import products from './products'
import priveleges from './priveleges'
import about from './about'
import pps from './pps'

export default combineReducers({
  articles,
  feedbacks,
  products,
  priveleges,
  about,
  pps
});