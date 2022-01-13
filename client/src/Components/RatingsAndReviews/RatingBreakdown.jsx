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
    avg = avg.toFixed(1);
    return avg;
  }

  calculateRecommended(meta) {
    if (Object.keys(meta).length > 0) {
      var percent = parseInt(meta.recommended.true) / (parseInt(meta.recommended.true) + parseInt(meta.recommended.false)) * 100;
      percent = percent.toFixed(1);
      return `${percent}%`;
    }
  }

  ratingClick(e, value) {
    console.log(e.target, value);
  }

  render() {
    var metaData = this.props.meta;
    var display;
    if (Object.keys(metaData).length > 0) {
      let totalReviews = parseInt(this.props.meta.recommended.false) + parseInt(this.props.meta.recommended.true);
      let stars = Object.keys(this.props.meta.ratings).reverse();
      var starsBreakdown = stars.map((star, index) => {
        let style = {
          width: ((parseFloat(this.props.meta.ratings[star]) / totalReviews) * 100).toString().concat('%'),
        }
        return (
          <div className={`rr-rating-bd-${star}stars`} key={index}>{star} stars:
            <div className="rr-progress-bar">
              <div className="rr-rating-bd" style={style} onClick={(e) => this.ratingClick(e, star)}></div>
            </div>
          </div>
        )
      });

      display =
        <div>
          <div className="rr-avg-rating">{this.calculateAvg(metaData.ratings)}
              {/* stars go here */}
          </div>
          <small>{totalReviews} total reviews</small>
          <br/>
          <h4 style={{'line-height': '100%', 'margin-bottom': '5px'}}>Rating Breakdown</h4>
          {starsBreakdown}
          <div className="rr-breakdown-recommend">{this.calculateRecommended(metaData)} recommend this product</div>
        </div>;
    } else {
      display = null;
    }

    return (
      <div className="rr-rating-breakdown">
        {display}
      </div>
    )
  }
}

export default RatingBreakdown;