import React from 'react';

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (<div>{this.props.thumbnails? this.props.thumbnails.map((image, id) => <img className='styles' key={id} src={image}></img>): ''}</div>)
  }
}

export default Styles;