import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';

import {Ionicons} from '@react-native-vector-icons/ionicons';

function OrderAgainScreen({navigation}) {
  const [search, setSearch] = useState('');

  // Sample previous orders
  const orders = [
    {
      id: 'ORD001',
      date: 'Today, 10:30 AM',
      status: 'Delivered',
      total: '₹157',
      items: [
        {
          name: 'Fresh Banana',
          quantity: '1 kg',
          price: '₹45',
          image:
            'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400',
        },
        {
          name: 'Fresh Milk',
          quantity: '500 ml',
          price: '₹32',
          image:
            'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400',
        },
        {
          name: 'Lays Classic',
          quantity: '50 g',
          price: '₹20',
          image:
            'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400',
        },
      ],
    },

    {
      id: 'ORD002',
      date: '28 Aug, 6:45 PM',
      status: 'Delivered',
      total: '₹212',
      items: [
        {
          name: 'Fresh Potato',
          quantity: '1 kg',
          price: '₹40',
          image:
            'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400',
        },
        {
          name: 'Coca Cola',
          quantity: '750 ml',
          price: '₹40',
          image:
            'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400',
        },
      ],
    },

    {
      id: 'ORD003',
      date: '24 Aug, 8:20 PM',
      status: 'Delivered',
      total: '₹135',
      items: [
        {
          name: 'Fresh Banana',
          quantity: '1 kg',
          price: '₹45',
          image:
            'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400',
        },
        {
          name: 'Fresh Milk',
          quantity: '500 ml',
          price: '₹32',
          image:
            'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400',
        },
      ],
    },
  ];

  const filteredOrders = orders.filter(order =>
    order.items.some(item =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    ),
  );

  const handleBack = () => {
    navigation.goBack();
  };

  const handleBackToHome = () => {
    navigation.navigate('MainTabs', {
      screen: 'Home',
    });
  };

  const handleReorder = order => {
    console.log('Reordering:', order.id);

    // Connect this to Redux cart later
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBack}
          activeOpacity={0.7}>
          <Ionicons
            name="arrow-back"
            size={23}
            color="#222222"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Order Again
        </Text>

        <View style={styles.headerSpace} />

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>

        {/* Intro */}
        <View style={styles.introSection}>

          <Text style={styles.title}>
            Order your favourites again
          </Text>

          <Text style={styles.subtitle}>
            Quickly reorder items from your previous orders.
          </Text>

        </View>

        {/* Search */}
        <View style={styles.searchContainer}>

          <Ionicons
            name="search-outline"
            size={21}
            color="#777777"
          />

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search your previous orders"
            placeholderTextColor="#888888"
            style={styles.searchInput}
          />

          {search.length > 0 && (
            <TouchableOpacity
              onPress={() => setSearch('')}
              activeOpacity={0.7}>

              <Ionicons
                name="close-circle"
                size={20}
                color="#999999"
              />

            </TouchableOpacity>
          )}

        </View>

        {/* Section Title */}
        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>
            Previous Orders
          </Text>

          <Text style={styles.orderCount}>
            {filteredOrders.length} orders
          </Text>

        </View>

        {/* Orders */}
        {filteredOrders.length > 0 ? (
          filteredOrders.map(order => (

            <View
              key={order.id}
              style={styles.orderCard}>

              {/* Order Header */}
              <View style={styles.orderHeader}>

                <View>

                  <Text style={styles.orderId}>
                    Order #{order.id}
                  </Text>

                  <Text style={styles.orderDate}>
                    {order.date}
                  </Text>

                </View>

                <View style={styles.statusContainer}>

                  <Ionicons
                    name="checkmark-circle"
                    size={15}
                    color="#2E8B57"
                  />

                  <Text style={styles.statusText}>
                    {order.status}
                  </Text>

                </View>

              </View>

              {/* Products */}
              <View style={styles.productsContainer}>

                {order.items.map((item, index) => (

                  <View
                    key={index}
                    style={styles.productRow}>

                    <Image
                      source={{uri: item.image}}
                      style={styles.productImage}
                    />

                    <View style={styles.productInfo}>

                      <Text
                        style={styles.productName}
                        numberOfLines={1}>
                        {item.name}
                      </Text>

                      <Text style={styles.productQuantity}>
                        {item.quantity}
                      </Text>

                    </View>

                    <Text style={styles.productPrice}>
                      {item.price}
                    </Text>

                  </View>

                ))}

              </View>

              {/* Order Footer */}
              <View style={styles.orderFooter}>

                <View>

                  <Text style={styles.totalLabel}>
                    Total
                  </Text>

                  <Text style={styles.totalAmount}>
                    {order.total}
                  </Text>

                </View>

                <TouchableOpacity
                  style={styles.reorderButton}
                  onPress={() => handleReorder(order)}
                  activeOpacity={0.8}>

                  <Ionicons
                    name="refresh"
                    size={18}
                    color="#FFFFFF"
                  />

                  <Text style={styles.reorderText}>
                    Reorder
                  </Text>

                </TouchableOpacity>

              </View>

            </View>

          ))
        ) : (

          /* No Results */
          <View style={styles.emptyContainer}>

            <View style={styles.emptyIconContainer}>

              <Ionicons
                name="search-outline"
                size={40}
                color="#999999"
              />

            </View>

            <Text style={styles.emptyTitle}>
              No orders found
            </Text>

            <Text style={styles.emptyText}>
              Try searching for another product.
            </Text>

          </View>

        )}

        {/* Home Button */}
        <TouchableOpacity
          style={styles.homeButton}
          onPress={handleBackToHome}
          activeOpacity={0.8}>

          <Ionicons
            name="home-outline"
            size={19}
            color="#FFFFFF"
          />

          <Text style={styles.homeButtonText}>
            Back to Home
          </Text>

        </TouchableOpacity>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },

  header: {
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },

  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 19,
    fontWeight: '800',
    color: '#222222',
  },

  headerSpace: {
    width: 40,
  },

  scrollContent: {
    padding: 16,
    paddingBottom: 35,
  },

  introSection: {
    marginBottom: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#222222',
  },

  subtitle: {
    marginTop: 5,
    fontSize: 13,
    color: '#777777',
  },

  searchContainer: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#222222',
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#222222',
  },

  orderCount: {
    fontSize: 12,
    color: '#777777',
  },

  orderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 14,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },

  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  orderId: {
    fontSize: 14,
    fontWeight: '800',
    color: '#222222',
  },

  orderDate: {
    marginTop: 4,
    fontSize: 11,
    color: '#888888',
  },

  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#EEF8F1',
  },

  statusText: {
    marginLeft: 4,
    fontSize: 11,
    fontWeight: '700',
    color: '#2E8B57',
  },

  productsContainer: {
    paddingVertical: 10,
  },

  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },

  productImage: {
    width: 55,
    height: 55,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
  },

  productInfo: {
    flex: 1,
    marginLeft: 12,
  },

  productName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333333',
  },

  productQuantity: {
    marginTop: 4,
    fontSize: 11,
    color: '#888888',
  },

  productPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333333',
  },

  orderFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },

  totalLabel: {
    fontSize: 11,
    color: '#888888',
  },

  totalAmount: {
    marginTop: 2,
    fontSize: 17,
    fontWeight: '800',
    color: '#222222',
  },

  reorderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 22,
    backgroundColor: '#B87A00',
  },

  reorderText: {
    marginLeft: 6,
    fontSize: 13,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },

  emptyIconContainer: {
    width: 75,
    height: 75,
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
  },

  emptyTitle: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: '800',
    color: '#333333',
  },

  emptyText: {
    marginTop: 6,
    fontSize: 13,
    color: '#888888',
  },

  homeButton: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    marginTop: 5,
    backgroundColor: '#B87A00',
  },

  homeButtonText: {
    marginLeft: 7,
    fontSize: 14,
    fontWeight: '800',
    color: '#FFFFFF',
  },

});

export default OrderAgainScreen;