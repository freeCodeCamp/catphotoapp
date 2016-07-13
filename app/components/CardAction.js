import React from 'react';
import {render} from 'react-dom';

class CardAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes
    }; this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({likes: this.state.likes +1});
  }
  render() {
    return (
      <div className="card-action">
        <button className="waves-effect waves-light waves-blue blue darken-3 btn like"
          onClick={this.handleClick}>
          <i className="fa fa-thumbs-up"></i>
          <span className="likes_number"> {this.state.likes}</span>
        </button>
      </div>
    );
  }
}
export default CardAction;
