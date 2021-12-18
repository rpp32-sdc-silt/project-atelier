import React from 'react';
import ReactDom from 'react-dom';
import Question from './Question.jsx';

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
    //store questions data in state
  }

  render() {
    <div id="QandA">
      {
        this.state.questions.map((question) => {
          return <Question question={question} />
        });
      }
    </div>
  }
}
export default QandA;