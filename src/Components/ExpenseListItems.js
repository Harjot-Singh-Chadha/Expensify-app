import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
import numeralCurrencyFormat from "../locales/fr";

const ExpenseListItems = ({ description, amount, createdAt, id }) => (
  <Link to={`./edit/${id}`} className="list-item">
    <div className="list-item__wrapper">
      <h3 className="list-item__title">{description}</h3>
      <br />
      <span className="list-item__sub-title">
        {moment(createdAt).format("MMMM Do YYYY")}
      </span>
    </div>
    <h3 className="list-item__data">
      {numeral(amount / 100).format("$0,0.00")}
    </h3>
  </Link>
);

export default ExpenseListItems;
