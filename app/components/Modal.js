import React from 'react';
import {render} from 'react-dom';

class Modal extends React.Component {
uploadedUserCat(e){
  e.preventDefault();
  let tags = this.refs.tags.value.split(','),
      cleanTags = [],
      formatTags = tags.forEach(function(tag){
        cleanTags.push(tag.trim());
      });
    //  console.log(cleanTags);
  let newCat =[{
        id: this.refs.title.value.replace(/\s+/g, ''),
        title: this.refs.title.value,
        url: this.refs.url.value,
        tags: cleanTags,
        likes: 1
        }];
      this.props.addUserCat(newCat);
      // Clear form fields
      this.refs.title.value = '';
      this.refs.url.value = '';
      this.refs.tags.value = '';
    }

  render(){
      return(
        <div className="container">
      		<div id="addCatModal" className="modal">
      			<div className="modal-content">
      				<h4>Add Cat Photo</h4>
              <form onSubmit={this.uploadedUserCat.bind(this)}>
      					<div className="row">
      						<div className="input-field col s12">
      							<input placeholder="Enter Title" ref="title" id="title" type="text" required />
      							<label htmlFor="title" data-error="Cat title has been taken" data-success="Cat title is free to use">Title</label>
      						</div>
      					</div>
      					<div className="row">
      						<div className="input-field col s12">
      							<input placeholder="Enter URL" ref="url" id="url" type="url" className="validate" required />
      							<label htmlFor="url" data-error="Please upload a GIF, PNG or JPG" data-success="Thats a URL for sure! I hope it ends in GIF, PNG or JPG...">Cat Photo URL</label>
      						</div>
      					</div>
      					<div className="row">
      						<div className="input-field col s6">
      							<input placeholder="Separate tags with a comma" ref="tags" id="tags" type="text" required />
      							<label htmlFor="tags">Tags</label>
      						</div>
      					</div>
      					<div className="row">
      						<button id="submit-btn" className="btn waves-effect waves-blue blue darken-1 submit" type="submit" name="action">
      							<i className="fa fa-send"></i>
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
export default Modal;
