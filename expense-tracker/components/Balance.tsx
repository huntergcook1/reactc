import React, { useContext } from 'react';
import { GlobalContext } from '../src/context/GlobalState';

const Balance: React.FC = () => {
    const { state } = useContext(GlobalContext);

    const amounts = state.transactions.map((t) => t.amount);
    const total = amounts.reduce((acc, num) => acc + num, 0).toFixed(2);

    return (
        <div>
            <h4>Your Balance</h4>
            <h2>${total}</h2>
        </div>
    );
};

export default Balance;
