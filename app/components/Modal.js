import React from 'react';
import {render} from 'react-dom';

export default class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      validTitle: 'validate',
      catId: 'NotUpdated',
    };
  }

  isTitleValid() {
    const id = this.title.value.replace(/\s+/g, '');
    const existingIds = [];

    this.props.defaultCats.forEach(cat => {
      existingIds.push(cat.id);
    });
    if (this.props.customCats) {
      this.props.customCats.forEach(cat => {
        existingIds.push(cat.id);
      });
    }

    if (existingIds.indexOf(id) === -1) {
      this.setState({catId: id});
      this.setState({validTitle: 'validate valid'});
    } else {
      this.setState({validTitle: 'validate invalid'});
    }
  }

  uploadedUserCat(e) {
    e.preventDefault();
    const tags = this.tags.value.split(',');
    const cleanTags = [];

    tags.forEach((tag) => { // eslint-disable-line no-undef
      cleanTags.push(tag.trim());
    });
    for (let a = 0; a < cleanTags.length; a++) {
      if (cleanTags[a] === '' ||
      (cleanTags[a].match(/\s*/) &&
      !cleanTags[a].match(/[\w\.\\,\/\?<\$\^\*\{\}\-\(\)]/i))) {
        cleanTags.splice(a, 1);
        a = 0;
      }
    }
    const url = this.url.value;
    let cleanUrl;
    if (url.match(/(jpg|png|gif)$/i)) {
      cleanUrl = url;
    } else {
      cleanUrl = 'public/img/replacementCat.jpg';
    }
    const newCat = [{
      id: this.state.catId,
      title: this.title.value,
      url: cleanUrl,
      tags: cleanTags,
      likes: 1,
    }];
    this.props.addUserCat(newCat);
    // Clear form fields
    this.title.value = '';
    this.url.value = '';
    this.tags.value = '';
  }

  render() {
    return (
      <div className="container">
        <div id="addCatModal" className="modal">
          <div className="modal-content">
            <h4>Add Cat Photo</h4>
            <form onSubmit={this.uploadedUserCat.bind(this)}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    className={this.state.validTitle}
                    onChange={this.isTitleValid.bind(this)}
                    placeholder="Enter Title"
                    ref={(x) => { this.title = x; }}
                    id="title"
                    type="text"
                    required
                  />
                  <label
                    htmlFor="title"
                    data-error="Cat title has been taken"
                    data-success="Cat title is free to use"
                  >Title
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    placeholder="Enter URL"
                    ref={(x) => { this.url = x; }}
                    id="url" type="url" className="validate" required
                  />
                  <label
                    htmlFor="url"
                    data-error="Please upload a GIF, PNG or JPG"
                    data-success="Thats a URL for sure! I hope it ends in GIF, PNG or JPG..."
                  >Cat Photo URL
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    placeholder="Separate tags with a comma"
                    ref={(x) => { this.tags = x; }} id="tags" type="text" required
                  />
                  <label htmlFor="tags">Tags</label>
                </div>
              </div>
              <div className="row">
                <button
                  id="submit-btn"
                  className="btn waves-effect waves-blue blue darken-1 submit"
                  type="submit"
                  name="action"
                >
                  <i className="fa fa-send" />
                  &nbsp;Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  defaultCats: React.PropTypes.array,
  customCats: React.PropTypes.array,
  addUserCat: React.PropTypes.func,
};
