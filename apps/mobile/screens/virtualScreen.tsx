import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function VirtualWardrobeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            {/* 'checkroom' is the closest Material Icon to a wardrobe/styler */}
            <MaterialIcons name="checkroom" size={30} color="#0d171b" />
          </View>
          <Text style={styles.headerTitle}>Virtual Wardrobe</Text>
          {/* Empty View to balance the header flex layout if needed, or just padding */}
          <View style={{ width: 48 }} /> 
        </View>

        {/* Main Content (Hero) */}
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <View style={styles.imageWrapper}>
              <Image 
                source={{ uri: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" }} 
                style={styles.heroImage}
                resizeMode="cover"
              />
            </View>
          </View>

          <Text style={styles.heroTitle}>See it on.{'\n'}Before you buy.</Text>
          <Text style={styles.heroSubtitle}>
            Upload your photo and a clothing item to try it on virtually.
          </Text>
        </View>

        {/* Footer / Actions */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkText}>
              Already have an account? <Text style={styles.linkHighlight}>Sign in</Text>
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

// Colors derived from your Tailwind Config
const COLORS = {
  primary: "#13a4ec",
  backgroundLight: "#f6f7f8",
  textDark: "#0d171b",
  textMuted: "#64748b", // slate-400 equivalent
  white: "#ffffff",
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
  },
  
  // Header Styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 8,
  },
  iconContainer: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textDark,
    textAlign: 'center',
    flex: 1,
  },

  // Main Content Styles
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrapper: {
    width: '100%',
    maxWidth: 384, // max-w-sm roughly
    aspectRatio: 3 / 2,
    borderRadius: 16, // rounded-xl
    overflow: 'hidden',
    paddingHorizontal: 16, // to match the gap/padding look
  },
  heroImage: {
    flex: 1,
    width: '100%',
    borderRadius: 12,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.textDark,
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 12,
    lineHeight: 38,
  },
  heroSubtitle: {
    fontSize: 16,
    color: COLORS.textDark,
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
    opacity: 0.8,
  },

  // Footer Styles
  footer: {
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    gap: 16, // Gap support depends on RN version, fallback is margin
  },
  button: {
    backgroundColor: COLORS.primary,
    height: 48,
    borderRadius: 12, // rounded-xl
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkButton: {
    alignItems: 'center',
    marginTop: 12,
  },
  linkText: {
    fontSize: 14,
    color: COLORS.textMuted,
    fontWeight: '500',
  },
  linkHighlight: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});