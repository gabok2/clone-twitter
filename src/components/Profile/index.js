import React from 'react';
import avatar from '../imagem/avatar.png';
import place from '../imagem/place.svg';
import url from '../imagem/url.svg';
import joined from '../imagem/joined.svg';
import born from '../imagem/born.svg';
import followers from '../imagem/followers.svg';
import images from '../imagem/images.svg';
import comments from '../imagem/comments.svg';
import retweet from '../imagem/retweet.svg';
import like from '../imagem/like.svg';

const Profile = () => (
  <div className="wrapper-content content">
    <aside className="profile">
      <img className="avatar" src={avatar} alt="Gabriel"></img>
      <h1>Gabriel</h1>
      <span>@Exibit</span>
      <p>front end & mobile</p>

      <ul className="list">
        <li><img src={place} alt="place"></img> Rio de janeiro, Brasil</li>
        <li><img src={url} alt="url"></img> exibit.be</li>
        <li><img src={joined} alt="joined"></img> outubro 2002</li>
        <li><img src={born} alt="born"></img> outubro 1999</li>
      </ul>

      <div className="widget followers">
        <strong><img src={followers} alt="followers"></img> 73 followers that you know</strong>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>

        </ul>
      </div>

      <div className="widget images">
        <strong><img src={images} alt="images"></img> 126 Photos and video</strong>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>

        </ul>

      </div>

    </aside>
    <section className="timeline">
      <nav>
        <a href="">Tweets</a>
        <a href="">Tweets and replies</a>
        <a href="">Medias</a>

      </nav>

      <ul className="tweets">
        <li>
          <img src={avatar} alt="avatar"></img>
          <div className="info">
            <strong>Gabriel<span>@gabok2</span></strong>
            <p>Melhor bootcamp é da Rocketseat</p>

            <div className="actions">
              <a href=""><img src={comments} alt="comments"></img>6</a>
              <a href=""><img src={retweet} alt="retweet"></img>9</a>
              <a href=""><img src={like} alt="like"></img>4</a>
            </div>
          </div>
        </li>
        <li>
          <img src={avatar} alt="avatar"></img>
          <div className="info">
            <strong>Gabriel<span>@gabok2</span></strong>
            <p>Melhor bootcamp é da Rocketseat</p>

            <div className="actions">
              <a href=""><img src={comments} alt="comments"></img>6</a>
              <a href=""><img src={retweet} alt="retweet"></img>9</a>
              <a href=""><img src={like} alt="like"></img>4</a>
            </div>
          </div>
        </li>
        <li>
          <img src={avatar} alt="avatar"></img>
          <div className="info">
            <strong>Gabriel<span>@gabok2</span></strong>
            <p>Melhor bootcamp é da Rocketseat</p>

            <div className="actions">
              <a href=""><img src={comments} alt="comments"></img>6</a>
              <a href=""><img src={retweet} alt="retweet"></img>9</a>
              <a href=""><img src={like} alt="like"></img>4</a>
            </div>
          </div>
        </li>
        <li>
          <img src={avatar} alt="avatar"></img>
          <div className="info">
            <strong>Gabriel<span>@gabok2</span></strong>
            <p>Melhor bootcamp é da Rocketseat</p>

            <div className="actions">
              <a href=""><img src={comments} alt="comments"></img>6</a>
              <a href=""><img src={retweet} alt="retweet"></img>9</a>
              <a href=""><img src={like} alt="like"></img>4</a>
            </div>
          </div>
        </li>
        <li>
          <img src={avatar} alt="avatar"></img>
          <div className="info">
            <strong>Gabriel<span>@gabok2</span></strong>
            <p>Melhor bootcamp é da Rocketseat</p>

            <div className="actions">
              <a href=""><img src={comments} alt="comments"></img>6</a>
              <a href=""><img src={retweet} alt="retweet"></img>9</a>
              <a href=""><img src={like} alt="like"></img>4</a>
            </div>
          </div>
        </li>
        <li>
          <img src={avatar} alt="avatar"></img>
          <div className="info">
            <strong>Gabriel<span>@gabok2</span></strong>
            <p>Melhor bootcamp é da Rocketseat</p>

            <div className="actions">
              <a href=""><img src={comments} alt="comments"></img>6</a>
              <a href=""><img src={retweet} alt="retweet"></img>9</a>
              <a href=""><img src={like} alt="like"></img>4</a>
            </div>
          </div>
        </li>
        <li>
          <img src={avatar} alt="avatar"></img>
          <div className="info">
            <strong>Gabriel<span>@gabok2</span></strong>
            <p>Melhor bootcamp é da Rocketseat</p>

            <div className="actions">
              <a href=""><img src={comments} alt="comments"></img>6</a>
              <a href=""><img src={retweet} alt="retweet"></img>9</a>
              <a href=""><img src={like} alt="like"></img>4</a>
            </div>
          </div>
        </li>
        <li>
          <img src={avatar} alt="avatar"></img>
          <div className="info">
            <strong>Gabriel<span>@gabok2</span></strong>
            <p>Melhor bootcamp é da Rocketseat</p>

            <div className="actions">
              <a href=""><img src={comments} alt="comments"></img>6</a>
              <a href=""><img src={retweet} alt="retweet"></img>9</a>
              <a href=""><img src={like} alt="like"></img>4</a>
            </div>
          </div>
        </li>
      </ul>

    </section>
    <aside className="widgets">
      <div className="widget follow">
        <div className="title">
          <strong>Who to follow</strong>
          <a href="">Refresh</a>
          <a href="">View all</a>
        </div>

        <ul>
          <li>
            <div className="profile">
              <img src={avatar} alt="avatar"></img>
              <div className="info">
                <strong>Spade <span>@spade_be</span></strong>
                <button>Follow</button>
              </div>
            </div>
            <a href="">x</a>
          </li>
          <li>
            <div className="profile">
              <img src={avatar} alt="avatar"></img>
              <div className="info">
                <strong>Spade <span>@spade_be</span></strong>
                <button>Follow</button>
              </div>
            </div>
            <a href="">x</a>
          </li>
          <li>
            <div className="profile">
              <img src={avatar} alt="avatar"></img>
              <div className="info">
                <strong>Spade <span>@spade_be</span></strong>
                <button>Follow</button>
              </div>
            </div>
            <a href="">x</a>
          </li>
        </ul>

      </div>



    </aside>

  </div>
);

export default Profile;
