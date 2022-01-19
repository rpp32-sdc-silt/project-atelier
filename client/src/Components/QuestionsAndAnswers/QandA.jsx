import React from 'react';
import ReactDom from 'react-dom';
import Question from './Question.jsx';
import axios from 'axios';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
  }

  //method to retrieve data from api on render
  componentDidMount() {
    //make call to api
    axios.get(this.props.apiUrl + '/qa/questions', {
      headers: {
        'Authorization': this.props.token
      },
      params: {
        product_id: this.props.currentProduct
      }
    }).then((results) => {
      //store questions data in state
      var questionsUnsorted = results.data.results;
      var sorted = questionsUnsorted.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      });

      this.setState({questions: sorted});
    }).catch((err) => {console.log('Error getting questions from API: ' + err)});
  }

  //method for click of "More Answered Questions" button to make more questions visible
  showMoreQuestions() {
    var hiddenQuestions = document.getElementsByClassName('moreQuestions');
    var questionsButton = document.getElementById('moreQuestionsButton');

    for (var currentElement = 0; currentElement < 2; currentElement++) {
      if(hiddenQuestions[currentElement] !== undefined) {
        hiddenQuestions[currentElement].classList.remove('moreQuestions');
      }
    }
    if(hiddenQuestions.length === 0) {
      questionsButton.style.visibility = 'collapse';
    }
  }

  render() {
    var questionsButton;

    if(this.state.questions.length > 2) {
      var questionsButton = <button id='moreQuestionsButton' onClick={ (event) => { this.showMoreQuestions(); this.props.trackClicks(event, 'Questions & Answers'); }}>More Answered Questions</button>;
    }

    return (
      <div id="QandA">
        <h2 className='QandATitle'>Questions & Answers</h2>
        <div className='QandAList'>
        {
          this.state.questions.map((question, index) => {
            return (
            <Question key={index} question={question} apiUrl={this.props.apiUrl} token={this.props.token} trackClicks={this.props.trackClicks} index={index}/>
            )
          })
        }
        </div>
        {questionsButton}
      </div>
    )
  }
}

export default QandA;