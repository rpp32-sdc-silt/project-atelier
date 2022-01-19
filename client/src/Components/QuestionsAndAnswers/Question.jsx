import React from 'react';
import ReactDOM from 'react-dom';
import AnswersList from './AnswersList.jsx';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.index < 2) {
      return (
        <div className='QuestionComponent' data-testid='QuestionComponent'>
          <h2 className='questionBody'>Q: {this.props.question.question_body}</h2>
          <p className='QandAHelpfulQuestion'>Helpful?</p>
          <p className='QandAyes'>Yes ({this.props.question.question_helpfulness})</p>
          <p> | </p>
          <p className='QandAAddAnswer'>Add Answer</p>
          <AnswersList id={this.props.question.question_id} apiUrl={this.props.apiUrl} token={this.props.token} trackClicks={this.props.trackClicks}/>
        </div>
      )
    } else {
      return (
        <div className='QuestionComponent moreQuestions' data-testid='QuestionComponent'>
          <h2 className='questionBody'>Q: {this.props.question.question_body}</h2>
          <p className='QandAHelpfulQuestion'>Helpful?</p>
          <p className='QandAyes'>Yes ({this.props.question.question_helpfulness})</p>
          <p> | </p>
          <p className='QandAAddAnswer'>Add Answer</p>
          <AnswersList id={this.props.question.question_id} apiUrl={this.props.apiUrl} token={this.props.token} trackClicks={this.props.trackClicks}/>
        </div>
      )
    }
  }
}

export default Question;