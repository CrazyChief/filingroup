import constants from 'constants'
const {
  LOAD_ABOUT, 
  LOAD_PRIVELEGES, 
  LOAD_ALL_COURSES, 
  LOAD_ALL_FEEDBACKS, 
  LOAD_ALL_ARTICLES, 
  START, 
  SUCCESS, 
  FAIL} = constants

export function loadAbout() {
  return (dispatch) => {
    dispatch({
      type: LOAD_ABOUT + START,
      payload: {}
    })

    fetch(`/api/v0/aboutus/`).then(res => {
      if (res.status >= 400) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
      .then(response => dispatch({
        type: LOAD_ABOUT + SUCCESS,
        payload: {
          response
        }
      }))
      .catch(error => {
        dispatch({
          type: LOAD_ABOUT + FAIL,
          payload: {
            error
          }
        })
      })
  }
}

export function loadPriveleges() {
  return (dispatch) => {
    dispatch({
      type: LOAD_PRIVELEGES + START,
      payload: {}
    })

    fetch(`/api/v0/privileges/`).then(res => {
      if (res.status >= 400) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
      .then(response => dispatch({
        type: LOAD_PRIVELEGES + SUCCESS,
        payload: {
          response
        }
      }))
      .catch(error => {
        dispatch({
          type: LOAD_PRIVELEGES + FAIL,
          payload: {
            error
          }
        })
      })
  }
}

export function loadAllCourses() {
  return (dispatch) => {
    dispatch({
      type: LOAD_ALL_COURSES + START,
      payload: {}
    })

    fetch(`/api/v0/courses/`).then(res => {
      if (res.status >= 400) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
      .then(response => dispatch({
        type: LOAD_ALL_COURSES + SUCCESS,
        payload: {
          response
        }
      }))
      .catch(error => {
        dispatch({
          type: LOAD_ALL_COURSES + FAIL,
          payload: {
            error
          }
        })
      })
  }
}

export function loadAllFeedbacks(params) {
  return (dispatch) => {
    dispatch({
      type: LOAD_ALL_FEEDBACKS + START,
      payload: {}
    })

    fetch(`${params?params:'/api/v0/reviews/'}`).then(res => {
      if (res.status >= 400) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
      .then(response => dispatch({
        type: LOAD_ALL_FEEDBACKS + SUCCESS,
        payload: {
          response
        }
      }))
      .catch(error => {
        dispatch({
          type: LOAD_ALL_FEEDBACKS + FAIL,
          payload: {
            error
          }
        })
      })
  }
}

export function loadAllArticles(params) {
  return (dispatch) => {
    dispatch({
        type: LOAD_ALL_ARTICLES + START,
        payload: {}
    })
    
    fetch(`${params?params:'/api/v0/posts/'}`)
      .then(res => {
        if (res.status >= 400) {
          throw new Error(res.statusText)
        }
        return res.json()
      })
      .then(response => dispatch({
        type: LOAD_ALL_ARTICLES + SUCCESS,
        payload: { response }
      }))
      .catch(error => {
        dispatch({
          type: LOAD_ALL_ARTICLES + FAIL,
          payload: { error }
        })
      })
  }
}