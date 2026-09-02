import React from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function ProfileScreen({navigation}) {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}>

      {/* PROFILE HEADER */}

      <View style={styles.profileHeader}>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            H
          </Text>
        </View>

        <Text style={styles.name}>
          Harish
        </Text>

        <Text style={styles.phone}>
          +91 XXXXX XXXXX
        </Text>

      </View>

      {/* MENU */}

      <View style={styles.menu}>

        <TouchableOpacity style={styles.menuItem}>

          <Text style={styles.menuIcon}>
            📦
          </Text>

          <View style={styles.menuDetails}>
            <Text style={styles.menuTitle}>
              My Orders
            </Text>

            <Text style={styles.menuSubtitle}>
              View your previous orders
            </Text>
          </View>

          <Text style={styles.arrow}>
            ›
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
  style={styles.menuItem}
  onPress={() =>
    navigation.navigate('Favorites')
  }>

          <Text style={styles.menuIcon}>
            ❤️
          </Text>

          <View style={styles.menuDetails}>
            <Text style={styles.menuTitle}>
              Favorites
            </Text>

            <Text style={styles.menuSubtitle}>
              Your favorite products
            </Text>
          </View>

          <Text style={styles.arrow}>
            ›
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>

          <Text style={styles.menuIcon}>
            📍
          </Text>

          <View style={styles.menuDetails}>
            <Text style={styles.menuTitle}>
              Saved Addresses
            </Text>

            <Text style={styles.menuSubtitle}>
              Manage delivery addresses
            </Text>
          </View>

          <Text style={styles.arrow}>
            ›
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>

          <Text style={styles.menuIcon}>
            💳
          </Text>

          <View style={styles.menuDetails}>
            <Text style={styles.menuTitle}>
              Payment Methods
            </Text>

            <Text style={styles.menuSubtitle}>
              Manage your payments
            </Text>
          </View>

          <Text style={styles.arrow}>
            ›
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>

          <Text style={styles.menuIcon}>
            ⚙️
          </Text>

          <View style={styles.menuDetails}>
            <Text style={styles.menuTitle}>
              Settings
            </Text>

            <Text style={styles.menuSubtitle}>
              App preferences
            </Text>
          </View>

          <Text style={styles.arrow}>
            ›
          </Text>

        </TouchableOpacity>

      </View>

      <Text style={styles.version}>
        Mercato v1.0.0
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  profileHeader: {
    paddingTop: 60,
    paddingBottom: 30,

    alignItems: 'center',

    backgroundColor: '#F2FBF7',
  },

  avatar: {
    width: 85,
    height: 85,

    borderRadius: 43,

    backgroundColor: '#00A86B',

    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 35,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  name: {
    marginTop: 12,

    fontSize: 22,
    fontWeight: '800',
  },

  phone: {
    marginTop: 5,

    fontSize: 13,
    color: '#777777',
  },

  menu: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },

  menuItem: {
    minHeight: 75,

    flexDirection: 'row',
    alignItems: 'center',

    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  menuIcon: {
    width: 40,

    fontSize: 23,
  },

  menuDetails: {
    flex: 1,
  },

  menuTitle: {
    fontSize: 15,
    fontWeight: '700',
  },

  menuSubtitle: {
    marginTop: 4,

    fontSize: 12,
    color: '#888888',
  },

  arrow: {
    fontSize: 28,
    color: '#999999',
  },

  version: {
    marginTop: 35,

    textAlign: 'center',

    fontSize: 12,
    color: '#AAAAAA',
  },
});

export default ProfileScreen;