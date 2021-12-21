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
        {/* Question body goes here*/}
        <AnswersList id={this.props.question.question_id} apiUrl={this.props.apiUrl} />
      </div>
    )
  }
}

export default Question;