import constants from 'constants'
import {Map, Record, OrderedMap} from 'immutable'
import {arrToImmObj} from '../helpers'

const {LOAD_ABOUT, START, SUCCESS, FAIL} = constants

const AboutRecord = Record({
  id: undefined,
  title: undefined,
  logo: undefined,
  is_active: true,
  text: '',
  date_added: undefined,
  date_updated: undefined
})

const ReducerState = Record({loading: false, loaded: false, entities: new OrderedMap({})})

const defaultState = new ReducerState()

export default(aboutState = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case LOAD_ABOUT + START:
      return aboutState.set('loading', true)

    case LOAD_ABOUT + SUCCESS:
      return aboutState
        .set('entities', arrToImmObj(payload.response.results, AboutRecord, 'id'))
        .set('loading', false)
        .set('loaded', true)
  }

  return aboutState
}