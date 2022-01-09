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
      this.setState({ answers: results.data.results });
    }).catch((err) => { console.log('Error getting answers from API: ' + err) });
  }

  render() {
    return (
      <div>
        {console.log('answers*********', this.state.answers)}
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
              if (answer.photos.length > 0) {
                return <li key={index}>
                  <p className='QandAAnswerBody'>{answer.body}</p>
                  {
                    answer.photos.map((photo) => {
                      return <img src={photo.url} />
                    })
                  }
                  <p className='QandAby'>by {answer.answerer_name}, {monthName + ' ' + day + ', ' + year}</p>
                  <p> | </p>
                  <p className='QandAHelpfulAnswer'>Helpful? </p>
                  <p className='QandAyes'>Yes ({answer.helpfulness})</p>
                  <p> | </p>
                  <p className='QandAreportAnswer'>Report</p>
                </li>
              } else {
                return <li key={index}>
                  <p className='QandAAnswerBody'>{answer.body}</p>
                  <p className='QandAby'>by {answer.answerer_name}, {monthName + ' ' + day + ', ' + year}</p>
                  <p> | </p>
                  <p className='QandAHelpfulAnswer'>Helpful? </p>
                  <p className='QandAyes'>Yes ({answer.helpfulness})</p>
                  <p> | </p>
                  <p className='QandAreportAnswer'>Report</p>
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