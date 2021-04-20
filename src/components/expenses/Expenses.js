import React, {useState} from 'react'
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter'

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    function filteredChangeHandler(selectedYear) {
        setFilteredYear(selectedYear)
    }
 
    return(
        <div className="expenses">
            <ExpensesFilter selected={filteredYear} onFilteredChange={filteredChangeHandler} />
            <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
            <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
        </div>
    );
    
}

export default Expenses;