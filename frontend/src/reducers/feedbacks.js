import constants from 'constants'
import {Map, Record, OrderedMap} from 'immutable'
import {arrToImmObj} from '../helpers'

const {POST_FEEDBACK, LOAD_ALL_FEEDBACKS, START, SUCCESS, FAIL} = constants

const FeedbackRecord = Record({
  first_name: undefined,
  last_name: undefined,
  avatar: null,
  link_to_fb: undefined,
  link_to_inst: undefined,
  link_to_linkedin: undefined,
  link_to_vk: undefined,
  review: '',
  video: null,
  date_added: undefined
})

const ReducerState = Record({loading: false, loaded: false, next: null, entities: new OrderedMap({})})

const defaultState = new ReducerState()

export default (feedbackState = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case POST_FEEDBACK + START:
      return feedbackState
        .set('loaded', false)
        .set('loading', false)

    case LOAD_ALL_FEEDBACKS + START:
      return feedbackState.set('loading', true)
  
    case LOAD_ALL_FEEDBACKS + SUCCESS:
      return feedbackState
        .update('entities', entities => arrToImmObj(payload.response.results, FeedbackRecord, 'date_added').merge(entities))
        .set('next', payload.response.next)
        .set('loading', false)
        .set('loaded', true)
  }
  
  return feedbackState
}
