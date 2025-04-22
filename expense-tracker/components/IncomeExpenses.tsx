import React, { useContext } from 'react';
import { GlobalContext } from '../src/context/GlobalState';

const IncomeExpenses: React.FC = () => {
    const { state } = useContext(GlobalContext);

    const amounts = state.transactions.map((t) => t.amount);
    const income = amounts.filter((a) => a > 0).reduce((acc, num) => acc + num, 0).toFixed(2);
    const expense = (
        amounts.filter((a) => a < 0).reduce((acc, num) => acc + num, 0) * -1
    ).toFixed(2);

    return (
        <div>
            <h4>Income</h4>
            <p style={{ color: 'green' }}>+${income}</p>
            <h4>Expense</h4>
            <p style={{ color: 'red' }}>-${expense}</p>
        </div>
    );
};

export default IncomeExpenses;
