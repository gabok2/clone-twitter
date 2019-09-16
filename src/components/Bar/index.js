import React from 'react';
import more from "../imagem/more.svg";

const Bar = () => (
  <div className="bar">
    <div className="content">
      <ul>
        <li>
          <span>Tweets</span>
          <strong>1234</strong>

        </li>
        <li>
          <span>Followings</span>
          <strong>654</strong>

        </li>
        <li>
          <span>Followers</span>
          <strong>84</strong>

        </li>
        <li>
          <span>Favorites</span>
          <strong>77</strong>

        </li>
      </ul>

      <div className="actions">
        <button>Follow</button>
        <img src={more} alt="More"></img>
      </div>
    </div>

  </div>
);

export default Bar;
