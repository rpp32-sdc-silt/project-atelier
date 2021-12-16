import React from 'react';
import axios from 'axios';
import Gallery from './Gallery.jsx'
import Description from './Description.jsx';
import Styles from './Styles.jsx';
import Cart from './Cart.jsx';

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
        <Styles/>
        <Cart/>
        <Description/>
      </div>
    )
  }
}

export default Overview;