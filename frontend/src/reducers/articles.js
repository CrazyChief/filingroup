import constants from 'constants'
import {Map, Record, OrderedMap} from 'immutable'
import {arrToImmObj} from '../helpers'

const {LOAD_ALL_ARTICLES, START, SUCCESS, FAIL} = constants

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

const ReducerState = Record({loading: false, loaded: false, entities: new OrderedMap({})})

const defaultState = new ReducerState()

export default (articleState = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case LOAD_ALL_ARTICLES + START:
      return articleState.set('loading', true)
  
    case LOAD_ALL_ARTICLES + SUCCESS:
      return articleState
        .update('entities', entities => arrToImmObj(payload.response.results, ArticleRecord).merge(entities))
        .set('loading', false)
        .set('loaded', true)
  }
  
  return articleState
}