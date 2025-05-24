import { useRouter } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import useThemeStyles from '../hooks/useThemeStyles';

export default function Index() {
  const router = useRouter();
  const styles = useThemeStyles();

  return (
    <View style={[styles.container, { justifyContent: 'center', padding: 30 }]}>
      
      {/* Centered Image */}
      <Image
        source={require('../assets/images/sc_icon.png')} // Place your image in the assets folder or adjust path
        style={{ width: 200, height: 200,     marginBottom: 20,  
    alignSelf: 'center'  }}
        resizeMode="contain"
      />

      {/* Title */}
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: '#00C853',
          textAlign: 'center',
          marginBottom: 40,
          letterSpacing: 1.2,
        }}
      >
        SUPPLY CHAIN TRACKER
      </Text>

      {/* Login Button */}
      <Pressable
        style={[
          styles.button,
          {
            backgroundColor: '#00C853',
            borderColor: '#00C853',
            width: '100%',
            maxWidth: 300,
            alignSelf: 'center',
          },
        ]}
        onPress={() => router.push('/auth/login')}
      >
        <Text style={[styles.buttonText, { color: '#000' }]}>Login</Text>
      </Pressable>

      {/* Sign Up Button */}
      <Pressable
        style={[
          styles.button,
          {
            backgroundColor: 'transparent',
            borderColor: '#00C853',
            width: '100%',
            maxWidth: 300,
            alignSelf: 'center',
          },
        ]}
        onPress={() => router.push('/auth/signup')}
      >
        <Text style={[styles.buttonText, { color: '#00C853' }]}>Sign Up</Text>
      </Pressable>
    </View>
  );
}
