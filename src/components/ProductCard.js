import React from 'react';
import {toggleFavorite} from '../redux/slices/favoriteSlice';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {addToCart} from '../redux/slices/cartSlice';

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

const handleFavorite = () => {
  dispatch(toggleFavorite(product));
};
  const handleAdd = () => {
    if (onAddToCart) {
      onAddToCart(product);
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => {
        if (onPress) {
          onPress(product);
        }
      }}>

      {/* PRODUCT IMAGE */}

     <View style={styles.imageContainer}>

  <TouchableOpacity
    style={styles.favoriteButton}
    onPress={handleFavorite}>

    <Text
      style={[
        styles.favoriteIcon,
        isFavorite && styles.favoriteActive,
      ]}>
      {isFavorite ? '♥' : '♡'}
    </Text>

  </TouchableOpacity>

  <Image
    source={{uri: product.image}}
    style={styles.image}
    resizeMode="contain"
  />

</View>

      {/* PRODUCT NAME */}

      <Text
        style={styles.name}
        numberOfLines={2}>

        {product.name}

      </Text>

      {/* UNIT */}

      {product.unit && (
        <Text style={styles.unit}>
          {product.unit}
        </Text>
      )}

      {/* PRICE + ADD */}

      <View style={styles.bottomRow}>

        <Text style={styles.price}>
          ₹{product.price}
        </Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAdd}>

          <Text style={styles.addText}>
            +
          </Text>

        </TouchableOpacity>

      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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

  card: {
    width: 165,

    marginBottom: 18,
    padding: 10,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#EEEEEE',

    borderRadius: 14,
  },

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

  name: {
    marginTop: 10,

    fontSize: 14,
    fontWeight: '700',

    color: '#222222',

    minHeight: 38,
  },

  unit: {
    marginTop: 3,

    fontSize: 11,
    color: '#888888',
  },

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