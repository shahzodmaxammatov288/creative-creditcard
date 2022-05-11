import React, { Component, createRef } from "react";
import "./modal.css";

class Modal extends Component {
  state = {
    bankName: "",
    cardNumber: "",
    expirationDate: "",
    cardHolderName: "",
    cardType: "",
  };

  bankNameRef = createRef();
  cardNumberRef = createRef();
  expirationDateRef = createRef();
  cardHolderNameRef = createRef();
  cardTypeRef = createRef();

  componentDidMount() {
    this.bankNameRef.current.focus();
  }

  componentWillUnmount() {
    this.setState({
      bankName: "",
      cardNumber: "",
      expirationDate: "",
      cardHolderName: "",
      cardType: "",
    });
  }

  handelValue = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        if (this.state.cardNumber.length === 16) {
          this.expirationDateRef.current.focus();
        }
        if (this.state.expirationDate.length === 4) {
          this.cardHolderNameRef.current.focus();
        }
      }
    );
  };

  closeModal = () => {
    this.props.closeModal();
  };

  saveChanges = () => {
    const { bankName, cardNumber, expirationDate, cardHolderName, cardType } =
      this.state;
    if (
      bankName &&
      cardType &&
      cardNumber.length === 16 &&
      expirationDate &&
      cardHolderName
    ) {
      this.props.openCard();
      this.props.closeModal();
    }

    this.props.newCurrentData(
      bankName,
      cardNumber,
      expirationDate,
      cardHolderName,
      cardType
    );
  };

  render() {
    const { bankName, cardNumber, expirationDate, cardHolderName, cardType } =
      this.state;
    return (
      <div className="formModal py-3">
        <div className="overlay" onClick={this.closeModal}></div>
        <div className="formModal-container container">
          <button
            className="closeFormModalBtn btn btn-success"
            onClick={this.closeModal}
          >
            <span>x</span>
          </button>
          <h2 className="formModal-title">Credit Card Form</h2>
          <div className="row">
            <div className="col-12">
              <form action="#">
                <div className="my-3">
                  <label htmlFor="bankName">Bank Name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="bankName"
                    name="bankName"
                    placeholder="Aloqabank"
                    value={bankName}
                    onChange={this.handelValue}
                    ref={this.bankNameRef}
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="cardType">Card Type</label>
                  <input
                    className="form-control"
                    type="text"
                    id="cardType"
                    name="cardType"
                    placeholder="uzcard"
                    value={cardType}
                    onChange={this.handelValue}
                    ref={this.cardTypeRef}
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    className="form-control"
                    type="number"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="8600190109010404"
                    value={cardNumber}
                    onChange={this.handelValue}
                    ref={this.cardNumberRef}
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="expirationDate">Expiration Date</label>
                  <input
                    className="form-control"
                    type="number"
                    id="expirationDate"
                    name="expirationDate"
                    placeholder="09/22"
                    value={expirationDate}
                    onChange={this.handelValue}
                    ref={this.expirationDateRef}
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="cardHolderName">Card Holder Name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="cardHolderName"
                    name="cardHolderName"
                    placeholder="Shakhzod Makhammatov"
                    value={cardHolderName}
                    onChange={this.handelValue}
                    ref={this.cardHolderNameRef}
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="my-3">
                  <button
                    className="btn btn-success"
                    onClick={this.saveChanges}
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
