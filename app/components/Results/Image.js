import React from 'react';
import {render} from 'react-dom';

export default class image extends React.Component {
  componentDidMount() {
    $('.materialboxed').materialbox();
  }

  render() {
    return (
      <div className="card-image">
        <img className="materialboxed" src={this.props.src} />
      </div>
    );
  }
}
