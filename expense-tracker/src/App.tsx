import { GlobalProvider } from './context/GlobalState';
import Balance from '../components/balance';
import IncomeExpenses from '../components/IncomeExpenses';
import TransactionList from '../components/TransactionList';
import AddTransaction from '../components/AddTransaction';

function App() {
    return (
        <GlobalProvider>
            <div className="AppWrapper">
                <video autoPlay muted loop className="bg-video">
                    <source src="/wave2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            <div className="App">
                <h2>Expense Tracker</h2>
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
            </div>
        </GlobalProvider>
    );
}

export default App;
