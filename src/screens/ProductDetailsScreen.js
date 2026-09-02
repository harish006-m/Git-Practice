import React, {useState} from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {addToCart} from '../redux/slices/cartSlice';
import {toggleFavorite} from '../redux/slices/favoriteSlice';

function ProductDetailsScreen({route, navigation}) {
  const {product} = route.params;

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const favorites = useSelector(
    state => state.favorites.items,
  );

  const isFavorite = favorites.some(
    item => item.id === product.id,
  );

  const handleFavorite = () => {
    dispatch(toggleFavorite(product));
  };

  const increaseQuantity = () => {
    setQuantity(previous => previous + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(previous =>
      previous > 1 ? previous - 1 : 1,
    );
  };

 const handleAddToCart = () => {
  for (let i = 0; i < quantity; i++) {
    dispatch(addToCart(product));
  }

  navigation.navigate('MainTabs', {
  screen: 'Cart',
});
};

  return (
    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}>

        {/* ================= TOP BAR ================= */}

        <View style={styles.topBar}>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>

            <Text style={styles.backIcon}>
              ‹
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={handleFavorite}>

            <Text
              style={[
                styles.favoriteIcon,
                isFavorite &&
                  styles.favoriteActive,
              ]}>

              {isFavorite ? '♥' : '♡'}

            </Text>

          </TouchableOpacity>

        </View>

        {/* ================= IMAGE ================= */}

        <View style={styles.imageContainer}>

          <Image
            source={{uri: product.image}}
            style={styles.productImage}
            resizeMode="contain"
          />

        </View>

        {/* ================= PRODUCT INFO ================= */}

        <View style={styles.detailsContainer}>

          <Text style={styles.productName}>
            {product.name}
          </Text>

          {product.unit && (
            <Text style={styles.unit}>
              {product.unit}
            </Text>
          )}

          {/* RATING */}

          <View style={styles.ratingRow}>

            <View style={styles.ratingBox}>

              <Text style={styles.star}>
                ★
              </Text>

              <Text style={styles.rating}>
                {product.rating || '4.5'}
              </Text>

            </View>

            <Text style={styles.ratingText}>
              Excellent product
            </Text>

          </View>

          {/* PRICE */}

          <View style={styles.priceRow}>

            <Text style={styles.price}>
              ₹{product.price}
            </Text>

            {product.originalPrice && (
              <Text style={styles.originalPrice}>
                ₹{product.originalPrice}
              </Text>
            )}

            {product.discount && (
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>
                  {product.discount}% OFF
                </Text>
              </View>
            )}

          </View>

          {/* DIVIDER */}

          <View style={styles.divider} />

          {/* DESCRIPTION */}

          <Text style={styles.sectionTitle}>
            About this product
          </Text>

          <Text style={styles.description}>
            {product.description ||
              'Fresh and high-quality product carefully selected for your everyday needs. Order now and get it delivered to your doorstep.'}
          </Text>

          {/* PRODUCT INFORMATION */}

          <Text style={styles.sectionTitle}>
            Product Information
          </Text>

          <View style={styles.infoCard}>

            <View style={styles.infoRow}>

              <Text style={styles.infoLabel}>
                Category
              </Text>

              <Text style={styles.infoValue}>
                {product.category || 'Grocery'}
              </Text>

            </View>

            <View style={styles.infoRow}>

              <Text style={styles.infoLabel}>
                Availability
              </Text>

              <Text style={styles.available}>
                In Stock
              </Text>

            </View>

            <View style={styles.infoRow}>

              <Text style={styles.infoLabel}>
                Delivery
              </Text>

              <Text style={styles.infoValue}>
                10–20 minutes
              </Text>

            </View>

          </View>

          <View style={styles.bottomSpace} />

        </View>

      </ScrollView>

      {/* ================= BOTTOM BAR ================= */}

      <View style={styles.bottomBar}>

        {/* QUANTITY */}

        <View style={styles.quantityContainer}>

          <TouchableOpacity
            style={styles.quantityButton}
            onPress={decreaseQuantity}>

            <Text style={styles.quantityText}>
              −
            </Text>

          </TouchableOpacity>

          <Text style={styles.quantity}>
            {quantity}
          </Text>

          <TouchableOpacity
            style={styles.quantityButton}
            onPress={increaseQuantity}>

            <Text style={styles.quantityText}>
              +
            </Text>

          </TouchableOpacity>

        </View>

        {/* ADD TO CART */}

        <TouchableOpacity
          style={styles.cartButton}
          onPress={handleAddToCart}>

          <Text style={styles.cartButtonText}>
            Add to Cart
          </Text>

          <Text style={styles.cartTotal}>
            ₹{product.price * quantity}
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

  /* TOP BAR */

  topBar: {
    height: 60,

    paddingHorizontal: 18,

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 40,
    height: 40,

    borderRadius: 20,

    backgroundColor: '#F5F5F5',

    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    fontSize: 32,
    color: '#222222',

    marginTop: -4,
  },

  favoriteButton: {
    width: 40,
    height: 40,

    borderRadius: 20,

    backgroundColor: '#F5F5F5',

    justifyContent: 'center',
    alignItems: 'center',
  },

  favoriteIcon: {
    fontSize: 25,
    color: '#777777',
  },

  favoriteActive: {
    color: '#E53935',
  },

  /* IMAGE */

  imageContainer: {
    height: 280,

    marginHorizontal: 20,

    borderRadius: 20,

    backgroundColor: '#F8F8F8',

    justifyContent: 'center',
    alignItems: 'center',
  },

  productImage: {
    width: '85%',
    height: '85%',
  },

  /* DETAILS */

  detailsContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  productName: {
    fontSize: 24,
    fontWeight: '800',

    color: '#222222',
  },

  unit: {
    marginTop: 5,

    fontSize: 13,
    color: '#888888',
  },

  /* RATING */

  ratingRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 14,
  },

  ratingBox: {
    paddingHorizontal: 9,
    paddingVertical: 5,

    borderRadius: 6,

    backgroundColor: '#00A86B',

    flexDirection: 'row',
    alignItems: 'center',
  },

  star: {
    fontSize: 12,
    color: '#FFFFFF',
  },

  rating: {
    marginLeft: 4,

    fontSize: 12,
    fontWeight: '700',

    color: '#FFFFFF',
  },

  ratingText: {
    marginLeft: 10,

    fontSize: 12,
    color: '#777777',
  },

  /* PRICE */

  priceRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 15,
  },

  price: {
    fontSize: 25,
    fontWeight: '800',

    color: '#222222',
  },

  originalPrice: {
    marginLeft: 10,

    fontSize: 14,

    color: '#999999',

    textDecorationLine: 'line-through',
  },

  discountBadge: {
    marginLeft: 10,

    paddingHorizontal: 7,
    paddingVertical: 4,

    borderRadius: 5,

    backgroundColor: '#E8F8F1',
  },

  discountText: {
    fontSize: 10,
    fontWeight: '700',

    color: '#00A86B',
  },

  /* DIVIDER */

  divider: {
    height: 1,

    backgroundColor: '#EEEEEE',

    marginVertical: 22,
  },

  /* SECTIONS */

  sectionTitle: {
    marginBottom: 8,

    fontSize: 17,
    fontWeight: '700',

    color: '#222222',
  },

  description: {
    fontSize: 13,

    lineHeight: 21,

    color: '#666666',

    marginBottom: 25,
  },

  /* INFORMATION */

  infoCard: {
    padding: 15,

    borderRadius: 12,

    backgroundColor: '#F8F8F8',
  },

  infoRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    paddingVertical: 8,
  },

  infoLabel: {
    fontSize: 13,
    color: '#777777',
  },

  infoValue: {
    fontSize: 13,
    fontWeight: '600',

    color: '#333333',
  },

  available: {
    fontSize: 13,
    fontWeight: '700',

    color: '#00A86B',
  },

  bottomSpace: {
    height: 30,
  },

  /* BOTTOM BAR */

  bottomBar: {
    minHeight: 75,

    paddingHorizontal: 18,
    paddingVertical: 10,

    backgroundColor: '#FFFFFF',

    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',

    flexDirection: 'row',

    alignItems: 'center',
  },

  /* QUANTITY */

  quantityContainer: {
    height: 50,

    borderRadius: 10,

    borderWidth: 1,
    borderColor: '#00A86B',

    flexDirection: 'row',

    alignItems: 'center',
  },

  quantityButton: {
    width: 38,
    height: 48,

    justifyContent: 'center',
    alignItems: 'center',
  },

  quantityText: {
    fontSize: 22,

    color: '#00A86B',

    fontWeight: '600',
  },

  quantity: {
    width: 25,

    textAlign: 'center',

    fontSize: 15,
    fontWeight: '700',
  },

  /* CART */

  cartButton: {
    flex: 1,

    height: 50,

    marginLeft: 12,

    borderRadius: 10,

    backgroundColor: '#00A86B',

    paddingHorizontal: 15,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },

  cartButtonText: {
    fontSize: 15,
    fontWeight: '700',

    color: '#FFFFFF',
  },

  cartTotal: {
    fontSize: 15,
    fontWeight: '800',

    color: '#FFFFFF',
  },

});

export default ProductDetailsScreen;