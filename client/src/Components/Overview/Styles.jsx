import React from 'react';

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (<div>{this.props.thumbnails ?
      this.props.thumbnails.map((image, id) => {
      return <img className='styles' id={id} key={'style' + id} src={image} onClick={this.props.changeStyle} alt={this.props.styles[id].name} title={this.props.styles[id].name}></img>
      }): ''}</div>)
  }
}

export default Styles;