import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../redux/slices/cartSlice';

function CartScreen({navigation}) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items,
  );

  const totalItems = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0,
  );

  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0,
  );

  const deliveryFee =
    subtotal >= 299 || subtotal === 0
      ? 0
      : 25;

  const total = subtotal + deliveryFee;

  const handleIncrease = productId => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecrease = productId => {
    dispatch(decreaseQuantity(productId));
  };

  const handleRemove = productId => {
    dispatch(removeFromCart(productId));
  };

  return (
    <View style={styles.container}>

      {/* HEADER */}

      <View style={styles.header}>

        <Text style={styles.title}>
          My Cart
        </Text>

        {cartItems.length > 0 && (
          <Text style={styles.itemCount}>
            {totalItems} items
          </Text>
        )}

      </View>

      {cartItems.length === 0 ? (

        /* EMPTY CART */

        <View style={styles.emptyContainer}>

          <Text style={styles.emptyIcon}>
            🛒
          </Text>

          <Text style={styles.emptyTitle}>
            Your cart is empty
          </Text>

          <Text style={styles.emptyText}>
            Add some products to your cart
            and they will appear here.
          </Text>

          <TouchableOpacity
  style={styles.shopButton}
  onPress={() =>
    navigation.getParent()?.navigate('MainTabs', {
      screen: 'Home',
    })
  }>

  <Text style={styles.shopButtonText}>
    Start Shopping
  </Text>

</TouchableOpacity>

        </View>

      ) : (

        <ScrollView
          showsVerticalScrollIndicator={false}>

          {/* CART ITEMS */}

          <View style={styles.itemsContainer}>

            {cartItems.map(item => (

              <View
                key={item.id}
                style={styles.cartItem}>

                {/* IMAGE */}

                <View style={styles.imageContainer}>

                  <Image
                    source={{uri: item.image}}
                    style={styles.image}
                    resizeMode="contain"
                  />

                </View>

                {/* DETAILS */}

                <View style={styles.details}>

                  <Text
                    style={styles.productName}
                    numberOfLines={2}>

                    {item.name}

                  </Text>

                  {item.unit && (
                    <Text style={styles.unit}>
                      {item.unit}
                    </Text>
                  )}

                  <Text style={styles.price}>
                    ₹{item.price}
                  </Text>

                  {/* QUANTITY */}

                  <View style={styles.quantityContainer}>

                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() =>
                        handleDecrease(item.id)
                      }>

                      <Text style={styles.quantityText}>
                        −
                      </Text>

                    </TouchableOpacity>

                    <Text style={styles.quantity}>
                      {item.quantity}
                    </Text>

                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() =>
                        handleIncrease(item.id)
                      }>

                      <Text style={styles.quantityText}>
                        +
                      </Text>

                    </TouchableOpacity>

                  </View>

                </View>

                {/* TOTAL + REMOVE */}

                <View style={styles.rightSection}>

                  <Text style={styles.itemTotal}>
                    ₹{item.price * item.quantity}
                  </Text>

                  <TouchableOpacity
                    onPress={() =>
                      handleRemove(item.id)
                    }>

                    <Text style={styles.remove}>
                      Remove
                    </Text>

                  </TouchableOpacity>

                </View>

              </View>

            ))}

          </View>

          {/* DELIVERY INFO */}

          <View style={styles.deliveryCard}>

            <Text style={styles.deliveryIcon}>
              🛵
            </Text>

            <View style={styles.deliveryDetails}>

              <Text style={styles.deliveryTitle}>
                Delivery in 10–20 minutes
              </Text>

              <Text style={styles.deliveryText}>
                Fast delivery to your doorstep
              </Text>

            </View>

          </View>

          {/* BILL */}

          <View style={styles.billCard}>

            <Text style={styles.billTitle}>
              Bill Details
            </Text>

            <View style={styles.billRow}>

              <Text style={styles.billLabel}>
                Item Total
              </Text>

              <Text style={styles.billValue}>
                ₹{subtotal}
              </Text>

            </View>

            <View style={styles.billRow}>

              <Text style={styles.billLabel}>
                Delivery Fee
              </Text>

              <Text style={styles.billValue}>

                {deliveryFee === 0
                  ? 'FREE'
                  : `₹${deliveryFee}`}

              </Text>

            </View>

            <View style={styles.divider} />

            <View style={styles.billRow}>

              <Text style={styles.totalLabel}>
                Grand Total
              </Text>

              <Text style={styles.totalValue}>
                ₹{total}
              </Text>

            </View>

          </View>

          <View style={styles.bottomSpace} />

        </ScrollView>

      )}

      {/* CHECKOUT BUTTON */}

      {cartItems.length > 0 && (

        <View style={styles.checkoutBar}>

          <View>

            <Text style={styles.totalSmall}>
              Total
            </Text>

            <Text style={styles.checkoutTotal}>
              ₹{total}
            </Text>

          </View>

          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={() =>
              navigation.navigate('Checkout')
            }>

            <Text style={styles.checkoutText}>
              Proceed to Checkout
            </Text>

            <Text style={styles.arrow}>
              →
            </Text>

          </TouchableOpacity>

        </View>

      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 20,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#222222',
  },

  itemCount: {
    fontSize: 13,
    color: '#777777',
  },

  /* EMPTY */

  emptyContainer: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 30,
  },

  emptyIcon: {
    fontSize: 70,
  },

  emptyTitle: {
    marginTop: 20,

    fontSize: 21,
    fontWeight: '800',
  },

  emptyText: {
    marginTop: 8,

    fontSize: 13,
    color: '#777777',

    textAlign: 'center',
  },

  shopButton: {
    marginTop: 25,

    paddingHorizontal: 25,
    height: 48,

    borderRadius: 10,

    backgroundColor: '#00A86B',

    justifyContent: 'center',
    alignItems: 'center',
  },

  shopButtonText: {
    color: '#FFFFFF',

    fontSize: 14,
    fontWeight: '700',
  },

  /* ITEMS */

  itemsContainer: {
    paddingHorizontal: 15,
  },

  cartItem: {
    minHeight: 130,

    marginBottom: 12,
    padding: 10,

    borderWidth: 1,
    borderColor: '#EEEEEE',

    borderRadius: 14,

    flexDirection: 'row',

    alignItems: 'center',
  },

  imageContainer: {
    width: 90,
    height: 90,

    borderRadius: 10,

    backgroundColor: '#F8F8F8',

    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '85%',
    height: '85%',
  },

  details: {
    flex: 1,

    marginLeft: 12,
  },

  productName: {
    fontSize: 14,
    fontWeight: '700',

    color: '#222222',
  },

  unit: {
    marginTop: 3,

    fontSize: 11,
    color: '#888888',
  },

  price: {
    marginTop: 6,

    fontSize: 14,
    fontWeight: '700',
  },

  quantityContainer: {
    width: 90,
    height: 32,

    marginTop: 8,

    borderWidth: 1,
    borderColor: '#00A86B',

    borderRadius: 7,

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-between',
  },

  quantityButton: {
    width: 28,
    height: 30,

    justifyContent: 'center',
    alignItems: 'center',
  },

  quantityText: {
    fontSize: 19,
    color: '#00A86B',
  },

  quantity: {
    fontSize: 13,
    fontWeight: '700',
  },

  rightSection: {
    height: 100,

    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  itemTotal: {
    fontSize: 14,
    fontWeight: '800',
  },

  remove: {
    fontSize: 11,
    color: '#E53935',
  },

  /* DELIVERY */

  deliveryCard: {
    marginHorizontal: 15,
    marginTop: 10,

    padding: 15,

    borderRadius: 12,

    backgroundColor: '#F2FBF7',

    flexDirection: 'row',
    alignItems: 'center',
  },

  deliveryIcon: {
    fontSize: 30,
  },

  deliveryDetails: {
    marginLeft: 12,
  },

  deliveryTitle: {
    fontSize: 13,
    fontWeight: '700',
  },

  deliveryText: {
    marginTop: 3,

    fontSize: 11,
    color: '#777777',
  },

  /* BILL */

  billCard: {
    marginHorizontal: 15,
    marginTop: 15,

    padding: 18,

    borderRadius: 12,

    backgroundColor: '#F8F8F8',
  },

  billTitle: {
    fontSize: 16,
    fontWeight: '700',

    marginBottom: 15,
  },

  billRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 10,
  },

  billLabel: {
    fontSize: 13,
    color: '#777777',
  },

  billValue: {
    fontSize: 13,
    fontWeight: '600',
  },

  divider: {
    height: 1,

    backgroundColor: '#DDDDDD',

    marginVertical: 5,
  },

  totalLabel: {
    fontSize: 15,
    fontWeight: '800',
  },

  totalValue: {
    fontSize: 16,
    fontWeight: '800',

    color: '#00A86B',
  },

  bottomSpace: {
    height: 100,
  },

  /* CHECKOUT */

  checkoutBar: {
    minHeight: 75,

    paddingHorizontal: 18,
    paddingVertical: 10,

    backgroundColor: '#FFFFFF',

    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-between',
  },

  totalSmall: {
    fontSize: 11,
    color: '#777777',
  },

  checkoutTotal: {
    marginTop: 2,

    fontSize: 19,
    fontWeight: '800',
  },

  checkoutButton: {
    height: 50,

    paddingHorizontal: 18,

    borderRadius: 10,

    backgroundColor: '#00A86B',

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
  },

  checkoutText: {
    color: '#FFFFFF',

    fontSize: 13,
    fontWeight: '700',
  },

  arrow: {
    marginLeft: 8,

    fontSize: 18,
    color: '#FFFFFF',
  },

});

export default CartScreen;