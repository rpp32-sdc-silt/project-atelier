import React from 'react';

class IndividualReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderStars(rating) {
    var count = 0;
    var stars = [];
    for (var i = 0; i < 5; i++) {
      if (count < rating) {
        stars.push(<span className="fa fa-star rr-star"></span>)
        count++;
      } else {
        stars.push(<span className="fa fa-star"></span>)
      }
    }
    return stars;
  }

  render() {
    const {review_id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness, photos} = this.props.review;
    var isRecommended = recommend ? 'fa fa-check' : null;
    var recValue = recommend ? '   I recommend this product' : null;
    return (
      <div className="rr-individual-review">
        <div className="rr-top-bar">
          <span className="rr-rating">{this.renderStars(rating)}</span>
          <span className="rr-name-date">{reviewer_name}, {date.slice(0, 10)}</span>
        </div>
        <b>{summary}</b>
        <div className="rr-body">{body}</div>
        <span className={isRecommended}>{recValue}</span>
        <div className="rr-helpful-report-style">
          Helpful?
          <span > Yes({helpfulness})</span>
        </div>
      </div>
    )
  }
}

export default IndividualReviewTile;