import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Balance from '../components/Balance';
import IncomeExpenses from '../components/IncomeExpenses';
import TransactionList from '../components/TransactionList';
import AddTransaction from '../components/AddTransaction';

const App: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (!storedUsername) {
            navigate('/');
        }
    }, [navigate]);

    const username = localStorage.getItem('username') || 'Guest';

    const handleLogout = () => {
        localStorage.removeItem('username');
        navigate('/');
    };

    return (
        <div className="AppWrapper">
            {/* 🌊 Video Background */}
            <video autoPlay muted loop className="bg-video">
                <source src="/wave2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <nav className="navbar-fixed">
                <div className="navbar-section left" />
                <div className="navbar-section center">
                    <span className="navbar-welcome">Welcome, {username}!</span>
                </div>
                <div className="navbar-section right">
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
            </nav>


            {/* 🔲 Expense Tracker Card */}
            <div className="App">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </div>
    );
};

export default App;
