import constants from 'constants'
import {Map, Record, OrderedMap} from 'immutable'

const {POST_STUDENT, POST_USER, START, SUCCESS, FAIL} = constants

const ReducerState = Record({courseType: false, loaded: false, fail: false, entities: {}})

const defaultState = new ReducerState()

export default(thanksState = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case POST_STUDENT + SUCCESS:
      return thanksState
        .set('entities', payload.response)
        .set('loaded', true)
        .set('fail', false)
        .set('courseType', true)

    case POST_USER + SUCCESS:
      return thanksState
        .set('entities', payload.user)
        .set('loaded', true)
        .set('fail', false)
        .set('courseType', false)

    case POST_STUDENT + FAIL:
      return thanksState
        .set('fail', true)

    case POST_USER + FAIL:
      return thanksState
        .set('entities', payload.user)
        .set('loaded', true)
        .set('fail', false)
        .set('courseType', false)
  }

  return thanksState
}