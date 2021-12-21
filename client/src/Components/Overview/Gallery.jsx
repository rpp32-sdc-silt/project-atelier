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
        <button id="back" onClick={this.props.changePhoto}>←</button>
        <img className="ov-gallery" src={this.props.photo}></img>
        <button id="forward" onClick={this.props.changePhoto}>→</button>
      </>
    )
  }
}

export default Gallery;