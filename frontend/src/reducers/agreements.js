import constants from 'constants'
import {Map, Record, OrderedMap} from 'immutable'
import {arrToObj} from '../helpers'

const {LOAD_AGREEMENTS, START, SUCCESS, FAIL} = constants

const ReducerState = Record({loading: false, loaded: false, entities: {}})

const defaultState = new ReducerState()

export default(agreementsState = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case LOAD_AGREEMENTS + START:
      return agreementsState.set('loading', true)

    case LOAD_AGREEMENTS + SUCCESS:
      return agreementsState
        .set('entities', payload.response.results)
        .set('loading', false)
        .set('loaded', true)
  }

  return agreementsState
}