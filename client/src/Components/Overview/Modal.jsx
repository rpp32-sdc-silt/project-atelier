import React from 'react';
import $ from 'jquery';

class Modal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      zoom: false
    };
    this.changeZoomLevel = this.changeZoomLevel.bind(this);
  }

  changeZoomLevel (e) {
    //original state: right -100px
    //zoomed state: right: 225px;
    if (this.state.zoom === false) {
      this.setState({zoom: true});
      $(e.target).addClass('ov-zoomOut').removeClass('ov-zoomIn');
      $('.ov-modal .ov-thumbnail').css('right', 225);
    } else {
      this.setState({zoom: false});
      $(e.target).addClass('ov-zoomIn').removeClass('ov-zoomOut');
      $('.ov-modal .ov-thumbnail').css('right', -100);
    }
  }

  render(){
    return (
      <div className="ov-modal">
        <div className='ov-thumbnail'>
          {this.props.photos.map((photo, index) => {
            return <img className='ov-thumbnail-photo' id={index} src={photo.thumbnail_url} onClick={this.props.changePhoto}></img>
          })}</div>
          <img className='ov-zoomIn ov-modal-image' src={this.props.photo} alt={this.props.productInfo.description} onClick={this.changeZoomLevel}></img>
        <button id="toggleModal" onClick={this.props.toggleModal}>Close</button>
      </div>
    )
  }
}

export default Modal;