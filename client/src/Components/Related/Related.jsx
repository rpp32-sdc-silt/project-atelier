import React, { Component } from 'react';
import ProductList from './ProductList.jsx';
import axios from 'axios'

export default class Related extends Component {
  constructor(props) {
    super(props)

    this.getAllRelatedProductIds = this.getAllRelatedProductIds.bind(this);
    this.getAllEndPoints = this.getAllEndPoints.bind(this);

    this.state = {
      relatedProductsIdList: [],
      endPointList: []

    }
  }

  componentDidMount() {
    this.getAllRelatedProductIds();
    this.getAllEndPoints();
  }

  getAllRelatedProductIds() {
    axios.defaults.headers.common['Authorization'] = this.props.token
    axios.get(this.props.apiUrl + '/products/59553/related')
    .then((results) => { this.setState({relatedProductsIdList: results.data})})
  }

  getAllEndPoints() {
    let list = [];
    for (let i = 0; i < this.state.relatedProductsIdList.length; i++) {
      let id = this.state.relatedProductsIdList[i];
        list.push(this.props.apiUrl + '/products/' + id)
    }
    return list
  }

  render() {
    // console.log(this.getAllEndPoints());
    // console.log(this.state.endPointList)
    return (
      <div>
        {/* <ProductList products={this.state.products}/> */}
      </div>
    )
  }
}