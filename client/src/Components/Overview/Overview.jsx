import React from 'react';
import axios from 'axios';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    this.apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp'
  }

  componentDidMount() {
    axios.get(this.apiUrl + '/products', {headers: {"Authorization": this.props.token}})
    .then((results) => {
      this.setState({products: results.data})
    })
  }

  render() {
    return (
      <div>
        <h2>Carousel</h2>
        <div>{this.state.products.map(product => {
          return <div key={product.id}>{product.name}</div>
        })}</div>
        <h3>Style selector</h3>
        <h3>Cart</h3>
        <h3>Description</h3>
      </div>
    )
  }
}

export default Overview;