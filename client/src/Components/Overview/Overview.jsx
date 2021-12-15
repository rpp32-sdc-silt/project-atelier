import React from 'react';
import axios from 'axios';
import Gallery from './Gallery.jsx'
class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      productInfo: []
    }
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = this.props.token
    axios.get(this.props.apiUrl + '/products/' + this.props.currentProduct + '/styles')
    .then((results) => {
      this.setState({styles: results.data.results})
    });
    axios.get(this.props.apiUrl + '/products/' + this.props.currentProduct)
    .then((results) => {
      this.setState({productInfo: results.data})
    });
  }

  render() {
    return (
      <div>
        <Gallery/>
        <h2>Style selector</h2>
        <h3>Cart</h3>
        <h3>Description</h3>
      </div>
    )
  }
}

export default Overview;