import constants from 'constants'
import {Map, Record, OrderedMap} from 'immutable'
import {arrToImmObj} from '../helpers'

const {LOAD_CATEGORIED_ARTICLE, LOAD_ALL_ARTICLES, START, SUCCESS, FAIL} = constants

const ArticleRecord = Record({
  announce: undefined,
  author: 'admin',
  category: null,
  content: '',
  cover_picture: undefined,
  date_added: undefined,
  is_published: false,
  slug: null,
  tags: [],
  title: null,
})

const ReducerState = Record({loading: false, loaded: false, next: null, previous: null, entities: new OrderedMap({})})

const defaultState = new ReducerState()

export default (articleState = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case LOAD_ALL_ARTICLES + START:
      return articleState.set('loading', true)

    case LOAD_CATEGORIED_ARTICLE + START:
      return articleState
        .set('loading', true)
        .set('loaded', false)
  
    case LOAD_ALL_ARTICLES + SUCCESS:
      return articleState
        .set('entities', arrToImmObj(payload.response.results, ArticleRecord))
        .set('next', payload.response.next)
        .set('previous', payload.response.previous)
        .set('loading', false)
        .set('loaded', true)
    
    case LOAD_CATEGORIED_ARTICLE + SUCCESS:
      return articleState
        .set('entities', arrToImmObj(payload.response.results, ArticleRecord))
        .set('next', payload.response.next)
        .set('previous', payload.response.previous)
        .set('loading', false)
        .set('loaded', true)
  }
  
  return articleState
}