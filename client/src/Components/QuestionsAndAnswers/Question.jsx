import React from 'react';
import ReactDOM from 'react-dom';
import AnswersList from './AnswersList';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div>
      {/* Question body goes here*/}
      <AnswersList id={this.props.question.question_id}/>
    </div>
  }
}

export default Question;