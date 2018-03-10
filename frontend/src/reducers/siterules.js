import constants from 'constants'
import {Map, Record, OrderedMap} from 'immutable'
import {arrToObj} from '../helpers'

const {LOAD_SITERULES, START, SUCCESS, FAIL} = constants

const ReducerState = Record({loading: false, loaded: false, entities: {}})

const defaultState = new ReducerState()

export default(siterulesState = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case LOAD_SITERULES + START:
      return siterulesState.set('loading', true)

    case LOAD_SITERULES + SUCCESS:
      return siterulesState
        .set('entities', payload.response.results)
        .set('loading', false)
        .set('loaded', true)
  }

  return siterulesState
}