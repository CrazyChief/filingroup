import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import {createMarkup} from '../../helpers'
import history from '../../history'
import './style.scss'

import Loader from 'components/Loader'
import Fail from 'components/Fail'
import FacebookSubscribe from 'components/FacebookSubscribe'
import Youtube from 'components/YoutubeSubscriber'

class Thanks extends Component {
  static propTypes = {}

  componentDidMount = () => {
    window.addEventListener('load', () => {
      VK.Widgets.Group("vk_groups", {width: 'auto', mode: 3}, 63462541)
    })
  }

  render() {
    const {thanks, loaded, fail, courseType} = this.props
    console.log(thanks)
    if(fail) return <Fail />
    if(!loaded) return <Loader />
    return (
      <main className="main pps">
        <div
          className="container"
          style={{
          paddingTop: 50,
          paddingBottom: 50
        }}>
          <ul className="breadcrumb__list">
            <li className="breadcrumb__item">
              <NavLink exact activeClassName='active' to='/'>Главная</NavLink>
            </li>
            <li className="breadcrumb__item">
              <NavLink exact activeClassName='active' to='/thanks'>Спасибо</NavLink>
            </li>
          </ul>
          <div className="thanks">
            <h1 style={{paddingTop: 50}}> {thanks.name}, спасибо за {courseType?'заказ курса':'доверие'}! </h1>
            <p>В течение пары минут вы получите  письмо с {courseType?'детальной информацией':'доступом к записи'}.</p>
            <p>Если вы не получили письмо:<br/>проверьте папку “Спам” и переместите наше письмо в папку “Входящие”. добавьте нас в ваш список контактов ( mail@filingroup.com ) если письмо так и не пришло, напишите нам <a className="orange" href="mail@filingroup.com">mail@filingroup.com</a></p>
            <p>{courseType?'Наш менеджер свяжется с вами для уточнения деталей.':'Обязательно посмотрите видео-тренинг, это поможет вам в дальнейшем сделать правильный выбор, и начать свой бизнес. Проверьте почту и получите доступ прямо сейчас.'}</p>
            <p></p>
            <p>Остались вопросы или нужна помощь?<br/>Мы сделаем все, чтобы вам помочь, отправьте письмо с вопросами на <a className="orange" href="mail@filingroup.com">mail@filingroup.com</a></p>
            <NavLink className="article__btn" to="/">На главную</NavLink>
            {this.getSocials()}
          </div>
        </div>
      </main>
    )
  }

  getSocials = () => {
    const {courseType} = this.props
    if(!courseType) return null
    return <div className="socials__subscribe-wrap">
      <h3>Подпишитесь на наши соцсети и первыми получайте самую актуальную информацию!</h3>
      <ul className="socials__subscribe-list">
        <li className="socials__subscribe-item">
          <FacebookSubscribe />
        </li>
        <li className="socials__subscribe-item">
          <Youtube />
        </li>
        <li className="socials__subscribe-item">
          <div id="vk_groups"></div>
        </li>
      </ul>
    </div>
  }
}

export default connect(state => {
  return {
    thanks: state.thanks.entities,
    loaded: state.thanks.loaded,
    fail: state.thanks.fail,
    courseType: state.thanks.courseType
  }
}, null)(Thanks)