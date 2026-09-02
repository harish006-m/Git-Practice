import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function OrderAgainScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.icon}>
        🧾
      </Text>

      <Text style={styles.title}>
        Order Again
      </Text>

      <Text style={styles.subtitle}>
        Your previous orders will appear here.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',
  },

  icon: {
    fontSize: 55,
  },

  title: {
    marginTop: 15,

    fontSize: 25,

    fontWeight: '800',
  },

  subtitle: {
    marginTop: 8,

    color: '#777777',
  },

});

export default OrderAgainScreen;