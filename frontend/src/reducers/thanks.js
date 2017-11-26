import constants from 'constants'
import {Map, Record, OrderedMap} from 'immutable'

const {POST_USER, START, SUCCESS, FAIL} = constants

const ReducerState = Record({loaded: false, fail: false, entities: {}})

const defaultState = new ReducerState()

export default(thanksState = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case POST_USER + SUCCESS:
      return thanksState
        .set('entities', payload.response)
        .set('loaded', true)
        .set('fail', false)

    case POST_USER + FAIL:
      return thanksState
        .set('fail', true)
  }

  return thanksState
}