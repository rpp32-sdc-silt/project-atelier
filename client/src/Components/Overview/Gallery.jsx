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
        <img className="ov-gallery" height="750" src={this.props.prevPhoto}></img>
        <img className="ov-gallery" height="750" src={this.props.photo} onClick={(e)=> {this.props.toggleModal(e); this.props.trackClicks(e, 'Overview');}}></img>
        <img className="ov-gallery" height="750" src={this.props.nextPhoto}></img>
        <button id="back" className='ov-changePhoto' onClick={(e)=> {this.props.changePhoto(e); this.props.trackClicks(e, 'Overview');}}>←</button>
        <button id="forward" className='ov-changePhoto' onClick={(e)=> {this.props.changePhoto(e); this.props.trackClicks(e, 'Overview');}}>→</button>
      </>
    )
  }
}

export default Gallery;