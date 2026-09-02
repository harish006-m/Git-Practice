import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {addToCart} from '../redux/slices/cartSlice';
import {toggleFavorite} from '../redux/slices/favoriteSlice';

function ProductCard({
  product,
  onPress,
  onAddToCart,
}) {
  const dispatch = useDispatch();

  const favorites = useSelector(
    state => state.favorites.items,
  );

  const isFavorite = favorites.some(
    item => item.id === product.id,
  );

  // ================= FAVORITE =================

  const handleFavorite = () => {
    dispatch(toggleFavorite(product));
  };

  // ================= ADD TO CART =================

  const handleAdd = () => {
    if (onAddToCart) {
      onAddToCart(product);
    } else {
      dispatch(addToCart(product));
    }
  };

  // ================= PRODUCT PRESS =================

  const handleProductPress = () => {
    if (onPress) {
      onPress(product);
    }
  };

  return (
    <View style={styles.card}>

      {/* ================= PRODUCT IMAGE ================= */}

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleProductPress}>

        <View style={styles.imageContainer}>

          {/* FAVORITE */}

          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={handleFavorite}
            activeOpacity={0.7}>

            <Text
              style={[
                styles.favoriteIcon,
                isFavorite &&
                  styles.favoriteActive,
              ]}>

              {isFavorite ? '♥' : '♡'}

            </Text>

          </TouchableOpacity>

          {/* IMAGE */}

          <Image
            source={{uri: product.image}}
            style={styles.image}
            resizeMode="contain"
          />

        </View>

        {/* ================= PRODUCT NAME ================= */}

        <Text
          style={styles.name}
          numberOfLines={2}>

          {product.name}

        </Text>

        {/* ================= UNIT ================= */}

        {product.unit && (
          <Text style={styles.unit}>
            {product.unit}
          </Text>
        )}

      </TouchableOpacity>

      {/* ================= PRICE + ADD ================= */}

      <View style={styles.bottomRow}>

        <Text style={styles.price}>
          ₹{product.price}
        </Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAdd}
          activeOpacity={0.7}>

          <Text style={styles.addText}>
            +
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  // ================= CARD =================

  card: {
    width: 165,
    marginBottom: 18,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 14,
  },

  // ================= IMAGE =================

  imageContainer: {
    width: '100%',
    height: 130,
    borderRadius: 10,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '90%',
    height: '90%',
  },

  // ================= FAVORITE =================

  favoriteButton: {
    position: 'absolute',

    top: 8,
    right: 8,

    width: 32,
    height: 32,

    borderRadius: 16,

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',

    zIndex: 2,
  },

  favoriteIcon: {
    fontSize: 22,
    color: '#777777',
  },

  favoriteActive: {
    color: '#E53935',
  },

  // ================= NAME =================

  name: {
    marginTop: 10,

    fontSize: 14,
    fontWeight: '700',

    color: '#222222',

    minHeight: 38,
  },

  // ================= UNIT =================

  unit: {
    marginTop: 3,

    fontSize: 11,

    color: '#888888',
  },

  // ================= BOTTOM =================

  bottomRow: {
    marginTop: 10,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },

  price: {
    fontSize: 16,

    fontWeight: '800',

    color: '#222222',
  },

  // ================= ADD BUTTON =================

  addButton: {
    width: 34,
    height: 34,

    borderRadius: 8,

    backgroundColor: '#00A86B',

    justifyContent: 'center',

    alignItems: 'center',
  },

  addText: {
    fontSize: 24,

    lineHeight: 26,

    color: '#FFFFFF',

    fontWeight: '500',
  },

});

export default ProductCard;