import React from 'react';
import axios from 'axios';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProduct: null
    }
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = this.props.token
    axios.get(this.props.apiUrl + '/products')
    .then((results) => {
      this.setState({products: results.data})
    });
  }

  render() {
    return (
      <div>
        <h1>Carousel</h1>
        <div>{this.state.products.map(product => {
          return <div key={product.id}>{product.name + ': ' + product.description}</div>
        })}</div>
        <h2>Style selector</h2>
        <h3>Cart</h3>
        <h3>Description</h3>
      </div>
    )
  }
}

export default Overview;