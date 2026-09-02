import React, {useEffect, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Image,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {products} from '../data/products';
import {Ionicons} from '@react-native-vector-icons/ionicons';

function HomeScreen({navigation}) {
  const [search, setSearch] = useState('');
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedOffer, setSelectedOffer] = useState(null);

  const insets = useSafeAreaInsets();

  /* ================= SEARCH SUGGESTIONS ================= */

  const searchSuggestions = [
    'gift bag',
    'healthy snacks',
    'workout',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSuggestionIndex(currentIndex => {
        return (
          (currentIndex + 1) % searchSuggestions.length
        );
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* ================= CATEGORIES ================= */

  const topCategories = [
    {
      id: '1',
      name: 'All',
      icon: 'grid-outline',
    },
    {
      id: '2',
      name: 'Electronics',
      icon: 'phone-portrait-outline',
    },
    {
      id: '3',
      name: 'Beauty',
      icon: 'sparkles-outline',
    },
    {
      id: '4',
      name: 'Gifting',
      icon: 'gift-outline',
    },
    {
      id: '5',
      name: 'Decor',
      icon: 'home-outline',
    },
    {
      id: '6',
      name: 'Kids',
      icon: 'happy-outline',
    },
    {
      id: '7',
      name: 'Imported',
      icon: 'globe-outline',
    },
  ];

  /* ================= OFFERS ================= */

  const offers = [
    {
      id: '1',
      title: 'FLAT ₹50 OFF',
      subtitle: 'On your first order above ₹249',
      icon: 'pricetag-outline',
    },
    {
      id: '2',
      title: 'FREE DELIVERY',
      subtitle: 'On all your orders',
      icon: 'bicycle-outline',
    },
  ];

  /* ================= BESTSELLER FILTER ================= */

  const filteredProducts = products.filter(product => {
    const searchText = search.trim().toLowerCase();

    const matchesCategory =
      selectedCategory === 'All' ||
      product.category?.toLowerCase() ===
        selectedCategory.toLowerCase();

    const matchesSearch =
      searchText === '' ||
      product.name?.toLowerCase().includes(searchText) ||
      product.category?.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  const bestSellers = filteredProducts;

  /* ================= CATEGORY NAVIGATION ================= */

  const handleCategoryPress = category => {
    setSelectedCategory(category.name);

    // Clear search when changing category
    setSearch('');

    if (category.name === 'All') {
      return;
    }

    navigation.navigate('Categories', {
      category: category.name,
    });
  };

  /* ================= LOCATION ================= */

  const handleLocationPress = () => {
    navigation.navigate('Categories');
  };

  /* ================= WALLET ================= */

  const handleWalletPress = () => {
    navigation.navigate('Wallet');
  };

  /* ================= PROFILE ================= */

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  /* ================= PRODUCT ================= */

  const handleProductPress = product => {
    navigation.navigate('ProductDetails', {
      product,
    });
  };

  /* ================= CLEAR SEARCH ================= */

  const handleClearSearch = () => {
    setSearch('');
  };

  return (
    <View style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#B87A00"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>

        {/* ================= HEADER ================= */}

        <View
          style={[
            styles.header,
            {
              paddingTop: insets.top + 12,
            },
          ]}>

          <View style={styles.headerTop}>

            <View>

              <Text style={styles.mercatoIn}>
                Mercato in
              </Text>

              <Text style={styles.deliveryTime}>
                11 minutes
              </Text>

            </View>

            <View style={styles.headerActions}>

              {/* WALLET */}

              <TouchableOpacity
                style={styles.headerIconButton}
                onPress={handleWalletPress}
                activeOpacity={0.8}>

                <Ionicons
                  name="wallet-outline"
                  size={24}
                  color="#FFFFFF"
                />

              </TouchableOpacity>

              {/* PROFILE */}

              <TouchableOpacity
                style={styles.headerIconButton}
                onPress={handleProfilePress}
                activeOpacity={0.8}>

                <Ionicons
                  name="person-outline"
                  size={24}
                  color="#FFFFFF"
                />

              </TouchableOpacity>

            </View>

          </View>

          {/* LOCATION */}

          <TouchableOpacity
            style={styles.locationButton}
            onPress={handleLocationPress}
            activeOpacity={0.8}>

            <Ionicons
              name="location-outline"
              size={19}
              color="#FFFFFF"
            />

            <Text style={styles.locationText}>
              Tamil Nadu, 602024, India
            </Text>

            <Ionicons
              name="chevron-down"
              size={17}
              color="#FFFFFF"
            />

          </TouchableOpacity>

        </View>

        {/* ================= SEARCH ================= */}

        <View style={styles.searchSection}>

          <View style={styles.searchBar}>

            {/* SEARCH ICON */}

            <Ionicons
              name="search-outline"
              size={25}
              color="#333333"
            />

            {/* INPUT */}

            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder={`Search "${searchSuggestions[suggestionIndex]}"`}
              placeholderTextColor="#777777"
              style={styles.searchInput}
              returnKeyType="search"
            />

            {/* CLEAR BUTTON */}

            {search.length > 0 && (
              <TouchableOpacity
                onPress={handleClearSearch}
                activeOpacity={0.7}
                style={styles.clearSearchButton}>

                <Ionicons
                  name="close-circle"
                  size={21}
                  color="#777777"
                />

              </TouchableOpacity>
            )}

            <View style={styles.searchDivider} />

            {/* MICROPHONE */}

            <TouchableOpacity activeOpacity={0.7}>

              <Ionicons
                name="mic-outline"
                size={23}
                color="#333333"
              />

            </TouchableOpacity>

          </View>

        </View>

        {/* ================= TOP CATEGORIES ================= */}

        <View style={styles.categorySection}>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryScroll}>

            {topCategories.map(category => (

              <TouchableOpacity
                key={category.id}
                style={[
                  styles.topCategory,
                  selectedCategory === category.name &&
                    styles.selectedCategory,
                ]}
                onPress={() =>
                  handleCategoryPress(category)
                }
                activeOpacity={0.8}>

                <View
                  style={[
                    styles.categoryIconCircle,
                    selectedCategory === category.name &&
                      styles.selectedCategoryCircle,
                  ]}>

                  <Ionicons
                    name={category.icon}
                    size={23}
                    color="#FFFFFF"
                  />

                </View>

                <Text style={styles.categoryName}>
                  {category.name}
                </Text>

              </TouchableOpacity>

            ))}

          </ScrollView>

        </View>

        {/* ================= HERO ================= */}

        <View style={styles.hero}>

          <View style={styles.heroDecorationLeft}>

            <Text style={styles.bagEmoji}>
              🛍️
            </Text>

          </View>

          <View style={styles.heroContent}>

            <Text style={styles.heroTitle}>
              MERCATO
            </Text>

            <Text style={styles.heroSubtitle}>
              Order now and enjoy great offers
            </Text>

            <TouchableOpacity
              style={styles.heroButton}
              onPress={() =>
                navigation.navigate('Categories')
              }
              activeOpacity={0.8}>

              <Text style={styles.heroButtonText}>
                SHOP NOW
              </Text>

            </TouchableOpacity>

          </View>

          <View style={styles.heroDecorationRight}>

            <Text style={styles.bagEmoji}>
              🛍️
            </Text>

          </View>

        </View>

        {/* ================= OFFERS ================= */}

        <View style={styles.offersSection}>

          <View style={styles.offerHeadingContainer}>

            <Text style={styles.offerHeading}>
              ✦ OFFERS FOR YOU ✦
            </Text>

          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.offerScroll}>

            {offers.map(offer => (

              <TouchableOpacity
                key={offer.id}
                style={styles.offerCard}
                activeOpacity={0.8}
                onPress={() =>
                  setSelectedOffer(offer)
                }>

                <View style={styles.offerIcon}>

                  <Ionicons
                    name={offer.icon}
                    size={26}
                    color="#333333"
                  />

                </View>

                <View style={styles.offerContent}>

                  <Text style={styles.offerTitle}>
                    {offer.title}
                  </Text>

                  <Text style={styles.offerSubtitle}>
                    {offer.subtitle}
                  </Text>

                </View>

              </TouchableOpacity>

            ))}

          </ScrollView>

        </View>

        {/* ================= BESTSELLERS ================= */}

        <View style={styles.bestSellerSection}>

          <View style={styles.sectionHeader}>

            <View>

              <Text style={styles.bestSellerTitle}>
                {search.trim()
                  ? 'Search Results'
                  : 'Bestseller'}
              </Text>

              {search.trim() !== '' && (
                <Text style={styles.searchResultText}>
                  Showing results for "{search}"
                </Text>
              )}

            </View>

            <Text style={styles.productCount}>
              {bestSellers.length}{' '}
              {bestSellers.length === 1
                ? 'product'
                : 'products'}
            </Text>

          </View>

          {/* ================= PRODUCTS FOUND ================= */}

          {bestSellers.length > 0 ? (

            <View style={styles.bestSellerGrid}>

              {bestSellers.map(product => (

                <TouchableOpacity
                  key={product.id}
                  style={styles.bestSellerCard}
                  onPress={() =>
                    handleProductPress(product)
                  }
                  activeOpacity={0.85}>

                  {/* IMAGE */}

                  <Image
                    source={{uri: product.image}}
                    style={styles.bestSellerImage}
                    resizeMode="contain"
                  />

                  {/* DISCOUNT */}

                  {product.discount > 0 && (

                    <View style={styles.discountBadge}>

                      <Text style={styles.discountText}>
                        {product.discount}% OFF
                      </Text>

                    </View>

                  )}

                  {/* NAME */}

                  <Text
                    style={styles.bestSellerName}
                    numberOfLines={2}>

                    {product.name}

                  </Text>

                  {/* QUANTITY */}

                  <Text
                    style={styles.productQuantity}
                    numberOfLines={1}>

                    {product.quantity}

                  </Text>

                  {/* PRICE */}

                  <View style={styles.priceRow}>

                    <Text style={styles.bestSellerPrice}>
                      ₹{product.price}
                    </Text>

                    {product.mrp > product.price && (

                      <Text style={styles.mrpPrice}>
                        ₹{product.mrp}
                      </Text>

                    )}

                  </View>

                  {/* RATING */}

                  <View style={styles.ratingRow}>

                    <Ionicons
                      name="star"
                      size={13}
                      color="#F5A623"
                    />

                    <Text style={styles.ratingText}>
                      {product.rating}
                    </Text>

                  </View>

                </TouchableOpacity>

              ))}

            </View>

          ) : (

            /* ================= NO PRODUCTS ================= */

            <View style={styles.noProductsContainer}>

              <Ionicons
                name="search-outline"
                size={48}
                color="#999999"
              />

              <Text style={styles.noProductsTitle}>
                No products found
              </Text>

              <Text style={styles.noProductsText}>
                Try searching for another product
              </Text>

              <TouchableOpacity
                style={styles.clearSearchLargeButton}
                onPress={handleClearSearch}
                activeOpacity={0.8}>

                <Text style={styles.clearSearchLargeText}>
                  Clear Search
                </Text>

              </TouchableOpacity>

            </View>

          )}

        </View>

        {/* ================= BOTTOM SPACE ================= */}

        <View style={styles.bottomSpace} />

      </ScrollView>

      {/* ================= OFFER MODAL ================= */}

      <Modal
        visible={selectedOffer !== null}
        transparent
        animationType="fade"
        onRequestClose={() =>
          setSelectedOffer(null)
        }>

        <View style={styles.modalOverlay}>

          <View style={styles.offerModal}>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() =>
                setSelectedOffer(null)
              }>

              <Ionicons
                name="close"
                size={22}
                color="#333333"
              />

            </TouchableOpacity>

            <View style={styles.modalIcon}>

              <Ionicons
                name={
                  selectedOffer?.icon ||
                  'pricetag-outline'
                }
                size={35}
                color="#00A86B"
              />

            </View>

            <Text style={styles.modalTitle}>
              {selectedOffer?.title}
            </Text>

            <Text style={styles.modalSubtitle}>
              {selectedOffer?.subtitle}
            </Text>

            <Text style={styles.modalDetails}>
              Enjoy this special Mercato offer
              on your next order.
            </Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() =>
                setSelectedOffer(null)
              }>

              <Text style={styles.modalButtonText}>
                Got it
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scrollContent: {
    paddingBottom: 20,
  },

  /* ================= HEADER ================= */

  header: {
    paddingHorizontal: 20,
    paddingBottom: 12,
    backgroundColor: '#B87A00',
  },

  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  mercatoIn: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  deliveryTime: {
    marginTop: 3,
    fontSize: 20,
    letterSpacing: 1.5,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#FFFFFF',
  },

  headerActions: {
    flexDirection: 'row',
    gap: 10,
  },

  headerIconButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: 'rgba(0,0,0,0.28)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  locationButton: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },

  locationText: {
    marginLeft: 5,
    marginRight: 4,
    fontSize: 14,
    color: '#FFFFFF',
  },

  /* ================= SEARCH ================= */

  searchSection: {
    backgroundColor: '#B87A00',
    paddingHorizontal: 20,
    paddingBottom: 13,
  },

  searchBar: {
    height: 56,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#222222',
    paddingVertical: 0,
  },

  clearSearchButton: {
    width: 30,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#DDDDDD',
    marginHorizontal: 13,
  },

  /* ================= CATEGORIES ================= */

  categorySection: {
    backgroundColor: '#B87A00',
  },

  categoryScroll: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },

  topCategory: {
    width: 80,
    marginRight: 7,
    alignItems: 'center',
    paddingBottom: 5,
  },

  categoryIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0,0,0,0.18)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedCategoryCircle: {
    backgroundColor: 'rgba(0,0,0,0.35)',
  },

  selectedCategory: {
    borderBottomWidth: 3,
    borderBottomColor: '#FFFFFF',
  },

  categoryName: {
    marginTop: 5,
    fontSize: 11,
    color: '#FFFFFF',
    textAlign: 'center',
  },

  /* ================= HERO ================= */

  hero: {
    height: 190,
    backgroundColor: '#8A5700',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },

  heroContent: {
    flex: 1,
    alignItems: 'center',
  },

  heroTitle: {
    fontSize: 38,
    fontWeight: '900',
    letterSpacing: 2,
    color: '#FFFFFF',
  },

  heroSubtitle: {
    marginTop: 10,
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'center',
  },

  heroButton: {
    marginTop: 14,
    paddingHorizontal: 22,
    paddingVertical: 9,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },

  heroButtonText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#8A5700',
  },

  heroDecorationLeft: {
    width: 75,
    alignItems: 'center',
  },

  heroDecorationRight: {
    width: 75,
    alignItems: 'center',
  },

  bagEmoji: {
    fontSize: 55,
  },

  /* ================= OFFERS ================= */

  offersSection: {
    backgroundColor: '#FFD83D',
    paddingBottom: 13,
  },

  offerHeadingContainer: {
    alignSelf: 'center',
    marginTop: -16,
    paddingHorizontal: 25,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: '#FFD83D',
  },

  offerHeading: {
    fontSize: 18,
    fontWeight: '900',
    color: '#333333',
  },

  offerScroll: {
    paddingHorizontal: 15,
  },

  offerCard: {
    width: 330,
    minHeight: 82,
    marginRight: 12,
    padding: 12,
    borderRadius: 15,
    backgroundColor: '#FFF1A8',
    flexDirection: 'row',
    alignItems: 'center',
  },

  offerIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  offerContent: {
    marginLeft: 12,
    flex: 1,
  },

  offerTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: '#333333',
  },

  offerSubtitle: {
    marginTop: 4,
    fontSize: 12,
    color: '#555555',
  },

  /* ================= BESTSELLERS ================= */

  bestSellerSection: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  bestSellerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#222222',
  },

  searchResultText: {
    marginTop: 3,
    fontSize: 11,
    color: '#777777',
  },

  productCount: {
    fontSize: 12,
    color: '#777777',
  },

  bestSellerGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  bestSellerCard: {
    width: '31.5%',
    marginBottom: 15,
    borderRadius: 14,
    backgroundColor: '#F5F6F8',
    padding: 7,
    overflow: 'hidden',
  },

  bestSellerImage: {
    width: '100%',
    height: 105,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },

  discountBadge: {
    alignSelf: 'flex-start',
    marginTop: 5,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 5,
    backgroundColor: '#E8F8F1',
  },

  discountText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#00A86B',
  },

  bestSellerName: {
    marginTop: 6,
    minHeight: 35,
    fontSize: 13,
    fontWeight: '700',
    color: '#333333',
  },

  productQuantity: {
    marginTop: 2,
    fontSize: 10,
    color: '#777777',
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  bestSellerPrice: {
    fontSize: 15,
    fontWeight: '900',
    color: '#222222',
  },

  mrpPrice: {
    marginLeft: 5,
    fontSize: 10,
    color: '#999999',
    textDecorationLine: 'line-through',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  ratingText: {
    marginLeft: 3,
    fontSize: 10,
    color: '#666666',
  },

  /* ================= NO PRODUCTS ================= */

  noProductsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 45,
  },

  noProductsTitle: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
  },

  noProductsText: {
    marginTop: 5,
    fontSize: 13,
    color: '#888888',
    textAlign: 'center',
  },

  clearSearchLargeButton: {
    marginTop: 18,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#B87A00',
  },

  clearSearchLargeText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  bottomSpace: {
    height: 30,
  },

  /* ================= MODAL ================= */

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  offerModal: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    padding: 25,
    alignItems: 'center',
  },

  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: '#F3F3F3',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E8F8F1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalTitle: {
    marginTop: 18,
    fontSize: 23,
    fontWeight: '900',
    color: '#222222',
  },

  modalSubtitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
  },

  modalDetails: {
    marginTop: 15,
    fontSize: 13,
    lineHeight: 20,
    color: '#777777',
    textAlign: 'center',
  },

  modalButton: {
    width: '100%',
    height: 48,
    marginTop: 22,
    borderRadius: 10,
    backgroundColor: '#00A86B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default HomeScreen;