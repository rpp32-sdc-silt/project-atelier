import React from 'react';
class Cart extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      size: '',
      selectedQuantity: 0,
      maxQuantity: 0
    };
    this.selectSize = this.selectSize.bind(this);
    this.selectQuantity = this.selectQuantity.bind(this);
  }
  selectSize(event) {
    var item = event.target.value.slice(0, event.target.value.length - 6).split(':')
    this.setState({size: item[0]})
    this.setState({maxQuantity: Number.parseInt(item[1])})
  }

  selectQuantity(event){
    this.setState({selectedQuantity: Number.parseInt(event.target.value)})
  }

  render() {
    return (<form><label htmlFor="size">Size</label>
      <select name="size" onChange={this.selectSize}>Size
        {this.props.inventory.map((item, index) => <option key={'item' + index}>{item.size + ':' + item.quantity + ' items'}</option>)}
      </select>
      <label htmlFor="quantity">Quantity</label>
      <select name="quantity" onChange={this.selectQuantity}>Quantity
      {Array.from({length: this.state.maxQuantity}, (blank, i) => i).map((option, i) => {
        return <option key={'quantity' + i}>{i}</option>
        })}
      </select>
    </form>)
  }
}

export default Cart;