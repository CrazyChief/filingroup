import {combineReducers} from 'redux';
import articles from './articles'
import feedbacks from './feedbacks'
import products from './products'

export default combineReducers({
  articles, feedbacks, products
});