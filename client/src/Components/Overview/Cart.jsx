import React from 'react';
class Cart extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      size: '',
      selectedQuantity: 0,
      maxQuantity: 0,
      sku: null
    };
    this.selectSize = this.selectSize.bind(this);
    this.selectQuantity = this.selectQuantity.bind(this);
  }
  selectSize(event) {
    if (event.target.value !== 'Size:') {
      var skuAndQty = event.target.selectedOptions[0].id;
      var item = event.target.value
      this.setState({ size: item })
      this.setState({ maxQuantity: Number.parseInt(skuAndQty.split('qty')[1]) })
      this.setState({ sku: Number.parseInt(skuAndQty.split('qty')[0]) })
    } else {
      this.setState({ size: '' });
      this.setState({ maxQuantity: 0 })
      this.setState({ sku: null })
    }
  }

  selectQuantity(event) {
    this.setState({ selectedQuantity: Number.parseInt(event.target.value) })
  }

  render() {
    return (<form><label htmlFor="size">Size</label>
      <select name="size" onChange={this.selectSize}>Size
        <option key='default'>Size:</option>
        {this.props.inventory.map((item, index) => <option key={item[0] + 'qty' + item[1].quantity} id={item[0] + 'qty' + item[1].quantity}>{item[1].size}</option>)}
      </select>
      <label htmlFor="quantity">Quantity</label>
      <select name="quantity" onChange={this.selectQuantity}>Quantity
        {Array.from({ length: this.state.maxQuantity }, (blank, i) => i).map((option, i) => {
          return <option key={'quantity' + i}>{i}</option>
        })}
      </select>
    </form>)
  }
}

export default Cart;