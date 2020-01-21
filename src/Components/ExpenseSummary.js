import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SelectExpensesTotal from "../selectors/expenses-total";
import { startRemoveAllExpense } from "../actions/expenses";
import SelectExpenses from "../selectors/expenses";
import numeral from "numeral";

export class ExpenseSummary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };
  }
  openModal = () => {
    if (this.props.expensesCount !== 0) {
      this.setState({ modalIsOpen: true });
    }
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  onRemoveAll = () => {
    this.props.startRemoveAllExpense();
    this.closeModal();
  };

  render() {
    return (
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">
            Viewing <span> {this.props.expensesCount} </span>
            {this.props.expensesCount === 1 ? "expense" : "expenses"} totalling
            <span>
              {" "}
              {numeral(this.props.expensesTotal / 100).format("$0,0.00")}{" "}
            </span>
          </h1>
          <div className="page-header__actions">
            <Link className="button" to="/create">
              Add Expense
            </Link>
            <button className="button-removeAll" onClick={this.openModal}>
              Remove All
            </button>
            <Modal
              className="modal"
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              ariaHideApp={false}
              contentLabel="Example Modal"
              closeTimeoutMS={200}
            >
              <div className="modal-content__wrapper">
                <h1 className="modal-content__title">Are you sure</h1>
                <div className="modal-content-button__wrapper">
                  <button className="button" onClick={this.onRemoveAll}>
                    Yes
                  </button>
                  <button className="button" onClick={this.closeModal}>
                    No
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const visibleExpenses = SelectExpenses(state.expenses, state.filters);
  return {
    expensesTotal: SelectExpensesTotal(visibleExpenses),
    expensesCount: visibleExpenses.length
  };
};

const mapDispatchToProps = dispatch => ({
  startRemoveAllExpense: () => dispatch(startRemoveAllExpense())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseSummary);
