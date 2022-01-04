import React from 'react';
import ReactDOM from 'react-dom';
import AnswersList from './AnswersList.jsx';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Q: {this.props.question.question_body}</h2>
        <p>Helpful?</p>
        <p id='yes'>Yes ({this.props.question.question_helpfulness}) |</p>
        <p id='addAnswer'>Add Answer</p>
        <AnswersList id={this.props.question.question_id} apiUrl={this.props.apiUrl} token={this.props.token} />
      </div>
    )
  }
}

export default Question;