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
    // this.getOneProductById();
  }

  getAllRelatedProductIds() {
    axios.defaults.headers.common['Authorization'] = token
    axios.get(this.props.apiUrl + '/products/59553/related')
    .then((results) => { this.setState({relatedProductsIdList: results.data})});
  }

  getAllProductsInfoFromId() {
    let counter = this.state.endPointList.flat();
    console.log(counter)
  }
//   const arr = ['one', 'two', 'three', 'four'];

// function func(arr) {
//   let count = arr.length;
//   while(count > 0) {
//     console.log(arr[0])
//     arr = arr.slice(1)
//     count--
//   }
//   return;
// }

// getOneProductById() {
  //   axios.defaults.headers.common['Authorization'] = token
  //   axios.get(this.props.apiUrl + '/products/59554')
  //   .then((results) => { this.setState({product: results.data})});
  // }



  endPoints() {
    const list = []
    for (var i = 0; i < this.state.relatedProductsIdList.length; i++) {

      let id = this.state.relatedProductsIdList[i];
      list.push(this.props.apiUrl + '/products/' + id)
    }
    // console.log(this.state.relatedProductsIdList.length)
    this.state.endPointList.push(list)

  }

  render() {
    this.endPoints();

    console.log(this.state.endPointList.flat().map(item => {
      return item
    }))
    return (
      <div>
        {/* <ProductList products={this.state.products}/> */}
      </div>
    )
  }
}