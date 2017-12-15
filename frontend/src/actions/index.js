import constants from 'constants'
import history from '../history'
const {
  POST_STUDENT,
  POST_USER,
  POST_FEEDBACK,
  LOAD_CATEGORIED_ARTICLE,
  LOAD_CATEGORIES,
  LOAD_AGREEMENTS,
  LOAD_SITERULES,
  LOAD_DENIALS,
  LOAD_PPS,
  LOAD_ABOUT, 
  LOAD_PRIVELEGES, 
  LOAD_ALL_COURSES, 
  LOAD_ALL_FEEDBACKS, 
  LOAD_ALL_ARTICLES, 
  START, 
  SUCCESS, 
  FAIL} = constants

export function postStudent(data) {
  return (dispatch) => {
    fetch('/api/v0/students/', {
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.status >= 400) {
          throw new Error(res.statusText)
        }
        return res.json()
      })
      .then(response => {
        history.push('/thanks')
        return dispatch({
          type: POST_STUDENT + SUCCESS,
          payload: {
            response
          }
        })
      })
      .catch(error => {
        history.push('/thanks')
        dispatch({
          type: POST_STUDENT + FAIL,
          payload: {}
        })
      })
  }
}

export function postUser(data) {
  const user = {}
  user.name = data.get('name')
  return (dispatch) => {
    fetch('https://app.getresponse.com/add_subscriber.html', {
      method: 'post',
      mode: 'cors',
      body: data
    })
      .then(res => {
        if (res.status >= 400) {
          throw new Error(res.statusText)
        }
        return res.json()
      })
      .then(response => {
        history.push('/thanks')
        return dispatch({
          type: POST_USER + SUCCESS,
          payload: {
            user
          }
        })
      })
      .catch(error => {
        history.push('/thanks')
        return dispatch({
          type: POST_USER + FAIL,
          payload: {user}
        })
      })
  }
}

export function postFeedback(data) {
  return (dispatch) => {
    dispatch({
        type: POST_FEEDBACK + START,
        payload: {}
    })
    fetch('/api/v0/reviews/', {
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.status >= 400) {
          throw new Error(res.statusText)
        }
        return res.json()
      })
      .then(response => {
        history.push('/feedbacks')
        dispatch({
          type: POST_FEEDBACK + SUCCESS,
          payload: {
            response
          }
        })
      })
      .catch(error => {
        dispatch({
          type: POST_FEEDBACK + FAIL,
          payload: {
            error
          }
        })
      })
  }
}

export function loadCategoryArticles(slug){
  return (dispatch) => {
    dispatch({
        type: LOAD_CATEGORIED_ARTICLE + START,
        payload: {}
    })
    fetch(`/api/v0/category/${slug}/`).then(res => {
      if (res.status >= 400) {
        throw new Error(res.statusText)
      }
      console.log(res)
      return res.json()
    })
      .then(response => dispatch({
        type: LOAD_CATEGORIED_ARTICLE + SUCCESS,
        payload: {
          response
        }
      }))
      .catch(error => {
        dispatch({
          type: LOAD_CATEGORIED_ARTICLE + FAIL,
          payload: {
            error
          }
        })
      })
  }
}

export function loadCategories() {
  return (dispatch) => {
    fetch(`/api/v0/categories/`).then(res => {
      if (res.status >= 400) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
      .then(response => dispatch({
        type: LOAD_CATEGORIES + SUCCESS,
        payload: {
          response
        }
      }))
      .catch(error => {
        dispatch({
          type: LOAD_CATEGORIES + FAIL,
          payload: {
            error
          }
        })
      })
  }
}

export function loadAgreements() {
  return (dispatch) => {
    dispatch({
      type: LOAD_AGREEMENTS + START,
      payload: {}
    })

    fetch(`/api/v0/agreements/`).then(res => {
      if (res.status >= 400) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
      .then(response => dispatch({
        type: LOAD_AGREEMENTS + SUCCESS,
        payload: {
          response
        }
      }))
      .catch(error => {
        dispatch({
          type: LOAD_AGREEMENTS + FAIL,
          payload: {
            error
          }
        })
      })
  }
}

export function loadSiterules() {
  return (dispatch) => {
    dispatch({
      type: LOAD_SITERULES + START,
      payload: {}
    })

    fetch(`/api/v0/siterules/`).then(res => {
      if (res.status >= 400) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
      .then(response => dispatch({
        type: LOAD_SITERULES + SUCCESS,
        payload: {
          response
        }
      }))
      .catch(error => {
        dispatch({
          type: LOAD_SITERULES + FAIL,
          payload: {
            error
          }
        })
      })
  }
}

export function loadDenials() {
  return (dispatch) => {
    dispatch({
      type: LOAD_DENIALS + START,
      payload: {}
    })

    fetch(`/api/v0/denials/`).then(res => {
      if (res.status >= 400) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
      .then(response => dispatch({
        type: LOAD_DENIALS + SUCCESS,
        payload: {
          response
        }
      }))
      .catch(error => {
        dispatch({
          type: LOAD_DENIALS + FAIL,
          payload: {
            error
          }
        })
      })
  }
}

export function loadPPS() {
  return (dispatch) => {
    dispatch({
      type: LOAD_PPS + START,
      payload: {}
    })

    fetch(`/api/v0/pps/`).then(res => {
      if (res.status >= 400) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
      .then(response => dispatch({
        type: LOAD_PPS + SUCCESS,
        payload: {
          response
        }
      }))
      .catch(error => {
        dispatch({
          type: LOAD_PPS + FAIL,
          payload: {
            error
          }
        })
      })
  }
}

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