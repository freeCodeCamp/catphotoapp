import React from 'react';
import {render} from 'react-dom';
import Image from './Image';
import Content from './Content';
import Action from './Action';

export default class Card extends React.Component {
  render() {
    const {cat, searchByTag} = this.props;
    return (
      <div className="col s3 m4 s12">
        <div className="card hoverable">
          <Image alt={cat.title} src={cat.url} />
          <Content searchByTag={searchByTag} title={cat.title} tags={cat.tags} />
          <Action url={cat.url} likes={cat.likes} id={cat.id} />
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  searchByTag: React.PropTypes.func,
  cat: React.PropTypes.object,
};
