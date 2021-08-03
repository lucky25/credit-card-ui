import React from 'react'

class Card extends React.Component {
  constructor() {
    super()
    this.state = {
      bankName: "",
      cardNumber: "",
      holder: "",
      expiry: "",
      cvv: ""
    }
    this.handlechanged = this.handleChanged.bind(this)
  }

  handleChanged(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <div className="sideDiv">
          <form>
          Enter Details for card:
            <input
            type = "text"
            name = "bankName"
            value = {this.state.bankName}
            placeholder = "Bank Name"
            onChange = {this.handlechanged}
          />
          <br />
          <input
            type = "text"
            name = "cardNumber"
            value = {this.state.cardNumber}
            placeholder = "Card Number"
            onChange = {this.handlechanged}
          />
          <br />
          <input
            type = "text"
            name = "holder"
            value = {this.state.holder}
            placeholder = "Card Holder Name"
            onChange = {this.handlechanged}
          />
          <br />
          <input
            type = "text"
            name = "expiry"
            value = {this.state.expiry}
            placeholder = "Expiry Date (eg. 08/23)"
            onChange = {this.handlechanged}
          />
          <br />
          <input
            type = "text"
            name = "cvv"
            value = {this.state.cvv}
            placeholder = "CVV"
            onChange = {this.handlechanged}
          />

          </form>
        </div>

        <div className="sideDiv">
          <div className="container">
            <img className="cardImage" src="credit_card.png" />
            <div className="bankName">{ this.state.bankName }</div>
            <div className="cardNumber">{ this.state.cardNumber }</div>
            <div className="holder">{ this.state.holder }</div>
            <div className="expiry">{ this.state.expiry }</div>
            <div className="cvv">{ this.state.cvv }</div>
          </div>
        </div>


      </div>
    )
  }
}

export default Card
