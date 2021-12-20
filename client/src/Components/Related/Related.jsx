import React, { Component } from 'react';
import ProductList from './ProductList.jsx';
import axios from 'axios'

export default class Related extends Component {
  constructor(props) {
    super(props)

    this.getAllRelatedProductIds = this.getAllRelatedProductIds.bind(this);
    this.getAllEndPoints = this.getAllEndPoints.bind(this);
    this.getAllProducts = this.getAllProducts.bind(this);

    this.state = {
      relatedProductsIdList: [],
      endPointList: [],
      products: []

    }
  }

  componentDidMount() {
    this.getAllRelatedProductIds();

    // this.getAllEndPoints();
  }

  getAllRelatedProductIds() {
    axios.defaults.headers.common['Authorization'] = this.props.token
    axios.get(this.props.apiUrl + '/products/59553/related')
    .then((results) => { this.setState({relatedProductsIdList: results.data},
      () => this.getAllEndPoints())})
  }

  getAllEndPoints() {
    let list = [];
    for (let i = 0; i < this.state.relatedProductsIdList.length; i++) {
      let id = this.state.relatedProductsIdList[i];
        list.push(this.props.apiUrl + '/products/' + id)
    }
    this.setState({
      endPointList: list
    }, () => this.getAllProducts())
    // return list
  }
  getAllProducts() {
    axios.all(this.state.endPointList.map((endpoint) => {
    axios.defaults.headers.common['Authorization'] = this.props.token
    return axios.get(endpoint)}))
    .then(
      (res) => this.setState({products: res.map(item => item.data)})
    );
  }



  render() {
    // console.log(this.getAllEndPoints());
    console.log(this.state.products)
    return (
      <div>
        {/* <ProductList products={this.state.products}/> */}
      </div>
    )
  }
}