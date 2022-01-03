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
        <img src={this.props.photo}></img>
        <button id="toggleModal" onClick={this.props.toggleModal}>Close</button>
      </div>
    )
  }
}

export default Modal;