import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Upstock Holdings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Header;
