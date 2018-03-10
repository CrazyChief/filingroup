import constants from 'constants'
import {Map, Record, OrderedMap} from 'immutable'
import {arrToObj} from '../helpers'

const {LOAD_DENIALS, START, SUCCESS, FAIL} = constants

const ReducerState = Record({loading: false, loaded: false, entities: {}})

const defaultState = new ReducerState()

export default(denialState = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case LOAD_DENIALS + START:
      return denialState.set('loading', true)

    case LOAD_DENIALS + SUCCESS:
      return denialState
        .set('entities', payload.response.results)
        .set('loading', false)
        .set('loaded', true)
  }

  return denialState
}