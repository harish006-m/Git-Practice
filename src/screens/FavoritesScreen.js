import React from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {useSelector} from 'react-redux';

import ProductCard from '../components/ProductCard';

function FavoritesScreen({navigation}) {
  const favorites = useSelector(
    state => state.favorites.items,
  );

  const handleProductPress = product => {
    navigation.navigate('ProductDetails', {
      product,
    });
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>
          Favorites ❤️
        </Text>

        <Text style={styles.subtitle}>
          Products you love
        </Text>

      </View>

      {favorites.length === 0 ? (

        <View style={styles.emptyContainer}>

          <Text style={styles.emptyIcon}>
            ♡
          </Text>

          <Text style={styles.emptyTitle}>
            No favorites yet
          </Text>

          <Text style={styles.emptyText}>
            Tap the heart on a product to
            save it here.
          </Text>

        </View>

      ) : (

        <ScrollView
          showsVerticalScrollIndicator={false}>

          <View style={styles.productGrid}>

            {favorites.map(product => (

              <ProductCard
                key={product.id}
                product={product}
                onPress={handleProductPress}
              />

            ))}

          </View>

        </ScrollView>

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
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#222222',
  },

  subtitle: {
    marginTop: 5,
    fontSize: 14,
    color: '#777777',
  },

  productGrid: {
    paddingHorizontal: 15,

    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'space-between',
  },

  emptyContainer: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 30,
  },

  emptyIcon: {
    fontSize: 70,
    color: '#CCCCCC',
  },

  emptyTitle: {
    marginTop: 20,

    fontSize: 21,
    fontWeight: '700',
  },

  emptyText: {
    marginTop: 8,

    fontSize: 13,
    color: '#777777',

    textAlign: 'center',
  },

});

export default FavoritesScreen;