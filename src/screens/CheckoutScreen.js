import React, {useState} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useSelector} from 'react-redux';

function CheckoutScreen({navigation}) {
  const cartItems = useSelector(
    state => state.cart.items,
  );

  const [paymentMethod, setPaymentMethod] =
    useState('Cash on Delivery');

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0,
  );

  // Delivery fee
  const deliveryFee = subtotal > 199 ? 0 : 25;

  // Final total
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = () => {
    navigation.navigate('OrderSuccess');
  };

  return (
    <View style={styles.container}>

      {/* ================= HEADER ================= */}

      <View style={styles.header}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Checkout
        </Text>

        <View style={{width: 40}} />

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>

        {/* ================= DELIVERY ADDRESS ================= */}

        <Text style={styles.sectionTitle}>
          Delivery Address
        </Text>

        <TouchableOpacity style={styles.addressCard}>

          <View style={styles.addressIconContainer}>
            <Text style={styles.addressIcon}>
              📍
            </Text>
          </View>

          <View style={styles.addressDetails}>

            <Text style={styles.addressTitle}>
              Home
            </Text>

            <Text style={styles.addressText}>
              123, Chennai Main Road
            </Text>

            <Text style={styles.addressText}>
              Chennai, Tamil Nadu - 600001
            </Text>

          </View>

          <Text style={styles.changeText}>
            Change
          </Text>

        </TouchableOpacity>

        {/* ================= DELIVERY TIME ================= */}

        <Text style={styles.sectionTitle}>
          Delivery Time
        </Text>

        <View style={styles.deliveryCard}>

          <View>

            <Text style={styles.deliveryTitle}>
              ⚡ Express Delivery
            </Text>

            <Text style={styles.deliverySubtitle}>
              Delivery in 10–20 minutes
            </Text>

          </View>

          <Text style={styles.freeText}>
            FREE
          </Text>

        </View>

        {/* ================= PAYMENT ================= */}

        <Text style={styles.sectionTitle}>
          Payment Method
        </Text>

        {/* Cash */}

        <TouchableOpacity
          style={[
            styles.paymentCard,
            paymentMethod === 'Cash on Delivery' &&
              styles.selectedPayment,
          ]}
          onPress={() =>
            setPaymentMethod('Cash on Delivery')
          }>

          <Text style={styles.paymentIcon}>
            💵
          </Text>

          <View style={styles.paymentDetails}>

            <Text style={styles.paymentTitle}>
              Cash on Delivery
            </Text>

            <Text style={styles.paymentSubtitle}>
              Pay when your order arrives
            </Text>

          </View>

          <View
            style={[
              styles.radio,
              paymentMethod ===
                'Cash on Delivery' &&
                styles.radioSelected,
            ]}>
            {paymentMethod ===
              'Cash on Delivery' && (
              <View style={styles.radioDot} />
            )}
          </View>

        </TouchableOpacity>

        {/* UPI */}

        <TouchableOpacity
          style={[
            styles.paymentCard,
            paymentMethod === 'UPI' &&
              styles.selectedPayment,
          ]}
          onPress={() =>
            setPaymentMethod('UPI')
          }>

          <Text style={styles.paymentIcon}>
            📱
          </Text>

          <View style={styles.paymentDetails}>

            <Text style={styles.paymentTitle}>
              UPI
            </Text>

            <Text style={styles.paymentSubtitle}>
              Google Pay, PhonePe, Paytm
            </Text>

          </View>

          <View
            style={[
              styles.radio,
              paymentMethod === 'UPI' &&
                styles.radioSelected,
            ]}>
            {paymentMethod === 'UPI' && (
              <View style={styles.radioDot} />
            )}
          </View>

        </TouchableOpacity>

        {/* Card */}

        <TouchableOpacity
          style={[
            styles.paymentCard,
            paymentMethod === 'Card' &&
              styles.selectedPayment,
          ]}
          onPress={() =>
            setPaymentMethod('Card')
          }>

          <Text style={styles.paymentIcon}>
            💳
          </Text>

          <View style={styles.paymentDetails}>

            <Text style={styles.paymentTitle}>
              Credit / Debit Card
            </Text>

            <Text style={styles.paymentSubtitle}>
              Visa, Mastercard, RuPay
            </Text>

          </View>

          <View
            style={[
              styles.radio,
              paymentMethod === 'Card' &&
                styles.radioSelected,
            ]}>
            {paymentMethod === 'Card' && (
              <View style={styles.radioDot} />
            )}
          </View>

        </TouchableOpacity>

        {/* ================= ORDER SUMMARY ================= */}

        <Text style={styles.sectionTitle}>
          Order Summary
        </Text>

        <View style={styles.summaryCard}>

          <View style={styles.summaryRow}>

            <Text style={styles.summaryLabel}>
              Items
            </Text>

            <Text style={styles.summaryValue}>
              {cartItems.length}
            </Text>

          </View>

          <View style={styles.summaryRow}>

            <Text style={styles.summaryLabel}>
              Subtotal
            </Text>

            <Text style={styles.summaryValue}>
              ₹{subtotal}
            </Text>

          </View>

          <View style={styles.summaryRow}>

            <Text style={styles.summaryLabel}>
              Delivery Fee
            </Text>

            <Text style={styles.summaryValue}>
              {deliveryFee === 0
                ? 'FREE'
                : `₹${deliveryFee}`}
            </Text>

          </View>

          <View style={styles.divider} />

          <View style={styles.summaryRow}>

            <Text style={styles.totalLabel}>
              Total
            </Text>

            <Text style={styles.totalValue}>
              ₹{total}
            </Text>

          </View>

        </View>

        <View style={styles.bottomSpace} />

      </ScrollView>

      {/* ================= PLACE ORDER ================= */}

      <View style={styles.bottomContainer}>

        <View>

          <Text style={styles.bottomLabel}>
            Total
          </Text>

          <Text style={styles.bottomTotal}>
            ₹{total}
          </Text>

        </View>

        <TouchableOpacity
          style={styles.orderButton}
          onPress={handlePlaceOrder}>

          <Text style={styles.orderButtonText}>
            Place Order
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
  },

  /* HEADER */

  header: {
    height: 85,
    paddingHorizontal: 20,
    paddingTop: 35,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  backButton: {
    width: 40,
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',
  },

  backText: {
    fontSize: 34,
    color: '#222222',
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222222',
  },

  /* CONTENT */

  content: {
    padding: 20,
    paddingBottom: 140,
  },

  sectionTitle: {
    marginTop: 10,
    marginBottom: 12,

    fontSize: 18,
    fontWeight: '700',
    color: '#222222',
  },

  /* ADDRESS */

  addressCard: {
    padding: 15,

    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 12,

    flexDirection: 'row',
    alignItems: 'center',
  },

  addressIconContainer: {
    width: 45,
    height: 45,

    borderRadius: 23,

    backgroundColor: '#E8F8F1',

    justifyContent: 'center',
    alignItems: 'center',
  },

  addressIcon: {
    fontSize: 22,
  },

  addressDetails: {
    flex: 1,
    marginLeft: 12,
  },

  addressTitle: {
    fontSize: 15,
    fontWeight: '700',
  },

  addressText: {
    marginTop: 3,
    fontSize: 12,
    color: '#777777',
  },

  changeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#00A86B',
  },

  /* DELIVERY */

  deliveryCard: {
    padding: 15,

    borderRadius: 12,

    backgroundColor: '#F8F8F8',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  deliveryTitle: {
    fontSize: 15,
    fontWeight: '700',
  },

  deliverySubtitle: {
    marginTop: 5,
    fontSize: 12,
    color: '#777777',
  },

  freeText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#00A86B',
  },

  /* PAYMENT */

  paymentCard: {
    padding: 15,
    marginBottom: 10,

    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 12,

    flexDirection: 'row',
    alignItems: 'center',
  },

  selectedPayment: {
    borderColor: '#00A86B',
    backgroundColor: '#F2FBF7',
  },

  paymentIcon: {
    fontSize: 25,
  },

  paymentDetails: {
    flex: 1,
    marginLeft: 12,
  },

  paymentTitle: {
    fontSize: 14,
    fontWeight: '700',
  },

  paymentSubtitle: {
    marginTop: 4,
    fontSize: 12,
    color: '#777777',
  },

  radio: {
    width: 22,
    height: 22,

    borderRadius: 11,

    borderWidth: 2,
    borderColor: '#BBBBBB',

    justifyContent: 'center',
    alignItems: 'center',
  },

  radioSelected: {
    borderColor: '#00A86B',
  },

  radioDot: {
    width: 10,
    height: 10,

    borderRadius: 5,

    backgroundColor: '#00A86B',
  },

  /* SUMMARY */

  summaryCard: {
    padding: 18,

    backgroundColor: '#F8F8F8',
    borderRadius: 12,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginBottom: 12,
  },

  summaryLabel: {
    color: '#666666',
  },

  summaryValue: {
    fontWeight: '600',
  },

  divider: {
    height: 1,
    backgroundColor: '#DDDDDD',
    marginVertical: 8,
  },

  totalLabel: {
    fontSize: 17,
    fontWeight: '700',
  },

  totalValue: {
    fontSize: 18,
    fontWeight: '800',
  },

  /* BOTTOM */

  bottomContainer: {
    position: 'absolute',

    bottom: 0,
    left: 0,
    right: 0,

    padding: 15,

    backgroundColor: '#FFFFFF',

    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bottomLabel: {
    fontSize: 12,
    color: '#777777',
  },

  bottomTotal: {
    fontSize: 20,
    fontWeight: '800',
  },

  orderButton: {
    height: 48,

    paddingHorizontal: 25,

    borderRadius: 10,

    backgroundColor: '#00A86B',

    justifyContent: 'center',
    alignItems: 'center',
  },

  orderButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  bottomSpace: {
    height: 30,
  },
});

export default CheckoutScreen;