/* global Lockr */
import React from 'react';
import {render} from 'react-dom';

export default class Action extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      likes: props.likes,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const catId = this.state.id;

    const defaultCats = Lockr.get('defaultCats');
    const customCats = Lockr.get('customCats');
    let isDefault = false;

    defaultCats.forEach(localCat => {
      if (localCat.id === catId) {
        isDefault = true;
      }
    });

    if (isDefault) {
      // Find cat is local storage and increment likes
      const index = defaultCats.findIndex(x => x.id === catId);
      defaultCats[index].likes = this.state.likes + 1;
      Lockr.flush();
      defaultCats.forEach(cat => {
        Lockr.sadd('defaultCats', cat);
      });

      if (customCats) {
        customCats.forEach(cat => {
          Lockr.sadd('customCats', cat);
        });
      }
    } else {
      // Find cat is local storage and increment likes
      const index = customCats.findIndex(x => x.id === catId);
      customCats[index].likes = this.state.likes + 1;
      Lockr.flush();
      customCats.forEach(cat => {
        Lockr.sadd('customCats', cat);
      });
      defaultCats.forEach(cat => {
        Lockr.sadd('defaultCats', cat);
      });
    }

    // update like button
    this.setState({likes: this.state.likes + 1});
  }

  render() {
    return (
      <div className="card-action">
        <a
          className="waves-effect waves-light waves-red red darken-3 btn"
          href={this.props.url}
          download={this.props.url}
        >
          <i className="fa fa-download" />
        </a>
        <button
          className="waves-effect waves-light waves-blue blue darken-3 btn"
          onClick={this.handleClick}
        >
          <i className="fa fa-thumbs-up" />
          <span className="likes_number"> {this.state.likes}</span>
        </button>
      </div>
    );
  }
}

Action.propTypes = {
  id: React.PropTypes.string,
  likes: React.PropTypes.number,
  url: React.PropTypes.string,
};
