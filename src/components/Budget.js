import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);

    const changeBudget = (event) => {
        let newBudget = event.target.value;
        //Budget upper limit = 20000
        if (newBudget > 20000)
        {
            alert("The Budget cannot exceed "+currency+"20000");
            return;
        }

        //Budget cannot lower than the spending
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        if (newBudget < totalExpenses)
        {
            alert("The Budget cannot lower than the spending");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(newBudget)
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}&nbsp;</span>
            <input
                        type='number'
                        step='10'
                        value={budget}
                        style={{ size: 10}}
                        onChange={changeBudget}>
            </input>
            
        </div>
    );
};
export default Budget;
