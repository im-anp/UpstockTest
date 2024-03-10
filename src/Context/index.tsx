import React, {createContext, useReducer, useContext, ReactNode} from 'react';

// Define the types of actions available for the stock list
type Action =
  | {type: 'ADD'; stock: StockItem[]}
  | {type: 'REMOVE'; id: number}
  | {type: 'UPDATE'; id: number; stock: string};

// Define the shape of a stock item
interface StockItem {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
  investmentValue: number;
  currentValue: number;
  todayPnl: number;
  pnl: number;
}

// Define the initial state and its type
const initialState: StockItem[] = [];

// Create the reducer function
const stockListReducer = (state: StockItem[], action: Action): StockItem[] => {
  switch (action.type) {
    case 'ADD':
      const newData = action.stock.map(data => {
        return {
          ...data,
          currentValue: data?.ltp * data?.quantity,
          investmentValue: data?.avgPrice * data?.quantity,
          pnl: data?.ltp * data?.quantity - data?.avgPrice * data?.quantity,
          todayPnl: (data?.close - data?.ltp) * data?.quantity,
        };
      });
      return [...newData];
    default:
      return state;
  }
};

// Create the context
const StockListContext = createContext<{
  state: StockItem[];
  dispatch: React.Dispatch<Action>;
}>({state: initialState, dispatch: () => undefined});
const StockListProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [state, dispatch] = useReducer(stockListReducer, initialState);

  return (
    <StockListContext.Provider value={{state, dispatch}}>
      {children}
    </StockListContext.Provider>
  );
};

// Custom hook to use the stock list context
const useStockList = () => useContext(StockListContext);

export {StockListProvider, useStockList};
