import constants from 'constants'
import {Map, Record, OrderedMap} from 'immutable'
import {arrToObj} from '../helpers'

const {LOAD_ABOUT, START, SUCCESS, FAIL} = constants

const ReducerState = Record({loading: false, loaded: false, entities: {}})

const defaultState = new ReducerState()

export default(aboutState = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case LOAD_ABOUT + START:
      return aboutState.set('loading', true)

    case LOAD_ABOUT + SUCCESS:
      return aboutState
        .set('entities', payload.response.results)
        .set('loading', false)
        .set('loaded', true)
  }

  return aboutState
}