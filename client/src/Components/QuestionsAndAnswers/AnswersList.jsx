import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class AnswersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: []
    }
  }

  //method to get answers list for particular questions id passed through props
  componentDidMount() {
    //make call to api for list using question id
    axios.get(this.props.apiUrl + '/qa/questions/' + this.props.id + '/answers', {
      headers: {
        'Authorization': this.props.token
      },
      params: {
        question_id: this.props.id
      }
    }).then((results) => {
      //save answers list to state
      var answersSorted = results.data.results.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      });
      var finalAnswers = [];

      for (var currentAnswer = 0; currentAnswer < answersSorted.length; currentAnswer++) {
        if (answersSorted[currentAnswer].answerer_name === 'Seller') {
          finalAnswers.push(answersSorted[currentAnswer]);
        }
      }

      for (var currentAnswer = 0; currentAnswer < answersSorted.length; currentAnswer++) {
        if (answersSorted[currentAnswer].answerer_name !== 'Seller') {
          finalAnswers.push(answersSorted[currentAnswer]);
        }
      }

      this.setState({ answers: finalAnswers });
    }).catch((err) => { console.log('Error getting answers from API: ' + err) });
  }

  render() {
    return (
      <div className='AnswersListComponent'>
        <h2>A: </h2>
        <ol>
          {
            this.state.answers.map((answer, index) => {
              var months = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];
              var monthNumber = Number(answer.date.slice(5, 7));
              var monthName = months[monthNumber - 1];
              var year = answer.date.slice(0, 4);
              var day = answer.date.slice(8, 10);
              var answerer;

              if (answer.answerer_name === 'Seller') {
                answerer = <p className='seller'>by {answer.answerer_name}, </p>
              } else {
                answerer = <p className='QandAby'>by {answer.answerer_name}, </p>
              }

              if (answer.photos.length > 0) {
                return <li className={index > 1 ? 'answersListItem moreAnswers' : 'answersListItem'} key={index}>
                  <p className='QandAAnswerBody'>{answer.body}</p>
                  {
                    answer.photos.map((photo, index) => {
                      return <img key={index} className='QandAAnswerPhoto' src={photo.url} />
                    })
                  }
                  {answerer}
                  <p className='timeAnswered'>{monthName + ' ' + day + ', ' + year}</p>
                  <p> | </p>
                  <p className='QandAHelpfulAnswer'>Helpful? </p>
                  <a className='QandAyes' onClick={(event) => { this.props.trackClicks(event, 'Questions & Answers'); }}>Yes ({answer.helpfulness})</a>
                  <p> | </p>
                  <p className='QandAreportAnswer' onClick={(event) => {
                    this.props.trackClicks(event, 'Questions & Answers');
                    event.target.textContent = 'Reported';
                    event.target.style.cursor = 'default';
                    event.target.style.opacity = 0.5;
                    event.target.style['text-decoration'] = 'none';
                  }}>Report</p>
                </li>
              } else {
                return <li className={index > 1 ? 'answersListItem moreAnswers' : 'answersListItem'} key={index}>
                  <p className='QandAAnswerBody'>{answer.body}</p>
                  {answerer}
                  <p className='timeAnswered'>{monthName + ' ' + day + ', ' + year}</p>
                  <p> | </p>
                  <p className='QandAHelpfulAnswer'>Helpful? </p>
                  <a className='QandAyes' onClick={(event) => { this.props.trackClicks(event, 'Questions & Answers'); }}>Yes ({answer.helpfulness})</a>
                  <p> | </p>
                  <p className='QandAreportAnswer' onClick={(event) => {
                    this.props.trackClicks(event, 'Questions & Answers');
                    event.target.textContent = 'Reported';
                    event.target.style.cursor = 'default';
                    event.target.style.opacity = 0.5;
                    event.target.style['text-decoration'] = 'none';
                  }}>Report</p>
                </li>
              }
            })
          }
        </ol>
      </div>
    )
  }
}

export default AnswersList;