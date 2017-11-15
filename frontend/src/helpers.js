import {Map, Record, OrderedMap} from 'immutable'

export function arrToImmObj(arr, DataRec = Map, id = 'slug') {
  return arr.reduce((acc, elem) => {
    return acc.set(elem[id], new DataRec(elem))
  }, new OrderedMap({}))
}

export function ObjToImmArr(obj) {
  return obj
    .valueSeq()
    .toArray()
}

export function arrToObj(arr) {
  return arr.reduce((acc, elem) => {
    acc[elem.id] = elem
    return acc
  }, {})
}

export function ObjToArr(obj) {
  return Object
    .keys(obj)
    .map(id = obj[id])
}

export function createMarkup(content){
  return {__html: content}
}