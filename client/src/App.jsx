import React from 'react';
import Overview from './Components/Overview/Overview.jsx';
import Related from './Components/Related/Related.jsx'
import RR from './Components/RatingsAndReviews/RatingsAndReviews.jsx';
import QandA from './Components/QuestionsAndAnswers/QandA.jsx';
import token from '../../config.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 59553
    }
    this.apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp'
  }
  render() {
    return (
      <div>
        <Overview apiUrl={this.apiUrl} token={token} currentProduct={this.state.currentProduct}/>
        <Related apiUrl={this.apiUrl} token={token} currentProduct={this.state.currentProduct}/>
        <QandA apiUrl={this.apiUrl} token={token} currentProduct={this.state.currentProduct} />
        <RR apiUrl={this.apiUrl} token={token} currentProduct={this.state.currentProduct} />
      </div>
    )
  }
}

export default App;