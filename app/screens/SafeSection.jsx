import { Eye, Lock, Shield, UsersRound } from 'lucide-react-native'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const SafeSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Stay Safe On Campus</Text>
      <Text style={styles.subtitle}>Simple precautions can make a big difference in your safety</Text>
      
      <View style={styles.InfoContainer}>
        <TouchableOpacity style={styles.Grid}>
          <View style={[styles.iconBackground, { backgroundColor: 'rgba(128, 0, 128, 0.15)' }]}>
            <Shield size={24} color="purple" />
          </View>
          <Text style={styles.h2}>Trust Your Instincts</Text>
          <Text style={styles.p}>If something feels wrong, it probably is. Remove yourself from uncomfortable situations immediately</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Grid}>
          <View style={[styles.iconBackground, { backgroundColor: 'rgba(128, 0, 128, 0.15)' }]}>
            <Eye size={24} color="purple" />
          </View>
          <Text style={styles.h2}>Be Aware</Text>
          <Text style={styles.p}>Stay alert of your surroundings, avoid distractions like phones when walking alone at night</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Grid}>
          <View style={[styles.iconBackground, { backgroundColor: 'rgba(128, 0, 128, 0.15)' }]}>
            <UsersRound size={24} color="purple" />
          </View>
          <Text style={styles.h2}>Use The Buddy System</Text>
          <Text style={styles.p}>Walk with friends at night and look out for each other, especially in unfamiliar areas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Grid}>
          <View style={[styles.iconBackground, { backgroundColor: 'rgba(128, 0, 128, 0.15)' }]}>
            <Lock size={24} color="purple" />
          </View>
          <Text style={styles.h2}>Secure Your Space</Text>
          <Text style={styles.p}>Always lock doors and windows, and never prop open secure building entrances</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SafeSection

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    paddingBottom: 30,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  h2: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 4,
    textAlign: 'center',
    color: '#333',
  },
  p: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 16,
  },
  InfoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  Grid: {
    width: '48%',
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 3,
  },
  iconBackground: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
})