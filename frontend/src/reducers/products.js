import constants from 'constants'
import {Map, Record, OrderedMap} from 'immutable'
import {arrToImmObj} from '../helpers'

const {LOAD_ALL_COURSES, START, SUCCESS, FAIL} = constants

const CoursesRecord = Record({
  id: undefined,
  title: undefined,
  slug: undefined,
  course_type: null,
  discount: undefined,
  places: undefined,
  free_places: undefined,
  price: undefined,
  course_picture: undefined,
  teachers: [],
  is_active: undefined,
  description: undefined,
  date_added: undefined,
  consulting_time: undefined,
  consulting_time_availability_on_this_week: false,
  couching_timing: undefined,
  couching_consult_time: undefined,
  couching_time_availability_on_this_month: false
})

const ReducerState = Record({loading: false, loaded: false, entities: new OrderedMap({})})

const defaultState = new ReducerState()

export default(productsState = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case LOAD_ALL_COURSES + START:
      return productsState.set('loading', true)

    case LOAD_ALL_COURSES + SUCCESS:
      return productsState
        .update('entities', entities => arrToImmObj(payload.response.results, CoursesRecord).merge(entities))
        .set('loading', false)
        .set('loaded', true)
  }

  return productsState
}
