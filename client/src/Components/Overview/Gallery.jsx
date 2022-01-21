import React from 'react';

class Gallery extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentUrl: ''
    };
  }

  render() {
    var prevPhoto;
    var backButton;
    var nextPhoto;
    var nextButton;
    if (this.props.currentPhotoId > 0) {
      prevPhoto = <img className="ov-gallery" max-height="750" max-width="750" src={this.props.prevPhotoUrl}></img>
      backButton = <button id="back" className='ov-changePhoto' onClick={(e) => { this.props.changePhoto(e); this.props.trackClicks(e, 'Overview'); }}>←</button>
    }

    if (this.props.nextPhotoId <= this.props.maxLength) {
      nextPhoto = <img className="ov-gallery" max-height="750" max-width="750" src={this.props.nextPhotoUrl}></img>
      nextButton = <button id="forward" className='ov-changePhoto' onClick={(e) => { this.props.changePhoto(e); this.props.trackClicks(e, 'Overview'); }}>→</button>
    }
    return (
      <div class="ov-gallery-container">
        {prevPhoto}
        <img className="ov-gallery" max-height="750" max-width="750" src={this.props.currentPhotoUrl} onClick={(e) => { this.props.toggleModal(e); this.props.trackClicks(e, 'Overview'); }}></img>
        {nextPhoto}
        {backButton}
        {nextButton}
      </div>
    )
  }
}

export default Gallery;