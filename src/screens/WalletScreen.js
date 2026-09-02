import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function WalletScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.icon}>
        ₹
      </Text>

      <Text style={styles.title}>
        Mercato Wallet
      </Text>

      <Text style={styles.balance}>
        ₹0.00
      </Text>

      <Text style={styles.subtitle}>
        Your Mercato wallet balance
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: 80,
    height: 80,

    borderRadius: 40,

    backgroundColor: '#E8F8F1',

    textAlign: 'center',
    textAlignVertical: 'center',

    fontSize: 40,

    color: '#00A86B',
  },

  title: {
    marginTop: 20,

    fontSize: 25,

    fontWeight: '800',
  },

  balance: {
    marginTop: 15,

    fontSize: 32,

    fontWeight: '900',

    color: '#00A86B',
  },

  subtitle: {
    marginTop: 5,

    color: '#777777',
  },

});

export default WalletScreen;