import React, { Component } from 'react';
import ProductList from './ProductList.jsx';
import axios from 'axios'
import token from '../../../../config.js';

export default class Related extends Component {
  constructor(props) {
    super(props)

    this.getAllRelatedProductIds = this.getAllRelatedProductIds.bind(this);
    // this.getOneProductById = this.getOneProductById.bind(this);
    this.endPoints = this.endPoints.bind(this);
    this.getAllProductsInfoFromId = this.getAllProductsInfoFromId.bind(this)

    this.state = {
      relatedProductsIdList: [],
      product: [],
      endPointList: []

    }
  }

  componentDidMount() {
    this.getAllRelatedProductIds();
    this.getAllProductsInfoFromId();
  }

  getAllRelatedProductIds() {
    axios.defaults.headers.common['Authorization'] = token
    axios.get(this.props.apiUrl + '/products/59553/related')
    .then((results) => { this.setState({relatedProductsIdList: results.data})});
  }

  getAllProductsInfoFromId() {
    let counter = this.state.endPointList.flat();
  }

  endPoints() {
    const list = []
    for (var i = 0; i < this.state.relatedProductsIdList.length; i++) {

      let id = this.state.relatedProductsIdList[i];
      list.push(this.props.apiUrl + '/products/' + id)
    }
    this.state.endPointList.push(list)

  }

  render() {
    this.endPoints();
    return (
      <div>
        {/* <ProductList products={this.state.products}/> */}
      </div>
    )
  }
}