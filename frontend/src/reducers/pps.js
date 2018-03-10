import constants from 'constants'
import {Map, Record, OrderedMap} from 'immutable'
import {arrToObj} from '../helpers'

const {LOAD_PPS, START, SUCCESS, FAIL} = constants

const ReducerState = Record({loading: false, loaded: false, entities: {}})

const defaultState = new ReducerState()

export default(ppsState = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case LOAD_PPS + START:
      return ppsState.set('loading', true)

    case LOAD_PPS + SUCCESS:
      return ppsState
        .set('entities', payload.response.results)
        .set('loading', false)
        .set('loaded', true)
  }

  return ppsState
}