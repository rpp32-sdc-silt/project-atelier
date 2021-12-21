import React from 'react';

function Description(props) {
  var productInfo = props.productInfo;
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{productInfo.name}</td>
          <td>{productInfo.category}</td>
          <td>{productInfo.description}</td>
          <td>${productInfo.default_price}</td>
        </tr>
        <tr>
          <th>Features</th>
        </tr>
        <tr>
        {productInfo.features? productInfo.features.map((feature, id) => <tr key={'feature' + id}><td><b>{feature.feature}</b>: {feature.value}</td></tr>): ''}
        </tr>
      </tbody>
    </table>
  )
}

export default Description;