import React, {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {

    /* const [enteredTitle, setEnteredTitle] = useState('');
    const [amountValue, setAmountValue] = useState('');
    const [dateValue, setDateValue] = useState(''); */

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        amountValue: '',
        dateValue: ''
    })

    function newTitle(event) {
        /* setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        }) */
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value }
        });
    }

    function newAmount(event) {
        /* setUserInput({
            ...userInput,
            amountValue: event.target.value
        }) */
        setUserInput((prevState) => {
            return { ...prevState, amountValue: event.target.value }
        });
    }

    function newDate(event) {
        /* setUserInput({
            ...userInput,
            dateValue: event.target.value
        }) */
        setUserInput((prevState) => {
            return { ...prevState, dateValue: event.target.value }
        });
    }

    function submitHandler(event) {
        event.preventDefault();

        const expenseData= {
            title: userInput.enteredTitle,
            amount: userInput.amountValue,
            date: new Date(userInput.dateValue)
        }

        props.onSaveExpenseData(expenseData);
        
        setUserInput.enteredTitle = '';
        setUserInput.amountValue = '';
        setUserInput.dateValue = '';

    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={newTitle} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={userInput.amountValue} onChange={newAmount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={userInput.dateValue} onChange={newDate}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;