import React from 'react';
import {render} from 'react-dom';
import Image from './Image';
import Content from './Content';
import Action from './Action';

export default class card extends React.Component {
  render() {
    let { cat, searchByTag } = this.props;
    return (
      <div className="col s3 m4 s12">
        <div className="card hoverable">
          <Image src={cat.url} />
          <Content searchByTag={searchByTag} title={cat.title} tags={cat.tags} />
          <Action url={cat.url} likes={cat.likes} id={cat.id} />
        </div>
      </div>
    );
  }
}
