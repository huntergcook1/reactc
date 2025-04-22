import React, { createContext, useReducer, ReactNode } from 'react';

// Types
type Transaction = {
    id: number;
    text: string;
    amount: number;
};

type State = {
    transactions: Transaction[];
};

type Action =
    | { type: 'ADD_TRANSACTION'; payload: Transaction }
    | { type: 'DELETE_TRANSACTION'; payload: number };

type GlobalContextType = {
    state: State;
    dispatch: React.Dispatch<Action>;
};

// Initial state
const initialState: State = {
    transactions: [],
};

// Reducer
const AppReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions],
            };
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

// Create context
export const GlobalContext = createContext<GlobalContextType>({
    state: initialState,
    dispatch: () => null,
});

// Provider component
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};
