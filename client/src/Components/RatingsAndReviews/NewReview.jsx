import React from 'react';

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      counter: 50
    };
  }

  newReviewClickHandler() {
    this.setState({
      showModal: true
    })
  }

  closeBtnHandler() {
    this.setState({
      showModal: false
    })
  }

  starClick() {
    console.log('star clicked');
  }

  render() {
    var modal;
    if (!this.state.showModal) {
      modal = null;
    } else {
      modal =
        <div className="rr-modal">
          <div className="rr-modal-content">
            <span className="rr-close-btn" onClick={e => {this.closeBtnHandler();}}>close</span>
            <h2>Write Your Review</h2>
            <h4>About the {this.props.productName}</h4>
            <form>
              <b>Overall Rating * </b>
              <span className="fa fa-star rr-one" onClick={e => {this.starClick()}}></span>
              <span className="fa fa-star rr-two" onClick={e => {this.starClick()}}></span>
              <span className="fa fa-star rr-three" onClick={e => {this.starClick()}}></span>
              <span className="fa fa-star rr-four" onClick={e => {this.starClick()}}></span>
              <span className="fa fa-star rr-five" onClick={e => {this.starClick()}}></span>
              <br/>
              <br/>
              <b>Do you recommend this product? * </b>
              <label>Yes
                <input type="radio" name="recommend"/>
              </label>
              <label>No
                <input type="radio" name="recommend"/>
              </label>
              <br/>
              <br/>
              <b>Characteristics * </b>
              <table className="rr-paddingBtwCols">
                <thead>
                  <tr>
                    <th></th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><b>Size</b></td>
                    <td>
                      <label>A size too small
                        <input type="radio" name="size"></input>
                      </label>
                    </td>
                    <td>
                      <label>Half a size too small
                        <input type="radio" name="size"></input>
                      </label>
                    </td>
                    <td>
                      <label>Perfect
                        <input type="radio" name="size"></input>
                      </label>
                    </td>
                    <td>
                      <label>Half a size too big
                        <input type="radio" name="size"></input>
                      </label>
                    </td>
                    <td>
                      <label>A size too wide
                        <input type="radio" name="size"></input>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td><b>Width</b></td>
                    <td>
                      <label>Too narrow
                        <input type="radio" name="width"></input>
                      </label>
                    </td>
                    <td>
                      <label>Slightly narrow
                        <input type="radio" name="width"></input>
                      </label>
                    </td>
                    <td>
                      <label>Perfect
                        <input type="radio" name="width"></input>
                      </label>
                    </td>
                    <td>
                      <label>Slightly wide
                        <input type="radio" name="width"></input>
                      </label>
                    </td>
                    <td>
                      <label>Too wide
                        <input type="radio" name="width"></input>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td><b>Comfort</b></td>
                    <td>
                      <label>Uncomfortable
                        <input type="radio" name="comfort"></input>
                      </label>
                    </td>
                    <td>
                      <label>Slightly uncomfortable
                        <input type="radio" name="comfort"></input>
                      </label>
                    </td>
                    <td>
                      <label>Ok
                        <input type="radio" name="comfort"></input>
                      </label>
                    </td>
                    <td>
                      <label>Comfortable
                        <input type="radio" name="comfort"></input>
                      </label>
                    </td>
                    <td>
                      <label>Perfect
                        <input type="radio" name="comfort"></input>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td><b>Quality</b></td>
                    <td>
                      <label>Poor
                        <input type="radio" name="quality"></input>
                      </label>
                    </td>
                    <td>
                      <label>Below average
                        <input type="radio" name="quality"></input>
                      </label>
                    </td>
                    <td>
                      <label>What I expected
                        <input type="radio" name="quality"></input>
                      </label>
                    </td>
                    <td>
                      <label>Pretty great
                        <input type="radio" name="quality"></input>
                      </label>
                    </td>
                    <td>
                      <label>Perfect
                        <input type="radio" name="quality"></input>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td><b>Length</b></td>
                    <td>
                      <label>Runs short
                        <input type="radio" name="length"></input>
                      </label>
                    </td>
                    <td>
                      <label>Runs slightly short
                        <input type="radio" name="length"></input>
                      </label>
                    </td>
                    <td>
                      <label>Perfect
                        <input type="radio" name="length"></input>
                      </label>
                    </td>
                    <td>
                      <label>Runs slightly long
                        <input type="radio" name="length"></input>
                      </label>
                    </td>
                    <td>
                      <label>Runs long
                        <input type="radio" name="length"></input>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td><b>Fit</b></td>
                    <td>
                      <label>Runs tight
                        <input type="radio" name="fit"></input>
                      </label>
                    </td>
                    <td>
                      <label>Runs slightly tight
                        <input type="radio" name="fit"></input>
                      </label>
                    </td>
                    <td>
                      <label>Perfect
                        <input type="radio" name="fit"></input>
                      </label>
                    </td>
                    <td>
                      <label>Runs slightly long
                        <input type="radio" name="fit"></input>
                      </label>
                    </td>
                    <td>
                      <label>Runs long
                        <input type="radio" name="fit"></input>
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br/>
              <br/>
              <b>Review Summary </b>
              <input type="text" maxLength="60" placeholder="Example: Best purchase ever!" size="60"></input>
              <br/>
              <br/>
              <b>Review Body *</b>
              <br/>
              <textarea minLength="50" maxLength="1000" placeholder="Why did you like the product or not?" cols="80" rows="5"></textarea>
              <small> Number of characters until minimum reached: {this.state.counter}</small>
              <br/>
              <button>Upload photo</button>
              <br/>
              <br/>
              <label><b>What is your nickname * </b></label>
              <input type="text" maxLength="60" placeholder="Example: jackson11!" size="60"></input>
              <br/>
              <small>For privacy reasons, do not use your full name or email address</small>
              <br/>
              <br/>
              <b>Your email * </b>
              <input type="email" maxLength="60" placeholder="Example: jackson11@email.com" size="50"></input>
              <br/>
              <small>For authentication reasons, you will not be emailed</small>
              <br/>
              <br/>
              <button>Submit review</button>
            </form>
          </div>
        </div>
    }
    return (
      <div>
        <button id="rr-modal-btn" onClick={e => {this.newReviewClickHandler();}}>Add A Review</button>
        {modal}
        <br/>
      </div>
    )
  }
}

export default NewReview;