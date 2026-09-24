import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DetallesEnvio() {
  const router = useRouter();

  const historial = [
    { 
      id: 1, 
      titulo: 'Recibido en centro de distribución local', 
      subtitulo: 'Hoy · 08:12 h', 
      icono: 'warehouse', 
      colorFondo: '#2E7D32', 
      colorTexto: '#0B2B5B',
      estado: 'completado' 
    },
    { 
      id: 2, 
      titulo: 'Paquete clasificado y en ruta', 
      subtitulo: 'Hoy · 09:45 h', 
      icono: 'package-variant-closed', 
      colorFondo: '#2E7D32', 
      colorTexto: '#0B2B5B',
      estado: 'completado' 
    },
    { 
      id: 3, 
      titulo: 'En camino a entrega', 
      subtitulo: 'En curso · Unidad 07 asignada', 
      icono: 'truck-outline', 
      colorFondo: '#18529D', 
      colorTexto: '#18529D',
      estado: 'actual' 
    },
    { 
      id: 4, 
      titulo: 'Entregado', 
      subtitulo: 'Pendiente', 
      icono: 'home-outline', 
      colorFondo: '#F0F2F5', 
      colorTexto: '#9AA6B8',
      tituloColor: '#9AA6B8',
      estado: 'pendiente' 
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollFlex} contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Feather name="arrow-left" size={24} color="#0B2B5B" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Detalles del Envío</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Tarjeta Principal Azul */}
        <View style={styles.mainCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.folioText}>#PKT-8492</Text>
            <View style={styles.badgeActivo}>
              <View style={styles.dotActivo} />
              <Text style={styles.badgeActivoText}>Activo</Text>
            </View>
          </View>
          
          <Text style={styles.labelSmall}>ESTADO</Text>
          <Text style={styles.statusText}>En camino a entrega</Text>
          
          <View style={styles.divider} />
          
          <View style={styles.cardFooter}>
            <View>
              <Text style={styles.labelSmall}>LLEGADA ESTIMADA</Text>
              <Text style={styles.infoText}>12 min</Text>
            </View>
            <View>
              <Text style={styles.labelSmall}>TRANSPORTISTA</Text>
              <Text style={styles.infoText}>Unidad 07</Text>
            </View>
          </View>
        </View>

        {/* Historial del Envío */}
        <Text style={styles.sectionTitle}>Historial del envío</Text>

        <View style={styles.timelineContainer}>
          {historial.map((item, index) => (
            <View key={item.id} style={styles.timelineItem}>
              
              <View style={styles.timelineLeft}>
                <View style={[styles.iconCircle, { backgroundColor: item.colorFondo }]}>
                  <MaterialCommunityIcons 
                    name={item.icono as any} 
                    size={22} 
                    color={item.estado === 'pendiente' ? '#9AA6B8' : '#FFFFFF'} 
                  />
                </View>
                {index !== historial.length - 1 && (
                  <View style={[
                    styles.timelineLine, 
                    { backgroundColor: item.estado === 'completado' ? '#2E7D32' : '#E6EDF5' }
                  ]} />
                )}
              </View>

              <View style={styles.timelineRight}>
                <Text style={[
                  styles.timelineTitle, 
                  item.tituloColor ? { color: item.tituloColor } : {}
                ]}>
                  {item.titulo}
                </Text>
                <Text style={[styles.timelineSubtitle, { color: item.colorTexto }]}>
                  {item.subtitulo}
                </Text>
              </View>
              
            </View>
          ))}
        </View>

      </ScrollView>

      {/* Botón Inferior */}
      <View style={styles.footerContainer}>
        <TouchableOpacity 
          style={styles.mapButton}
          onPress={() => router.push('/rastreo')}
        >
          <Feather name="map-pin" size={20} color="#FFFFFF" style={styles.mapIcon} />
          <Text style={styles.mapButtonText}>Ver en Mapa</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollFlex: {
    flex: 1,
  },
  container: {
    padding: 24,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0B2B5B',
  },
  mainCard: {
    backgroundColor: '#18529D',
    borderRadius: 20,
    padding: 24,
    marginBottom: 32,
    shadowColor: '#18529D',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  folioText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  badgeActivo: {
    flexDirection: 'row',
    backgroundColor: '#356BB0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignItems: 'center',
  },
  dotActivo: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4CAF50',
    marginRight: 6,
  },
  badgeActivoText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  labelSmall: {
    color: '#90B4E2',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: 4,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#356BB0',
    marginBottom: 20,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0B2B5B',
    marginBottom: 24,
  },
  timelineContainer: {
    paddingLeft: 8,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 0, 
  },
  timelineLeft: {
    alignItems: 'center',
    width: 48,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  timelineLine: {
    width: 2,
    height: 40,
    marginTop: -4,
    marginBottom: -4,
    zIndex: 1,
  },
  timelineRight: {
    flex: 1,
    paddingLeft: 16,
    paddingTop: 4,
    paddingBottom: 24,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0B2B5B',
    marginBottom: 4,
  },
  timelineSubtitle: {
    fontSize: 13,
  },
  footerContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F2F5',
  },
  mapButton: {
    flexDirection: 'row',
    backgroundColor: '#18529D',
    borderRadius: 12,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapIcon: {
    marginRight: 8,
  },
  mapButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});