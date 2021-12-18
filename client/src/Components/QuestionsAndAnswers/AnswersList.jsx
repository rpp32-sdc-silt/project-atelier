import React from 'react';
import ReactDOM from 'react-dom';

class AnswersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: []
    }
  }

  //method to get answers list for particular questions id passed through props
  getList(id) {
    //make call to api for list using question id
    //save answers list to state
  }

  render() {
    <div>
      {/* Call getList here */}
      <ol>
        {
          this.state.answers.map((answer, index) => {
            return <li key={index}>{/*Answer information*/}</li>
          })
        }
      </ol>
    </div>
  }
}

export default AnswersList;