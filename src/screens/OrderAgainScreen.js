import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

function OrderAgainScreen({navigation}) {
  const handleBackToHome = () => {
    navigation.navigate('MainTabs', {
      screen: 'Home',
    });
  };

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

      <TouchableOpacity
        style={styles.button}
        onPress={handleBackToHome}
        activeOpacity={0.8}>

        <Text style={styles.buttonText}>
          Back to Home
        </Text>

      </TouchableOpacity>

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

    color: '#222222',
  },

  subtitle: {
    marginTop: 8,

    color: '#777777',
  },

  button: {
    marginTop: 25,

    paddingVertical: 12,
    paddingHorizontal: 30,

    borderRadius: 25,

    backgroundColor: '#B87A00',
  },

  buttonText: {
    fontSize: 15,

    fontWeight: '700',

    color: '#FFFFFF',
  },

});

export default OrderAgainScreen;