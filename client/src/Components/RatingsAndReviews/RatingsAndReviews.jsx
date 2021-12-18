import React from 'react';
import axios from 'axios';
import SortOptions from './SortOptions.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import NewReview from './NewReview.jsx';
import IndividualReviewTile from './IndividualReviewTile.jsx';


class RR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      productId: '59553'
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = this.props.token
    axios.get(`${this.props.apiUrl}/reviews/?product_id=${this.state.productId}`)
      .then((results) => {
        console.log('axios results: ', results);
        this.setState({
          reviews: results.data.results
        })
      })
      .catch((err) => {
        console.log('API get failed with error: ', err);
      })
    // =======================
    // Alternative Method
    // =======================
    // axios({
    //  method: 'get',
    //  url: this.props.apiUrl + '/reviews/?product_id=59553',
    //  headers: {
    //    'Authorization': this.props.token
    //  }
    // })
    //   .then ...
  }

  render() {
    return (
      <div>
        <h1>Ratings and Reviews</h1>
        <h3>Reviews List</h3>
        <SortOptions />
        <RatingBreakdown />
        {this.state.reviews.map((review) => (
          <IndividualReviewTile key={review.review_id} review={review}/>
        ))}
        <NewReview />
      </div>
    )
  }
}

export default RR;