import React from 'react';
import $ from 'jquery';
import anime from 'animejs';

class Modal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      zoom: false,
      screenWidth: null,
      screenHeight: null
    };
    this.changeZoomLevel = this.changeZoomLevel.bind(this);
    this.panOnMouseMove = this.panOnMouseMove.bind(this);
  }

  changeZoomLevel(e) {
    //original state: right -100px
    //zoomed state: right: 225px;
    if (this.state.zoom === false) {
      this.setState({ zoom: true });
      this.setState({ screenWidth: e.view.screen.width, screenHeight: e.view.screen.height });
      $(e.target).addClass('ov-zoomedIn').removeClass('ov-zoomedOut');
    } else {
      this.setState({ zoom: false });
      $(e.target).addClass('ov-zoomedOut').removeClass('ov-zoomedIn');
    }
  }

  panOnMouseMove(e) {
    var x = e.clientX;
    var y = e.clientY;
    $(e.target).css({'transform-origin': `${x - (this.state.screenWidth * 0.5)}px ${y}px`});
  }

  render() {
    return (
      <div className="ov-modal">
        <div className='ov-thumbnail'>
          {this.props.photos.map((photo, index) => {
            return <img className='ov-thumbnail-photo' id={index} src={photo.thumbnail_url} onClick={this.props.changePhoto}></img>
          })}</div>
        <img className='ov-zoomedOut ov-modal-image' src={this.props.photo} alt={this.props.productInfo.description} onClick={this.changeZoomLevel} onMouseMove={this.panOnMouseMove} ></img>
        <button id="ov-toggleModal" onClick={this.props.toggleModal}>Close</button>
      </div>
    )
  }
}

export default Modal;