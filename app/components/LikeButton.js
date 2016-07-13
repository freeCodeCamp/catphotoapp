import React from 'react';
import {render} from 'react-dom';

class LikeButton extends React.Component {
  render() {
    return (
      <div className="card-action">
        <button id="Cat-in-a-Hat" className="waves-effect waves-light waves-blue blue darken-3 btn like">
          <i className="fa fa-thumbs-up"></i>
          <span className="likes_number">24</span>
        </button>
      </div>
    );
  }
}
export default LikeButton;
