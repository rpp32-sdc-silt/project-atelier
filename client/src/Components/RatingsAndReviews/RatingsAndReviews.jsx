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
      sorting: 'relevance',
      meta: {},
      productName: ''
    };
    this.changeSort = this.changeSort.bind(this);
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = this.props.token
    axios.get(`${this.props.apiUrl}/reviews/?product_id=${this.props.currentProduct}&sort=relevant`)
      .then((results) => {
        this.setState({
          reviews: results.data.results
        })
        // console.log('this.state.reviews: ', this.state.reviews);
      })
      .catch((err) => {
        console.log('API get /reviews failed with error: ', err);
      })
    axios.get(`${this.props.apiUrl}/products/${this.props.currentProduct}`)
      .then((result) => {
        this.setState({
          productName: result.data.name
        })
      })
      .catch((err) => {
        console.log(`API get /products/${this.props.currentProduct} failed with error: `, err);
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
    axios.get(`${this.props.apiUrl}/reviews/meta/?product_id=${this.props.currentProduct}`)
      .then((results) => {
        this.setState({
          meta: results.data
        })
        // console.log('this.state.meta: ', this.state.meta);
      })
      .catch((err) => {
        console.log('API get /reviews/meta failed with error: ', err);
      })
  }

  changeSort(e) {
    axios.get(`${this.props.apiUrl}/reviews/?product_id=${this.props.currentProduct}&sort=${e.target.value}`)
      .then((results) => {
        this.setState({
          reviews: results.data.results
        })
      })
      .catch((err) => {
        console.log('API get /reviews failed with error: ', err);
      })
  }

  render() {
    return (
      <div>
        <h2>Ratings & Reviews</h2>
        <div className="rr-container">
          <div className="rr-breakdown">
            <RatingBreakdown reviews={this.state.reviews} meta={this.state.meta} />
            <ProductBreakdown meta={this.state.meta} />
          </div>
          <div className="rr-reviews">
            <SortOptions changeSort={this.changeSort} />
            {this.state.reviews.map((review) => (
              <div key={review.review_id}>
                <IndividualReviewTile review={review}/>
                <br/>
              </div>
            ))}
            <NewReview productName={this.state.productName}/>
          </div>
        </div>
      </div>
    )
  }
}

export default RR;