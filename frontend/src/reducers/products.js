import constants from 'constants'
import {Map, Record, OrderedMap} from 'immutable'
import {arrToImmObj} from '../helpers'

const defaultProducts = [
  {
    id: 'first__product',
    title: 'Курс «Бизнес на амазон за 30 дней»',
    price: 'от 399$ / 1 курс',
    picPath: 'assets/img/products/pic-1.png',
    discount: '- 30%',
    emptyPlaces: '8 мест'
  },
  {
    id: 'second__product',
    title: 'Персональный коучинг',
    price: '400$/ месяц',
    picPath: 'assets/img/products/pic-2.png',
    discount: '- 30%',
    emptyPlaces: '2 места'
  },
  {
    id: 'third__product',
    title: 'Консультация',
    price: '100$/ час',
    picPath: 'assets/img/products/pic-3.png',
    discount: '- 30%',
    emptyPlaces: '8 мест'
  }
]

const productScheme = new Record({
  id: null,
  title: '',
  price: '',
  picPath: '',
  discount: '',
  emptyPlaces: ''
})

export default (productState = arrToImmObj(defaultProducts, productScheme), action) => {
  return productState
}