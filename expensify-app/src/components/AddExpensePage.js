import React from 'react';
import { connect } from 'react-redux';

import { addExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm'

const AddExpensePage = ({dispatch, history}) => (
    <div>
        This is from expense component
        <ExpenseForm onSubmit={expense => {
            dispatch(addExpense(expense));
            history.push('/');
        }}/>
    </div>
);

export default connect()(AddExpensePage);