import React, {useRef} from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import useTotalStockData from './Hooks/useTotalStockData';
import {formatCurrency} from './Utils';
import RBSheet from 'react-native-raw-bottom-sheet';

const Footer = () => {
  const {totalPnl, totalInvestment, totalCurrentValue, totalTodaysPnl} =
    useTotalStockData();
  const refRBSheet = useRef<RBSheet>();
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          refRBSheet.current?.open();
        }}>
        <View style={styles.footerContainer}>
          <Text style={[styles.footerText, styles.boldText]}>
            Profit and Loss
          </Text>
          <Text style={styles.footerText}>{formatCurrency(totalPnl)}</Text>
        </View>
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          container: {
            backgroundColor: '#5a2989',
          },
          draggableIcon: {
            backgroundColor: '#fff',
          },
        }}>
        <View style={styles.sheetContainer}>
          <View style={styles.footerContainer}>
            <Text style={[styles.footerText, styles.boldText]}>
              Current Value
            </Text>
            <Text style={styles.footerText}>
              {formatCurrency(totalCurrentValue)}
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <Text style={[styles.footerText, styles.boldText]}>
              Total Investment
            </Text>
            <Text style={styles.footerText}>
              {formatCurrency(totalInvestment)}
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <Text style={[styles.footerText, styles.boldText]}>
              Todays Profit and Loss
            </Text>
            <Text style={styles.footerText}>
              {formatCurrency(totalTodaysPnl)}
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <Text style={[styles.footerText, styles.boldText]}>
              Profit and Loss
            </Text>
            <Text style={styles.footerText}>{formatCurrency(totalPnl)}</Text>
          </View>
        </View>
      </RBSheet>
    </>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    paddingVertical: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: 18,
    color: '#fff',
  },
  boldText: {
    fontWeight: 'bold',
  },
  sheetContainer: {
    backgroundColor: '#5a2989',
    height: 500,
    paddingHorizontal: 20,
  },
});

export default Footer;
