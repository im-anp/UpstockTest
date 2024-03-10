import {useEffect, useState} from 'react';
import {useStockList} from '../Context';

const useTotalStockData = () => {
  const [totalPnl, setTotalPnl] = useState<number>(0);
  const [totalInvestment, setTotalInvestment] = useState<number>(0);
  const [totalCurrentValue, setTotalCurrentValue] = useState<number>(0);
  const [totalTodaysPnl, setTotalTodaysPnl] = useState<number>(0);

  const {state} = useStockList();

  useEffect(() => {
    const totals = state?.reduce(
      (acc, data) => {
        acc.pnl += data.pnl;
        acc.investmentValue += data.investmentValue;
        acc.currentValue += data.currentValue;
        acc.todayPnl += data.todayPnl;
        return acc;
      },
      {pnl: 0, investmentValue: 0, currentValue: 0, todayPnl: 0},
    );

    setTotalPnl(totals.pnl);
    setTotalInvestment(totals.investmentValue);
    setTotalCurrentValue(totals.currentValue);
    setTotalTodaysPnl(totals.todayPnl);
  }, [state]);

  return {totalPnl, totalInvestment, totalCurrentValue, totalTodaysPnl};
};

export default useTotalStockData;
