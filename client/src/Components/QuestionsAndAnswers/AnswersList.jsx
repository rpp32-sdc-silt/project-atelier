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
      this.setState({answers: results.data.results});
    }).catch((err) => {console.log('Error getting answers from API: ' + err)});
  }

  render() {
    return (
      <div>
        {console.log(this.state.answers)}
        <h2>A: </h2>
        <ol>
          {
            this.state.answers.map((answer, index) => {
              return <li key={index}>
                <p>{answer.body}</p>
              </li>
            })
          }
        </ol>
      </div>
    )
  }
}

export default AnswersList;