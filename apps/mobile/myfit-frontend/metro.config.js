const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)

config.resolver.extraNodeModules = {
    react: require.resolve('react'),
    'react-native': require.resolve('react-native'),
  };
 
module.exports = withNativeWind(config, { input: './src/app/globals.css' })