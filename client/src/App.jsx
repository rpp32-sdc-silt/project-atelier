import React from 'react';
import Overview from './Components/Overview/Overview.jsx';
import token from '../../config.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Overview token={token}/>
      </div>
    )
  }
}

export default App;