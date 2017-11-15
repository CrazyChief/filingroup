import constants from 'constants'
import {Map, Record, OrderedMap} from 'immutable'
import {arrToImmObj} from '../helpers'

const {LOAD_ALL_FEEDBACKS, START, SUCCESS, FAIL} = constants

const FeedbackRecord = Record({
  first_name: undefined,
  last_name: undefined,
  avatar: null,
  link_to_fb: undefined,
  link_to_inst: undefined,
  link_to_linkedin: undefined,
  review: '',
  video: null,
  date_added: undefined
})

const ReducerState = Record({loading: false, loaded: false, entities: new OrderedMap({})})

const defaultState = new ReducerState()

export default (feedbackState = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case LOAD_ALL_FEEDBACKS + START:
      return feedbackState.set('loading', true)
  
    case LOAD_ALL_FEEDBACKS + SUCCESS:
      return feedbackState
        .update('entities', entities => arrToImmObj(payload.response.results, FeedbackRecord, 'date_added').merge(entities))
        .set('loading', false)
        .set('loaded', true)
  }
  
  return feedbackState
}
