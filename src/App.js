import React, { Component } from "react";
import FormModal from "./components/Modal";
import Card from "./components/Card";

class App extends Component {
  state = {
    bankName: "",
    cardNumber: "",
    expirationDate: "",
    cardHolderName: "",
    cardType: "",
    formModalVisible: false,
    cardVisible: false,
  };

  openModal = () => {
    this.setState({
      cardVisible: false,
      formModalVisible: true,
    });
  };

  closeModal = () => {
    this.setState({
      formModalVisible: false,
    });
  };

  openCard = () => {
    this.setState({
      bankName: "",
      cardNumber: "",
      expirationDate: "",
      cardHolderName: "",
      cardType: "",
      cardVisible: true,
    });
  };

  newCurrentData = (
    bankName,
    cardNumber,
    expirationDate,
    cardHolderName,
    cardType
  ) => {
    this.setState({
      bankName,
      cardNumber,
      expirationDate,
      cardHolderName,
      cardType,
    });
  };

  render() {
    const {
      bankName,
      cardNumber,
      expirationDate,
      cardHolderName,
      cardType,
      formModalVisible,
      cardVisible,
    } = this.state;
    return (
      <div className="card-wrapper py-4">
        {formModalVisible ? (
          <FormModal
            closeModal={this.closeModal}
            openCard={this.openCard}
            newCurrentData={this.newCurrentData}
          />
        ) : (
          ""
        )}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h1>Creative Credit Card 😉</h1>
              <button
                className="btn btn-success my-4 mx-auto"
                onClick={this.openModal}
              >
                ➕ Add a Card
              </button>
            </div>
            <div className="col-12 col-sm-10 col-md-6 col-lg-5">
              {cardVisible ? (
                <Card
                  bankName={bankName}
                  cardNumber={cardNumber}
                  expirationDate={expirationDate}
                  cardHolderName={cardHolderName}
                  cardType={cardType}
                  cardVisible={cardVisible}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
