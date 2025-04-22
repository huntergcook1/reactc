import React, { useContext } from 'react';
import { GlobalContext } from '../src/context/GlobalState';

const TransactionList: React.FC = () => {
    const { state, dispatch } = useContext(GlobalContext);

    const handleDelete = (id: number) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    };

    return (
        <div>
            <h3>History</h3>
            <ul>
                {state.transactions.map((transaction) => (
                    <li key={transaction.id}>
                        {transaction.text}
                        <span style={{ color: transaction.amount < 0 ? 'red' : 'green' }}>
                            {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}
                        </span>
                        <button onClick={() => handleDelete(transaction.id)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
