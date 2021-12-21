import React from 'react';

class IndividualReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {review_id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness, photos} = this.props.review;
    return (
      <div>
        <b>IndividualReviewTile</b>
        <div className="rr-top-bar">
          <span className="rating">Rating: {rating}</span>
          <span className="recommend">{recommend ? 'Recommended' : null}</span>
          <span className="reviewer_name">Reviewer: {reviewer_name}</span>
          <span className="date">Date: {date}</span>
        </div>
        <div className="summary">Summary: {summary}</div>
        <div className="body">Body: {body}</div>
        <div className="helpfulness">Helpful? {helpfulness}</div>
      </div>
    )
  }
}

export default IndividualReviewTile;