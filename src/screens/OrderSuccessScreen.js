import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function OrderSuccessScreen({navigation}) {
  const orderId = 'MCT' + Math.floor(100000 + Math.random() * 900000);

  return (
    <View style={styles.container}>

      {/* Success Icon */}

      <View style={styles.successCircle}>
        <Text style={styles.checkmark}>
          ✓
        </Text>
      </View>

      {/* Success Message */}

      <Text style={styles.title}>
        Order Placed!
      </Text>

      <Text style={styles.subtitle}>
        Your order has been placed successfully.
      </Text>

      {/* Order Information */}

      <View style={styles.orderCard}>

        <View style={styles.row}>
          <Text style={styles.label}>
            Order ID
          </Text>

          <Text style={styles.value}>
            #{orderId}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.label}>
            Estimated Delivery
          </Text>

          <Text style={styles.value}>
            10–20 minutes
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.label}>
            Status
          </Text>

          <Text style={styles.status}>
            Confirmed
          </Text>
        </View>

      </View>

      {/* Delivery Message */}

      <View style={styles.deliveryCard}>

        <Text style={styles.deliveryIcon}>
          🛵
        </Text>

        <View style={styles.deliveryDetails}>

          <Text style={styles.deliveryTitle}>
            Your order is on the way!
          </Text>

          <Text style={styles.deliveryText}>
            Our delivery partner will bring your
            groceries to your doorstep.
          </Text>

        </View>

      </View>

      {/* Buttons */}

      <View style={styles.buttons}>

  <TouchableOpacity
    style={styles.trackButton}
    onPress={() =>
      navigation.navigate('MainTabs', {
        screen: 'Home',
      })
    }>

    <Text style={styles.trackButtonText}>
      Continue Shopping
    </Text>

  </TouchableOpacity>

  <TouchableOpacity
    style={styles.homeButton}
    onPress={() =>
      navigation.navigate('MainTabs', {
        screen: 'Home',
      })
    }>

    <Text style={styles.homeButtonText}>
      Back to Home
    </Text>

  </TouchableOpacity>

</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 25,
  },

  /* SUCCESS */

  successCircle: {
    width: 100,
    height: 100,

    borderRadius: 50,

    backgroundColor: '#E8F8F1',

    justifyContent: 'center',
    alignItems: 'center',
  },

  checkmark: {
    fontSize: 55,
    fontWeight: '700',

    color: '#00A86B',
  },

  title: {
    marginTop: 25,

    fontSize: 28,
    fontWeight: '800',

    color: '#222222',
  },

  subtitle: {
    marginTop: 8,

    fontSize: 14,
    color: '#777777',

    textAlign: 'center',
  },

  /* ORDER CARD */

  orderCard: {
    width: '100%',

    marginTop: 30,

    padding: 18,

    borderRadius: 14,

    backgroundColor: '#F8F8F8',
  },

  row: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',
  },

  label: {
    fontSize: 13,
    color: '#777777',
  },

  value: {
    fontSize: 14,
    fontWeight: '700',
    color: '#222222',
  },

  status: {
    fontSize: 14,
    fontWeight: '700',

    color: '#00A86B',
  },

  divider: {
    height: 1,

    backgroundColor: '#DDDDDD',

    marginVertical: 15,
  },

  /* DELIVERY */

  deliveryCard: {
    width: '100%',

    marginTop: 15,

    padding: 15,

    borderRadius: 14,

    backgroundColor: '#F2FBF7',

    flexDirection: 'row',

    alignItems: 'center',
  },

  deliveryIcon: {
    fontSize: 35,
  },

  deliveryDetails: {
    flex: 1,

    marginLeft: 12,
  },

  deliveryTitle: {
    fontSize: 14,

    fontWeight: '700',

    color: '#222222',
  },

  deliveryText: {
    marginTop: 5,

    fontSize: 12,

    lineHeight: 18,

    color: '#666666',
  },

  /* BUTTONS */

  buttons: {
    width: '100%',

    marginTop: 30,
  },

  trackButton: {
    height: 52,

    borderRadius: 12,

    backgroundColor: '#00A86B',

    justifyContent: 'center',
    alignItems: 'center',
  },

  trackButtonText: {
    color: '#FFFFFF',

    fontSize: 15,

    fontWeight: '700',
  },

  homeButton: {
    height: 52,

    marginTop: 10,

    borderRadius: 12,

    borderWidth: 1,

    borderColor: '#00A86B',

    justifyContent: 'center',
    alignItems: 'center',
  },

  homeButtonText: {
    color: '#00A86B',

    fontSize: 15,

    fontWeight: '700',
  },
});

export default OrderSuccessScreen;