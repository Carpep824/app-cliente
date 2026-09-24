import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RastreoVivo() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      {/* Placeholder del Mapa */}
      <View style={styles.mapPlaceholder}>
        <View style={styles.gridLineHorizontal} />
        <View style={styles.gridLineVertical} />
        
        {/* Marcador simulado del repartidor */}
        <View style={styles.markerContainer}>
          <MaterialCommunityIcons name="truck-delivery-outline" size={20} color="#FFFFFF" />
        </View>
      </View>

      {/* Header Flotante */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
          <Feather name="arrow-left" size={24} color="#0B2B5B" />
        </TouchableOpacity>

        <View style={styles.titlePill}>
          <Text style={styles.titleText}>Rastreo en Vivo</Text>
        </View>

        <TouchableOpacity style={styles.iconButton}>
          <Feather name="navigation" size={20} color="#18529D" />
        </TouchableOpacity>
      </View>

      {/* Tarjeta Inferior (Bottom Sheet) */}
      <View style={styles.bottomSheet}>
        <View style={styles.dragHandle} />

        <View style={styles.statusRow}>
          <View style={styles.truckIconContainer}>
            <MaterialCommunityIcons name="truck-outline" size={24} color="#18529D" />
          </View>
          <View style={styles.statusTextContainer}>
            <Text style={styles.statusTitle}>Tu paquete está cerca</Text>
            <Text style={styles.statusSubtitle}>El repartidor va en camino a tu dirección.</Text>
          </View>
          <View style={styles.timeBadge}>
            <Text style={styles.timeBadgeText}>12 min</Text>
          </View>
        </View>

        <View style={styles.detailsCard}>
          <View style={styles.detailRow}>
            <Feather name="map-pin" size={18} color="#18529D" style={styles.detailIcon} />
            <View>
              <Text style={styles.detailLabel}>LLEGADA ESTIMADA</Text>
              <Text style={styles.detailValue}>Llegada estimada: 12 min</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <Feather name="home" size={18} color="#18529D" style={styles.detailIcon} />
            <View>
              <Text style={styles.detailLabel}>DESTINO</Text>
              <Text style={styles.detailValue}>Destino: Blvd. Luis Encinas J</Text>
            </View>
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EDF2', // Color de fondo base simulando el mapa
  },
  mapPlaceholder: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridLineHorizontal: {
    position: 'absolute',
    top: '40%',
    width: '100%',
    height: 4,
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
  },
  gridLineVertical: {
    position: 'absolute',
    left: '40%',
    width: 4,
    height: '100%',
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
  },
  markerContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#18529D',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    shadowColor: '#18529D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! + 20 : 60,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  iconButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  titlePill: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0B2B5B',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 10,
  },
  dragHandle: {
    width: 48,
    height: 4,
    backgroundColor: '#D1D9E6',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 24,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  truckIconContainer: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#E6F0FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  statusTextContainer: {
    flex: 1,
  },
  statusTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0B2B5B',
    marginBottom: 4,
  },
  statusSubtitle: {
    fontSize: 13,
    color: '#7A8B9E',
    paddingRight: 8,
  },
  timeBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  timeBadgeText: {
    color: '#2E7D32',
    fontSize: 14,
    fontWeight: 'bold',
  },
  detailsCard: {
    backgroundColor: '#F4F7FB',
    borderRadius: 16,
    padding: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailIcon: {
    marginRight: 16,
  },
  detailLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#9AA6B8',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0B2B5B',
  },
  divider: {
    height: 1,
    backgroundColor: '#E6EDF5',
    marginVertical: 16,
    marginLeft: 34, 
  },
});