import { StyleSheet, useColorScheme } from 'react-native';

export default function useThemeStyles() {
  const theme = useColorScheme();

  const colors = {
    background: theme === 'dark' ? '#121212' : '#ffffff',
    text: theme === 'dark' ? '#ffffff' : '#000000',
    inputBackground: theme === 'dark' ? '#1e1e1e' : '#f0f0f0',
    border: theme === 'dark' ? '#444' : '#ccc',
    green: '#00C853',
    lightGray: '#ccc',
    buttonBackground: theme === 'dark' ? '#3333cc' : '#3366ff',
    buttonText: '#ffffff',
    cardBackground: theme === 'dark' ? '#1e1e1e' : '#ffffff', // new color for card
  };

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: colors.background,
    },
    text: {
  color: colors.text,
},
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: colors.green,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 18,
      color: colors.lightGray,
      textAlign: 'center',
      marginBottom: 20,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.inputBackground,
      borderColor: colors.border,
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 12,
      width: '100%',
    },
    icon: {
      marginRight: 10,
      color: colors.green,
    },
    input: {
      flex: 1,
      color: colors.text,
      paddingVertical: 10,
    },
    button: {
      padding: 12,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: colors.green,
      alignItems: 'center',
      width: '100%',
      marginTop: 10,
    },
    buttonText: {
      color: colors.green,
      fontWeight: 'bold',
    },
    forgotPassword: {
      alignSelf: 'flex-end',
      color: colors.green,
      marginBottom: 20,
    },
    linkRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    linkText: {
      color: colors.text,
      marginRight: 5,
    },
    linkGreen: {
      color: colors.green,
      fontWeight: 'bold',
    },
    popup: {
      position: 'absolute',
      top: 30,
      left: 20,
      right: 20,
      padding: 15,
      borderRadius: 8,
      zIndex: 999,
    },
    popupText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: '600',
    },
    card: {
      backgroundColor: colors.cardBackground,
      borderRadius: 10,
      padding: 20,
      width: '100%',
      // optionally add shadow for iOS and elevation for Android
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
  });
}
