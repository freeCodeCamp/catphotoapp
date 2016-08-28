/* global $ */
import React from 'react';
import {render} from 'react-dom';

export default class Image extends React.Component {
  componentDidMount() {
    $('.materialboxed').materialbox();
  }

  render() {
    return (
      <div className="card-image">
        <img className="materialboxed" alt={this.props.alt} src={this.props.src} />
      </div>
    );
  }
}
