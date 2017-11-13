import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import {getStars} from 'selectors'

class ArticleModal extends Component{
  static propTypes = {
    match: PropTypes.object.isRequired,
    articles: PropTypes.object.isRequired
  }

  componentDidMount = () => {
    const {match, articles} = this.props
    const article = articles.get(match.params.id)

    var disqus_config = function () {
      this.page.url = article.id;
      this.page.identifier = article.id; 
      };

      (function() {
      var d = document, s = d.createElement('script');
      s.src = 'https://filin-group.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }
  

  render(){
    const {match, articles} = this.props
    const article = articles.get(match.params.id)
    const {id, title, text, img, category, author, date, stars} = article
    return(
      <main className="main">
        <section className="modal__article container">
          <section className="section blog">
            <div className="blog__left">
              <ul className="breadcrumb__list">
                <li className="breadcrumb__item">
                  <NavLink exact activeClassName='active' to='/'>Главная</NavLink>
                </li>
                <li className="breadcrumb__item">
                  <NavLink exact activeClassName='active' to='/'>Блог</NavLink>
                </li>
                <li className="breadcrumb__item">
                  <NavLink exact activeClassName='active' to={`/article/${id}`}>{title?title:text.slice(0, 54)}</NavLink>
                </li>
              </ul>
              <h3 className="article__title">{title?title:text.slice(0, 84)}</h3>
              <img className="article__img" src={`/../${img}`} />
              <ul className="article__info-list">
                <li className="article__info_item">
                  Категория: <span>{category}</span>
                </li>
                <li className="article__info_item">
                  Дата публикации: <span>{date}</span>
                </li>
                <li className="article__info_item">
                  Автор: <span>{author}</span>
                </li>
                <li className="article__info_item">
                  Оценка: <ul className="stars__list">{getStars(article)}</ul>
                </li>
              </ul>
              <p>{text}</p>
              <div id="disqus_thread"></div>
              <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
            </div>
            <div className="blog__rigth"></div>
          </section>
        </section>
      </main>
    )
  }
}

export default connect(({articles}) => ({articles}), null)(ArticleModal)