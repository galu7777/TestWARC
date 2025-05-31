import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Text, Alert, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/home/HomeScreen';
import { logout } from '../utils/auth';
import { useAuth } from '../contexts/AuthContext';

const Tab = createBottomTabNavigator();

const MainNavigator = ({ navigation }) => {
  const { signOut } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      'Cerrar Sesión',
      '¿Estás seguro de que quieres cerrar sesión?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Cerrar Sesión',
          onPress: async () => {
            await logout();
            signOut(); // Actualiza el contexto de autenticación
          },
        },
      ]
    );
  };

  const LogoutButton = () => (
    <TouchableOpacity
      onPress={handleLogout}
      style={{ 
        marginRight: 15,
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: '#E91E63',
        borderRadius: 8,
      }}
    >
      <Text style={{ 
        color: '#FFFFFF', 
        fontSize: 14,
        fontWeight: '600'
      }}>
        Salir
      </Text>
    </TouchableOpacity>
  );

  // Ícono de globo personalizado
  const GlobeIcon = ({ focused }) => (
    <View style={{
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: focused ? '#E91E63' : 'transparent',
      borderWidth: 2,
      borderColor: focused ? '#E91E63' : '#F48FB1',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <View style={{
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: focused ? '#FFFFFF' : '#F48FB1',
      }} />
      <View style={{
        position: 'absolute',
        width: 16,
        height: 1,
        backgroundColor: focused ? '#FFFFFF' : '#F48FB1',
        top: 11,
      }} />
      <View style={{
        position: 'absolute',
        width: 1,
        height: 16,
        backgroundColor: focused ? '#FFFFFF' : '#F48FB1',
        left: 11,
      }} />
    </View>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#E91E63',
        tabBarInactiveTintColor: '#F48FB1',
        tabBarStyle: {
          backgroundColor: '#1A1A1A',
          borderTopColor: '#E91E63',
          borderTopWidth: 2,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerStyle: {
          backgroundColor: '#1A1A1A',
          borderBottomColor: '#E91E63',
          borderBottomWidth: 1,
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 20,
          color: '#E91E63',
        },
      }}
    >
      <Tab.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Mapa',
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="globe" size={24} color={focused ? '#E91E63' : '#F48FB1'} />
          ),
          headerRight: () => <LogoutButton />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;