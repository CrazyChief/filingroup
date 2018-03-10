import constants from 'constants'
import {Map, Record, OrderedMap} from 'immutable'
import {arrToImmObj} from '../helpers'

const {LOAD_PRIVELEGES, START, SUCCESS, FAIL} = constants

const PrivelegeRecord = Record({
  id: undefined,
  type: undefined,
    title: undefined,
  courses: [],
  price: undefined,
  description: undefined,
  date_added: undefined,
})

const ReducerState = Record({loading: false, loaded: false,  entities: new OrderedMap({})})

const defaultState = new ReducerState()

export default(privelegeState = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case LOAD_PRIVELEGES + START:
      return privelegeState.set('loading', true)

    case LOAD_PRIVELEGES + SUCCESS:
      return privelegeState
        .set('entities', arrToImmObj(payload.response.results, PrivelegeRecord, 'id'))
        .set('loading', false)
        .set('loaded', true)
  }

  return privelegeState
}