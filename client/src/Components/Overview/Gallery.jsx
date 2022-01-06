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
        <button id="back" className='ov-changePhoto' onClick={this.props.changePhoto}>←</button>
        <img className="ov-gallery" alt={this.props.productInfo.description}src={this.props.photo} onClick={this.props.toggleModal}></img>
        <button id="forward" className='ov-changePhoto' onClick={this.props.changePhoto}>→</button>
        <img className="ov-gallery" src={this.props.nextPhoto}></img>
      </>
    )
  }
}

export default Gallery;