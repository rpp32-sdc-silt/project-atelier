import React from 'react';

class Modal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      zoomLevel: 0,
      posX: 0,
      posY: 0
    };
  }

  render(){
    return (
      <div className="ov-modal">
        <div className='ov-thumbnail'>
          {this.props.photos.map((photo, index) => {
              return <img className='ov-thumbnail-photo' id={index} src={photo.thumbnail_url} onClick={this.props.changePhoto}></img>
          })}</div>
        <img src={this.props.photo}></img>
        <button id="toggleModal" onClick={this.props.toggleModal}>Close</button>
      </div>
    )
  }
}

export default Modal;