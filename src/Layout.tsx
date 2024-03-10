import React, {ReactNode} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import Header from './headers';
import Footer from './footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <View style={styles.header}>
        <Header />
      </View>
      <ScrollView style={styles.content}>{children}</ScrollView>
      <View style={styles.footer}>
        <View style={styles.handle} />
        <Footer />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    backgroundColor: '#5a2989',
  },
  content: {
    flex: 1,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#5a2989',
  },
  footerText: {
    fontSize: 14,
    color: 'black',
  },
  handle: {
    width: 40,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#ffffff',
    marginBottom: 10,
  },
});

export default Layout;
