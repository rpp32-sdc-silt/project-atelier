import React from 'react';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  calculateAvg(reviews) {
    var avg = 0;
    reviews.forEach((review) => {
      avg += review.rating;
    })
    avg /= reviews.length;
    return avg;
  }

  calculateRecommended(reviews) {
    var percent = 0;
    reviews.forEach((review) => {
      if (review.recommend) {
        percent++;
      }
    })
    percent = (percent / reviews.length) * 100;
    return `${percent}%`;
    // ============================================================
    // Should recommendation % come from review data or meta data?
    // ============================================================
    // console.log('meta', meta);
    // if (Object.keys(meta).length > 0) {
    //   var percent = meta.recommended.true / (meta.recommended.true + meta.recommended.false) * 100;
    //   return `${percent}%`;
    // }
  }

  render() {
    // console.log(this.props.meta);
    var metaData = this.props.meta;
    var display;
    if (Object.keys(metaData).length > 0) {
      display =
        <div>
          <div>5 stars: {this.props.meta.ratings[5]}</div>
          <div>4 stars: {this.props.meta.ratings[4]}</div>
          <div>3 stars: {this.props.meta.ratings[3]}</div>
          <div>2 stars: {this.props.meta.ratings[2]}</div>
          <div>1 stars: {this.props.meta.ratings[1]}</div>
        </div>;
    } else {
      display = null;
    }

    return (
      <div>
        <b>RatingBreakdown</b>
        <div>Number of reviews: {this.props.reviews.length}</div>
        <div>Average Rating: {this.calculateAvg(this.props.reviews)}</div>
        <div>Recommended: {this.calculateRecommended(this.props.reviews)}</div>
        {display}
        <br/>
      </div>
    )
  }
}

export default RatingBreakdown;