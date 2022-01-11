import React from 'react';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  calculateAvg(ratings) {
    // reviews.forEach((review) => {
    //   avg += review.rating;
    // })
    let num = parseInt(ratings['1']) + parseInt(ratings['2']) + parseInt(ratings['3']) + parseInt(ratings['4']) + parseInt(ratings['5']);
    let avg = parseInt(ratings['1']) + (parseInt(ratings['2']) * 2) + (parseInt(ratings['3']) * 3) + (parseInt(ratings['4']) * 4) + (parseInt(ratings['5']) * 5);
    avg /= num;
    avg = avg.toFixed(2);
    return avg;
  }

  calculateRecommended(meta) {
    if (Object.keys(meta).length > 0) {
      var percent = parseInt(meta.recommended.true) / (parseInt(meta.recommended.true) + parseInt(meta.recommended.false)) * 100;
      percent = percent.toFixed(2);
      return `${percent}%`;
    }
  }

  render() {
    var metaData = this.props.meta;
    var display;
    if (Object.keys(metaData).length > 0) {
      let totalReviews = parseInt(this.props.meta.recommended.false) + parseInt(this.props.meta.recommended.true);
      display =
        <div>
          <b>RatingBreakdown</b>
          <div>Number of reviews: {totalReviews}</div>
          <div>Average Rating: {this.calculateAvg(metaData.ratings)}</div>
          <div>Recommended: {this.calculateRecommended(metaData)}</div>
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
        {display}
      </div>
    )
  }
}

export default RatingBreakdown;