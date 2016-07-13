import React from 'react';
import {render} from 'react-dom';

class CardAction extends React.Component {
  render() {
    return (
      <div className="card-action">
        <button className="waves-effect waves-light waves-blue blue darken-3 btn like">
          <i className="fa fa-thumbs-up"></i>
          <span className="likes_number"> {this.props.likes}</span>
        </button>
      </div>
    );
  }
}
export default CardAction;
