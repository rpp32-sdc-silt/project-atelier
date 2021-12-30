import React from 'react';

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  newReviewClickHandler() {
    this.setState({
      showModal: true
    })
  }

  closeBtnHandler() {
    // console.log('close button clicked');
    this.setState({
      showModal: false
    })
  }

  render() {
    var modal;
    if (!this.state.showModal) {
      modal = null;
    } else {
      modal =
        <div className="rr-modal">
          <div className="rr-modal-content">
            <span className="rr-close-btn" onClick={e => {this.closeBtnHandler();}}>x</span>
            <p>modal text</p>
          </div>
        </div>
    }
    return (
      <div>
        <button id="rr-modal-btn" onClick={e => {this.newReviewClickHandler();}}>Add A Review</button>
        {modal}
        <br/>
      </div>
    )
  }
}

export default NewReview;