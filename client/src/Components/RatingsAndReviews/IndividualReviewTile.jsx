import React from 'react';
import axios from 'axios';

class IndividualReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpful: false,
      helpfulCount: Number(this.props.review.helpfulness)
    };
    this.helpfulClick = this.helpfulClick.bind(this);
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

  helpfulClick() {
    if ( !this.state.helpful ) {
      axios.put(`${this.props.apiUrl}/reviews/${this.props.review.review_id}/helpful`)
        .then(() => {
          console.log('post success');
          this.setState({
            helpful: true,
            helpfulCount: this.state.helpfulCount + 1
          })
        })
        .catch((err) => {
          console.log('API post /reviews/<review_id>/helpful failed with ', err);
        })
    }
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
          <span onClick={this.helpfulClick}> Yes({this.state.helpfulCount})</span>
        </div>
      </div>
    )
  }
}

export default IndividualReviewTile;