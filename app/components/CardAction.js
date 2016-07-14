import React from 'react';
import {render} from 'react-dom';

class CardAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      likes: props.likes
    }; this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      let catId = this.state.id,
          localCats = Lockr.get('cats'),
          index;
      // update like button likes
      this.setState({likes: this.state.likes + 1});
      // Find cat is local storage and increment likes
      index = localCats.findIndex(x => x.id === catId);
      localCats[index].likes = this.state.likes + 1;
      // empty and update local storage
      Lockr.flush();
      localCats.forEach(function(localCat){
        Lockr.sadd('cats', localCat);
      });
    }

  render() {
    return (
      <div className="card-action">
        <a className="waves-effect waves-light waves-red red darken-3 btn" href={this.props.url} download={this.props.url}>
          <i className="fa fa-download"></i>
        </a>
        <button className="waves-effect waves-light waves-blue blue darken-3 btn"
          onClick={this.handleClick}>
          <i className="fa fa-thumbs-up"></i>
          <span className="likes_number"> {this.state.likes}</span>
        </button>
      </div>
    );
  }
}
export default CardAction;
