import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function BannerCard({banner}) {
  return (
    <ImageBackground
      source={{uri: banner.image}}
      style={styles.container}
      imageStyle={styles.image}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>{banner.title}</Text>

        <Text style={styles.subtitle}>
          {banner.subtitle}
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 170,
    marginHorizontal: 20,
    overflow: 'hidden',
    borderRadius: 16,
  },

  image: {
    borderRadius: 16,
  },

  overlay: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
  },

  subtitle: {
    marginTop: 5,
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default BannerCard;