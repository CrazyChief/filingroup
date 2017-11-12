import {combineReducers} from 'redux';
import articles from './articles'
import feedbacks from './feedbacks'

export default combineReducers({
  articles, feedbacks
});