import constants from 'constants'
import {Map, Record, OrderedMap} from 'immutable'
import {arrToImmObj} from '../helpers'

const {LOAD_CATEGORIES, START, SUCCESS, FAIL} = constants

const CategoriesRecord = Record({
  title: undefined,
  slug: undefined,
  id: undefined,
  date_added: undefined
})

const ReducerState = Record({loading: false, loaded: false, entities: new OrderedMap({})})

const defaultState = new ReducerState()

export default (categoriesState = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case LOAD_CATEGORIES + START:
      return categoriesState.set('loading', true)

    case LOAD_CATEGORIES + SUCCESS:
      return categoriesState
        .set('entities', arrToImmObj(payload.response.results, CategoriesRecord))
        .set('loading', false)
        .set('loaded', true)
  }

  return categoriesState
}