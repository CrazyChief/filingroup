import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import {getStars} from 'selectors'
import {createMarkup} from '../helpers'

import BlockSideBar from 'components/BlogSideBar'

class ArticleModal extends Component{
  static propTypes = {
    match: PropTypes.object.isRequired,
    articles: PropTypes.object.isRequired
  }

  componentDidMount = () => {
    const {match, articles} = this.props
    const article = articles.get(match.params.slug)

    var disqus_config = function () {
      this.page.url = article.slug;
      this.page.identifier = article.slug; 
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
    const article = articles.get(match.params.slug)
    const {
      slug, 
      title, 
      announce, 
      author, 
      category, 
      content, 
      cover_picture, 
      date_added} = article
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
                  <NavLink exact activeClassName='active' to='/blog'>Блог</NavLink>
                </li>
                <li className="breadcrumb__item">
                  <NavLink exact activeClassName='active' to={`/blog/${slug}`}>{title.slice(0, 54)}</NavLink>
                </li>
              </ul>
              <h3 className="article__title">{title.slice(0, 84)}</h3>
              <img className="article__img" src={`${cover_picture}`} />
              <ul className="article__info-list">
                <li className="article__info_item">
                  Категория: <span>{category.title}</span>
                </li>
                <li className="article__info_item">
                  Дата публикации: <span>{date_added.slice(0, date_added.indexOf('T'))}</span>
                </li>
                <li className="article__info_item">
                  Автор: <span>{this.getName(author)}</span>
                </li>
                <li className="article__info_item">
                  Оценка: <ul className="stars__list">{getStars(4)}</ul>
                </li>
              </ul>
              <div dangerouslySetInnerHTML={createMarkup(content)} />
              <div id="disqus_thread"></div>
              <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
            </div>
            <div className="blog__right"><BlockSideBar articles={articles} /></div>
          </section>
        </section>
      </main>
    )
  }
  getName = (author) => {
    const {username, first_name, last_name} = author
    if(first_name && last_name){
      return `${first_name} ${last_name}`
    }
    return username
  }
}

export default connect((state) => {
  return {
    articles: state.articles.entities
  }
}, null)(ArticleModal)