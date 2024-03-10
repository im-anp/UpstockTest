import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {formatCurrency} from './Utils';

interface PROPS {
  symbol: string;
  ltp: number;
  pnl: number;
  quantity: number;
}

const ListItem: React.FC<PROPS> = ({symbol, ltp, quantity, pnl}) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexCard}>
        <Text style={[styles.textStyle, styles.bold]}>{symbol}</Text>
        <Text style={styles.textStyle}>LTP: {formatCurrency(ltp)}</Text>
      </View>
      <View style={styles.flexCard}>
        <Text style={styles.textStyle}>{quantity}</Text>
        <Text style={styles.textStyle}>PNL: {formatCurrency(pnl)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: 'lightgray',
    marginBottom: 10,
  },
  flexCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  textStyle: {
    fontSize: 18,
    color: '#000',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default ListItem;
