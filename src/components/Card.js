import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  state = {};

  render() {
    const { bankName, cardNumber, expirationDate, cardHolderName, cardType } =
      this.props;
    return (
      <div className="card">
        <div className="card-header">
          <h2 className="bankName text-right">{bankName}</h2>
        </div>
        <div className="card-body">
          <div className="cardChip">
            <img
              src="https://pngimage.net/wp-content/uploads/2018/05/chip-png-1.png"
              alt=""
              width={70}
            />
          </div>
          <div>
            <p className="cardNumber">
              {cardNumber.slice(0, 4)}&nbsp;{cardNumber.slice(4, 8)}&nbsp;
              {cardNumber.slice(8, 12)}&nbsp;{cardNumber.slice(12)}
            </p>
          </div>
          <div className="expirationDate mt-2">
            <p className="">
              valid <br /> Thru
            </p>
            <p>
              {expirationDate.slice(0, 2)}/{expirationDate.slice(2)}
            </p>
          </div>
        </div>
        <div className="card-footer">
          <p className="cardHolderName">{cardHolderName}</p>
          <span className="cardType badge badge-light">{cardType}</span>
        </div>
      </div>
    );
  }
}

export default Card;
