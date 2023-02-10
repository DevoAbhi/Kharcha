import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const SaveExpenseDataHandler = (expenseData) => {
        expenseData = {...expenseData, id: Math.random().toString()};

        props.onAddExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense;