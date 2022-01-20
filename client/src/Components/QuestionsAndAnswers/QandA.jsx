import React from 'react';
import ReactDom from 'react-dom';
import { Modal, CloseButton } from 'react-bootstrap';
import Question from './Question.jsx';
import axios from 'axios';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      showModal: false,
      productName: ''
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

      this.setState({ questions: sorted });
    }).catch((err) => { console.log('Error getting questions from API: ' + err) });

    axios.get(this.props.apiUrl + '/products/' + this.props.currentProduct, {
      headers: {
        'Authorization': this.props.token
      },
      params: {
        product_id: this.props.currentProduct
      }
    }).then((results) => {
      this.setState({ productName: results.data.name });
    }).catch((err) => {
      console.log('Error getting product name: ' + err);
    });
  }

  //method for click of "More Answered Questions" button to make more questions visible
  showMoreQuestions() {
    var hiddenQuestions = document.getElementsByClassName('moreQuestions');
    var questionsButton = document.getElementById('moreQuestionsButton');

    for (var currentElement = 0; currentElement < 2; currentElement++) {
      if (hiddenQuestions[currentElement] !== undefined) {
        hiddenQuestions[currentElement].classList.remove('moreQuestions');
      }
    }
    if (hiddenQuestions.length === 0) {
      questionsButton.style.visibility = 'collapse';
    }
  }

  render() {
    var questionsButton;

    if(this.state.questions.length > 2) {
      var questionsButton = <button id='moreQuestionsButton' onClick={ (event) => {
        this.showMoreQuestions();
        this.props.trackClicks(event, 'Questions & Answers');
      }}>More Answered Questions</button>;
    }

    return (
      <div id="QandA">
        <h2 className='QandATitle'>Questions & Answers</h2>
        <div className='QandAList'>
          {
            this.state.questions.map((question, index) => {
              return (
                <Question key={index} question={question} apiUrl={this.props.apiUrl} token={this.props.token} trackClicks={this.props.trackClicks} index={index} />
              )
            })
          }
        </div>
        <Modal size='lg' show={this.state.showModal} onHide={() => { this.setState({ showModal: false }) }}>
          <Modal.Header>
            <Modal.Title>Ask Your Question</Modal.Title>
            <CloseButton onClick={(event) => {
              this.props.trackClicks(event, 'Questions & Answers');
              this.setState({ showModal: false });
            }}>Close</CloseButton>
          </Modal.Header>
          <Modal.Body>
            <p>About the {this.state.productName}</p>
            <p className='askRequiredField'>* indicates required field</p>
            <form onSubmit={(event) => {
              event.preventDefault();
              var warningMessage = 'You must enter the following: ';

              if(event.target[0].value === '') {
                warningMessage += ' "Your Question" ';
              }
              if(event.target[1].value === '') {
                warningMessage += ' "Nickname" ';
              }
              if(!event.target[2].value.includes('@') || !event.target[2].value.includes('.')) {
                warningMessage += ' "Email" ';
              }

              if (warningMessage.length > 30) {
                alert(warningMessage);
              } else {
                axios.post(this.props.apiUrl + '/qa/questions',
                  {
                    body: event.target[0].value,
                    name: event.target[1].value,
                    email: event.target[2].value,
                    product_id: this.props.currentProduct
                  },
                  {
                    headers: {
                      'Authorization': this.props.token
                    }
                  }).then(() => {
                    console.log('Successfully posted new question');
                  }).catch((err) => {
                    console.log('Error posting new question: ' + err);
                  });
              }
            }}>
              <label className='yourQuestionLabel'>
                Your Question*
                <textarea className='yourQuestionInput' maxLength={1000}></textarea>
              </label>
              <label className='askNicknameLabel'>
                Nickname*
                <input type='text' className='askNicknameInput' maxLength={60} placeholder='Example: jackson11!'></input>
                <p className='askPrivacyReasons'>For privacy reasons, do not use your full name or email address</p>
              </label>
              <label className='askEmailLabel'>
                Email*
                <input type='text' className='askEmailInput' placeholder='Why did you like the product or not?' maxLength={60}></input>
                <p className='askAuthReasons'>For authentication reasons, you will not be emailed</p>
              </label>
              <button type='submit' className='askSubmit'>Submit</button>
            </form>
          </Modal.Body>
        </Modal>
        {questionsButton}
        <button className='addAQuestion' onClick={(event) => {
          this.props.trackClicks(event, 'Questions & Answers');
          this.setState({ showModal: true });
        }}>Add A Question</button>
      </div>
    )
  }
}

export default QandA;