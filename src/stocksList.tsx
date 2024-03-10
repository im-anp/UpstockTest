import React, {useState, useEffect} from 'react';
import {FlatList, View, StyleSheet, ActivityIndicator} from 'react-native';
import ListItem from './listItem';
import {useStockList} from './Context';
import useQuery from './Hooks/useQuery';

// Assuming this is the type for each stock item
interface StockItem {
  id: string;
  symbol: string;
  ltp: number;
  pnl: number;
  quantity: number;
}

const StocksList: React.FC = () => {
  const [stocks, setStocks] = useState<StockItem[]>([]);

  const {dispatch, state} = useStockList();

  const {data, error, loading} = useQuery(
    'https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8',
  );
  useEffect(() => {
    if (
      data &&
      typeof data === 'object' &&
      data !== null &&
      'userHolding' in data
    ) {
      const userHolding = data.userHolding as StockItem[];
      dispatch({type: 'ADD', stock: userHolding});
    }
  }, [data, dispatch, loading]);

  useEffect(() => {
    if (state) {
      setStocks(state);
    }
  }, [state]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={stocks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ListItem
            symbol={item.symbol}
            ltp={item.ltp}
            pnl={item.pnl}
            quantity={item.quantity}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default StocksList;
