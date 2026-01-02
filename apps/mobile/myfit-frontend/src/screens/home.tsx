import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  Dimensions
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function VirtualWardrobeScreen() {

  const handlePress = () => {
    router.replace("/login")
  }

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="default" />

      <View style={styles.heroContainer}>
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" }}
          style={styles.heroImage}
          resizeMode="cover"
        />

        <View style={styles.overlay} />


        <SafeAreaView style={styles.headerSafeArea}>
          <View style={styles.header}>
            <View style={styles.iconBlur}>
              <MaterialIcons name="checkroom" size={24} color="#fff" />
            </View>
            <Text style={styles.headerBrand}>VIRTUAL<Text style={{ fontWeight: '700' }}>CLOSET</Text></Text>
          </View>
        </SafeAreaView>
      </View>

      {/* BOTTOM CONTENT CARD */}
      <View style={styles.contentContainer}>
        <View style={styles.textWrapper}>
          <Text style={styles.titleText}>
            See it on.{"\n"}
            <Text style={styles.titleAccent}>Before you text.</Text>
          </Text>

          <Text style={styles.subtitleText}>
            Experience the future of fitting rooms. Upload your photo and try on any outfit instantly.
          </Text>
        </View>

        {/* Footer Actions */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.9}
            onPress={handlePress}
          >
            <Text style={styles.primaryButtonText}>Get Started</Text>
            <MaterialIcons name="arrow-forward" size={20} color="#fff" style={{ marginLeft: 8 }} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryLink}>
            <Text style={styles.linkText}>
              Already a member? <Text style={styles.linkHighlight}>Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// COLORS
const COLORS = {
  primary: "#13a4ec",
  primaryDark: "#0e7cb5",
  dark: "#0F172A",
  textGray: "#64748B",
  white: "#ffffff",
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  // HERO IMAGE SECTION
  heroContainer: {
    height: height * 0.62, // Takes up 62% of screen height
    width: '100%',
    position: 'relative',
    borderBottomRightRadius: 40, // Modern curve
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
    backgroundColor: '#000', // Fallback
    elevation: 10, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)', // Subtle darken for header visibility
  },

  // HEADER
  headerSafeArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 10,
    gap: 12,
  },
  iconBlur: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.2)', // Glassmorphism effect
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  headerBrand: {
    color: '#fff',
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: '300',
  },

  // CONTENT SECTION
  contentContainer: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 40,
    justifyContent: 'space-between',
    paddingBottom: Platform.OS === 'ios' ? 40 : 24,
  },
  textWrapper: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: 34,
    color: COLORS.dark,
    textAlign: 'center',
    lineHeight: 42,
    fontWeight: '300', // Light font
  },
  titleAccent: {
    fontWeight: '800', // Bold accent
    color: COLORS.dark,
  },
  subtitleText: {
    marginTop: 16,
    fontSize: 16,
    color: COLORS.textGray,
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: '90%',
  },

  // FOOTER BUTTONS
  footer: {
    gap: 16,
    width: '100%',
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    height: 56,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  primaryButtonText: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  secondaryLink: {
    alignItems: 'center',
    paddingVertical: 4,
  },
  linkText: {
    fontSize: 14,
    color: COLORS.textGray,
  },
  linkHighlight: {
    color: COLORS.primary,
    fontWeight: '700',
  },
});