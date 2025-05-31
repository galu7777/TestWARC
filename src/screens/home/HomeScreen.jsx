import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MapScreen from '../map/MapScreen';

const HomeScreen = () => {
  const [currentScreen, setCurrentScreen] = useState('home');

  const navigateToMap = () => {
    setCurrentScreen('map');
  };

  const navigateToHome = () => {
    setCurrentScreen('home');
  };

  if (currentScreen === 'map') {
    return <MapScreen onBack={navigateToHome} />;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Bienvenido</Text>
          <Text style={styles.subtitleText}>Explora el mundo</Text>
        </View>

        {/* Map Placeholder */}
        <View style={styles.mapPlaceholder}>
          <View style={styles.globeIcon}>
            <View style={styles.globeCircle} />
            <View style={styles.globeLine1} />
            <View style={styles.globeLine2} />
          </View>
          <Text style={styles.mapText}>Mapa Interactivo</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={navigateToMap}>
            <Text style={styles.actionButtonText}>Explorar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]}>
            <Text style={[styles.actionButtonText, styles.secondaryButtonText]}>
              Configuración
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
    paddingTop: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#E91E63',
    marginBottom: 8,
    textShadowColor: '#C2185B',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitleText: {
    fontSize: 16,
    color: '#F48FB1',
    fontWeight: '500',
  },
  mapPlaceholder: {
    backgroundColor: '#2A2A2A',
    borderRadius: 16,
    padding: 40,
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#E91E63',
    shadowColor: '#E91E63',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  globeIcon: {
    width: 80,
    height: 80,
    marginBottom: 20,
    position: 'relative',
  },
  globeCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#E91E63',
    backgroundColor: 'transparent',
  },
  globeLine1: {
    position: 'absolute',
    width: 74,
    height: 2,
    backgroundColor: '#E91E63',
    top: 39,
    left: 3,
  },
  globeLine2: {
    position: 'absolute',
    width: 2,
    height: 74,
    backgroundColor: '#E91E63',
    left: 39,
    top: 3,
  },
  mapText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#E91E63',
    marginBottom: 8,
  },
  mapSubtext: {
    fontSize: 14,
    color: '#F48FB1',
    fontWeight: '500',
  },
  actionsContainer: {
    gap: 15,
  },
  actionButton: {
    backgroundColor: '#E91E63',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#C2185B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 8,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#E91E63',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButtonText: {
    color: '#E91E63',
  },
});

export default HomeScreen;