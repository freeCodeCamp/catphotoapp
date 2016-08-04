import React from 'react';
import {render} from 'react-dom';
import Tag from './Tag';

export default class CardContent extends React.Component {
  tagClick(tag) {
    this.props.searchByTag(tag);
  }
  render() {
    return (
      <div className="card-content">
        <h5>{this.props.title}</h5>
        {this.props.tags.map((tag, key) => {
          return <Tag tagClick={this.tagClick.bind(this)} key={key} tag={tag} />;
        })}
      </div>
    );
  }
}
