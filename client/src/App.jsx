import React from 'react';
import axios from 'axios';
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
    this.apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
    this.trackClicks = this.trackClicks.bind(this);
  }

  //method to post to interations api
  //takes event object, and widget name (string) as arguments
  trackClicks(event, widgetName) {
    var timeClicked = new Date();
    var element = event.target;

    axios.post(this.apiUrl + '/interactions', {
      headers: {
        'Authorization': token
      },
      params: {
        element: element.toString(),
        widget: widgetName,
        time: timeClicked.toString()
      }
    }).then(() => {
      console.log('Successfully tracked click');
    }).catch((error) => {
      console.log('Error posting to interactions API: ' + error);
    });
  }

  render() {
    return (
      <div>
        <Overview apiUrl={this.apiUrl} token={token} currentProduct={this.state.currentProduct} trackClicks={this.trackClicks} />
        <Related apiUrl={this.apiUrl} token={token} currentProduct={this.state.currentProduct} trackClicks={this.trackClicks} />
        <QandA apiUrl={this.apiUrl} token={token} currentProduct={this.state.currentProduct} trackClicks={this.trackClicks} />
        <RR apiUrl={this.apiUrl} token={token} currentProduct={this.state.currentProduct} trackClicks={this.trackClicks} />
      </div>
    )
  }
}

export default App;