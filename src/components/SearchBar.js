import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function SearchBar({value, onChangeText}) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🔍</Text>

      <TextInput
        style={styles.input}
        placeholder="Search for groceries..."
        placeholderTextColor="#999999"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
  },

  icon: {
    fontSize: 20,
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: '#222222',
  },
});

export default SearchBar;