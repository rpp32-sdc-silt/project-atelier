import React from 'react';

class Gallery extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentUrl: ''
    };
  }

  render(){
    return (
      <>
        <img className="ov-gallery" src={this.props.prevPhoto}></img>
        <img className="ov-gallery" src={this.props.photo} onClick={this.props.toggleModal}></img>
        <img className="ov-gallery" src={this.props.nextPhoto}></img>
        <button id="back" className='ov-changePhoto' onClick={this.props.changePhoto}>←</button>
        <button id="forward" className='ov-changePhoto' onClick={this.props.changePhoto}>→</button>
      </>
    )
  }
}

export default Gallery;