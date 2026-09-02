import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function CategoryCard({category, onPress}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(category)}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{category.icon}</Text>
      </View>

      <Text style={styles.name} numberOfLines={2}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 85,
    alignItems: 'center',
    marginRight: 12,
  },

  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F2F8F5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 34,
  },

  name: {
    marginTop: 8,
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center',
    color: '#333333',
    fontWeight: '500',
  },
});

export default CategoryCard;