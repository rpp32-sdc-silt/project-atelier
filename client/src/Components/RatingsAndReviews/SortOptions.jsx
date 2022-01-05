import React from 'react';

class SortOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <label>Sort on: </label>
        <select onChange={this.props.changeSort}>
          <option value="relevant">Relevant</option>
          <option value="newest">Newest</option>
          <option value="helpful">Helpful</option>
        </select>
        <br/>
        <br/>
      </div>
    )
  }
}

export default SortOptions;