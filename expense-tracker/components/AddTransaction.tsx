import React, { useState, useContext } from 'react';
import { GlobalContext } from '../src/context/GlobalState';

const AddTransaction: React.FC = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const { dispatch } = useContext(GlobalContext);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newTransaction = {
            id: Date.now(), // simple unique ID
            text,
            amount: +amount,
        };

        dispatch({ type: 'ADD_TRANSACTION', payload: newTransaction });

        setText('');
        setAmount('');
    };

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Text</label><br />
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter description..."
                        required
                    />
                </div>
                <div>
                    <label>Amount (negative = expense, positive = income)</label><br />
                    <input
                        type="number"
                        inputMode="decimal"
                        step="1"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..."
                        required
                    />
                </div>
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
};

export default AddTransaction;
