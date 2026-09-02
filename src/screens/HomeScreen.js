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

import {Ionicons} from '@react-native-vector-icons/ionicons';

function HomeScreen({navigation}) {
  const [search, setSearch] = useState('');

const searchSuggestions = [
  'gift bag',
  'healthy snacks',
  'workout',
];

const [suggestionIndex, setSuggestionIndex] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setSuggestionIndex(currentIndex => {
      return (currentIndex + 1) % searchSuggestions.length;
    });
  }, 3000);

  return () => clearInterval(interval);
}, []);
  const insets = useSafeAreaInsets();
  const [selectedCategory, setSelectedCategory] =
    useState('All');

  const [selectedOffer, setSelectedOffer] =
    useState(null);

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

  /* ================= BESTSELLERS ================= */

  const bestSellers = [
    {
      id: '1',
      name: 'Vegetables & Fruits',
      image:
        'https://images.unsplash.com/photo-1610348725531-843dff563e2c',
      more: '+195 more',
    },
    {
      id: '2',
      name: 'Chips & Namkeen',
      image:
        'https://images.unsplash.com/photo-1621939514649-280e2aa89f4a',
      more: '+438 more',
    },
    {
      id: '3',
      name: 'Ice Creams & More',
      image:
        'https://images.unsplash.com/photo-1570197788417-0e82375c9371',
      more: '+97 more',
    },
    {
      id: '4',
      name: 'Drinks & Juices',
      image:
        'https://images.unsplash.com/photo-1544145945-f90425340c7e',
      more: '+197 more',
    },
    {
      id: '5',
      name: 'Oil, Ghee & Masala',
      image:
        'https://images.unsplash.com/photo-1601050690597-df0568f70950',
      more: '+151 more',
    },
    {
      id: '6',
      name: 'Dairy, Bread & Eggs',
      image:
        'https://images.unsplash.com/photo-1628088062854-d1870b4553da',
      more: '+26 more',
    },
  ];

  /* ================= CATEGORY ================= */

  const handleCategoryPress = category => {
    setSelectedCategory(category.name);

    if (category.name === 'All') {
      return;
    }

    navigation.navigate('Categories', {
      category: category.name,
    });
  };

  /* ================= LOCATION ================= */

  const handleLocationPress = () => {
    // We'll create LocationScreen later.
    // For now this opens Categories as a temporary test.
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

  /* ================= BESTSELLER ================= */

  const handleBestSellerPress = item => {
    navigation.navigate('Categories', {
      category: item.name,
    });
  };

  return (
    <View style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#B87A00"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[]}>

        {/* ================================================= */}
        {/* HEADER                                           */}
        {/* ================================================= */}

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
                onPress={handleWalletPress}>

                <Ionicons
                  name="wallet-outline"
                  size={24}
                  color="#FFFFFF"
                />

              </TouchableOpacity>

              {/* PROFILE */}

              <TouchableOpacity
                style={styles.headerIconButton}
                onPress={handleProfilePress}>

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
            onPress={handleLocationPress}>

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

        {/* ================================================= */}
        {/* SEARCH                                           */}
        {/* ================================================= */}

        <View style={styles.searchSection}>

          <TouchableOpacity
            style={styles.searchBar}
            activeOpacity={0.8}>

            <Ionicons
              name="search-outline"
              size={25}
              color="#333333"
            />

           <TextInput
  value={search}
  onChangeText={setSearch}
  placeholder={`Search "${searchSuggestions[suggestionIndex]}"`}
  placeholderTextColor="#777777"
  style={styles.searchInput}
/>

            <View style={styles.searchDivider} />

            <Ionicons
              name="mic-outline"
              size={23}
              color="#333333"
            />

          </TouchableOpacity>

        </View>

        {/* ================================================= */}
        {/* TOP CATEGORIES                                   */}
        {/* ================================================= */}

        <View style={styles.categorySection}>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={
              styles.categoryScroll
            }>

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
                }>

                <View
                  style={[
                    styles.categoryIconCircle,
                    selectedCategory ===
                      category.name &&
                      styles.selectedCategoryCircle,
                  ]}>

                  <Ionicons
                    name={category.icon}
                    size={23}
                    color={
                      selectedCategory ===
                      category.name
                        ? '#FFFFFF'
                        : '#FFFFFF'
                    }
                  />

                </View>

                <Text style={styles.categoryName}>
                  {category.name}
                </Text>

              </TouchableOpacity>

            ))}

          </ScrollView>

        </View>

        {/* ================================================= */}
        {/* HERO                                             */}
        {/* ================================================= */}

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

          </View>

          <View style={styles.heroDecorationRight}>
            <Text style={styles.bagEmoji}>
              🛍️
            </Text>
          </View>

        </View>

        {/* ================================================= */}
        {/* OFFERS                                           */}
        {/* ================================================= */}

        <View style={styles.offersSection}>

          <View style={styles.offerHeadingContainer}>

            <Text style={styles.offerHeading}>
              ✦ OFFERS FOR YOU ✦
            </Text>

          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={
              styles.offerScroll
            }>

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

        {/* ================================================= */}
        {/* BESTSELLERS                                      */}
        {/* ================================================= */}

        <View style={styles.bestSellerSection}>

          <Text style={styles.bestSellerTitle}>
            Bestsellers
          </Text>

          <View style={styles.bestSellerGrid}>

            {bestSellers.map(item => (

              <TouchableOpacity
                key={item.id}
                style={styles.bestSellerCard}
                activeOpacity={0.85}
                onPress={() =>
                  handleBestSellerPress(item)
                }>

                <Image
                  source={{uri: item.image}}
                  style={styles.bestSellerImage}
                />

                <View style={styles.moreBadge}>

                  <Text style={styles.moreText}>
                    {item.more}
                  </Text>

                </View>

                <Text
                  style={styles.bestSellerName}
                  numberOfLines={2}>

                  {item.name}

                </Text>

              </TouchableOpacity>

            ))}

          </View>

        </View>

        <View style={styles.bottomSpace} />

      </ScrollView>

      {/* ================================================= */}
      {/* OFFER MODAL                                      */}
      {/* ================================================= */}

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
  searchInput: {
  flex: 1,

  marginLeft: 12,

  fontSize: 16,

  color: '#222222',

  paddingVertical: 0,
},

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  /* HEADER */

  header: {
    paddingTop: 12,
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

  /* SEARCH */

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

  searchPlaceholder: {
    flex: 1,

    marginLeft: 12,

    fontSize: 16,

    color: '#777777',
  },

  searchDivider: {
    width: 1,
    height: 30,

    backgroundColor: '#DDDDDD',

    marginHorizontal: 13,
  },

  /* CATEGORIES */

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

  /* HERO */

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

  /* OFFERS */

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

  /* BESTSELLERS */

  bestSellerSection: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },

  bestSellerTitle: {
    fontSize: 22,

    fontWeight: '800',

    color: '#222222',

    marginBottom: 14,
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

  moreBadge: {
    alignSelf: 'center',

    marginTop: -10,

    paddingHorizontal: 8,
    paddingVertical: 3,

    borderRadius: 10,

    backgroundColor: '#FFFFFF',

    zIndex: 2,
  },

  moreText: {
    fontSize: 9,

    color: '#666666',
  },

  bestSellerName: {
    marginTop: 7,

    minHeight: 35,

    fontSize: 13,

    fontWeight: '700',

    color: '#333333',

    textAlign: 'center',
  },

  bottomSpace: {
    height: 30,
  },

  /* MODAL */

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