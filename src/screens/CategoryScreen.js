import React, {useState} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import ProductCard from '../components/ProductCard';

import categories from '../data/categories';

import {addToCart} from '../redux/slices/cartSlice';

function CategoriesScreen({navigation}) {
  const dispatch = useDispatch();

  const products = useSelector(
    state => state.products.items,
  );

  const [selectedCategory, setSelectedCategory] =
    useState(null);

  // ================= CATEGORY =================

  const handleCategoryPress = category => {
    setSelectedCategory(category.name);
  };

  // ================= PRODUCT DETAILS =================

  const handleProductPress = product => {
    navigation.navigate('ProductDetails', {
      product,
    });
  };

  // ================= ADD TO CART =================

 const handleAddToCart = product => {
  dispatch(addToCart(product));

  navigation.navigate('Cart');
};
  // ================= FILTER PRODUCTS =================

  const filteredProducts = selectedCategory
    ? products.filter(
        product =>
          product.category === selectedCategory,
      )
    : products;

  return (
    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}>

        {/* ================= HEADER ================= */}

        <View style={styles.header}>

          <Text style={styles.title}>
            Categories
          </Text>

          <Text style={styles.subtitle}>
            Shop groceries by category
          </Text>

        </View>

        {/* ================= CATEGORY LIST ================= */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}>

          {categories.map(category => {

            const isSelected =
              selectedCategory === category.name;

            return (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryItem,
                  isSelected &&
                    styles.selectedCategory,
                ]}
                onPress={() =>
                  handleCategoryPress(category)
                }>

                <View
                  style={[
                    styles.iconContainer,
                    isSelected &&
                      styles.selectedIconContainer,
                  ]}>

                  <Text style={styles.icon}>
                    {category.icon}
                  </Text>

                </View>

                <Text
                  style={[
                    styles.categoryName,
                    isSelected &&
                      styles.selectedCategoryName,
                  ]}>

                  {category.name}

                </Text>

              </TouchableOpacity>
            );
          })}

        </ScrollView>

        {/* ================= SELECTED CATEGORY ================= */}

        <View style={styles.productsHeader}>

          <Text style={styles.sectionTitle}>
            {selectedCategory ||
              'All Products'}
          </Text>

          <Text style={styles.productCount}>
            {filteredProducts.length} products
          </Text>

        </View>

        {/* ================= PRODUCTS ================= */}

        {filteredProducts.length > 0 ? (

          <View style={styles.productGrid}>

            {filteredProducts.map(product => (

              <ProductCard
                key={product.id}
                product={product}

                onPress={handleProductPress}

                onAddToCart={handleAddToCart}
              />

            ))}

          </View>

        ) : (

          <View style={styles.emptyContainer}>

            <Text style={styles.emptyIcon}>
              🛒
            </Text>

            <Text style={styles.emptyTitle}>
              No products found
            </Text>

            <Text style={styles.emptyText}>
              There are no products in this
              category yet.
            </Text>

          </View>

        )}

        <View style={styles.bottomSpace} />

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  /* ================= HEADER ================= */

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

  /* ================= CATEGORY ================= */

  categoryList: {
    paddingHorizontal: 20,
    paddingBottom: 25,
  },

  categoryItem: {
    width: 95,
    marginRight: 12,
    alignItems: 'center',
  },

  selectedCategory: {
    transform: [{scale: 1.03}],
  },

  iconContainer: {
    width: 75,
    height: 75,

    borderRadius: 15,

    backgroundColor: '#F2F8F5',

    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedIconContainer: {
    backgroundColor: '#DDF7EC',

    borderWidth: 2,

    borderColor: '#00A86B',
  },

  icon: {
    fontSize: 34,
  },

  categoryName: {
    marginTop: 8,

    fontSize: 11,

    fontWeight: '600',

    textAlign: 'center',

    color: '#333333',
  },

  selectedCategoryName: {
    color: '#00A86B',

    fontWeight: '800',
  },

  /* ================= PRODUCTS HEADER ================= */

  productsHeader: {
    paddingHorizontal: 20,

    marginBottom: 15,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },

  sectionTitle: {
    fontSize: 20,

    fontWeight: '700',

    color: '#222222',
  },

  productCount: {
    fontSize: 12,

    color: '#777777',
  },

  /* ================= PRODUCT GRID ================= */

  productGrid: {
    paddingHorizontal: 15,

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',
  },

  /* ================= EMPTY ================= */

  emptyContainer: {
    alignItems: 'center',

    paddingTop: 60,

    paddingHorizontal: 30,
  },

  emptyIcon: {
    fontSize: 55,
  },

  emptyTitle: {
    marginTop: 15,

    fontSize: 19,

    fontWeight: '700',
  },

  emptyText: {
    marginTop: 6,

    fontSize: 13,

    color: '#777777',

    textAlign: 'center',
  },

  bottomSpace: {
    height: 50,
  },

});

export default CategoriesScreen;