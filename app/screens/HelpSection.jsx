// screens/HelpSection.jsx
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BookOpen, BookSearch, FileText, MessageCircle } from 'lucide-react-native'
import { useRouter } from 'expo-router'

const HelpSection = () => {
  const router = useRouter()
  
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>How Can We Help?</Text>
      <Text style={styles.subtitle}>Choose an option below to get started. All services are free and confidential.</Text>
      
      <View style={styles.InfoContainer}>
        <TouchableOpacity 
          style={styles.Grid} 
          onPress={() => router.push('/(Tabs)/Report')}
        >
          <View style={[styles.iconBackground, { backgroundColor: 'rgba(128, 0, 128, 0.1)' }]}>
            <FileText size={24} color="purple" />
          </View>
          <Text style={styles.h2}>Report Incident</Text>
          <Text style={styles.p}>Submit a confidential report about any incident</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.Grid}
          onPress={() => router.push('/ResourcesPage')}
        >
          <View style={[styles.iconBackground, { backgroundColor: 'rgba(0, 128, 0, 0.1)' }]}>
            <BookSearch size={24} color="green" />
          </View>
          <Text style={styles.h2}>Find Resources</Text>
          <Text style={styles.p}>Access support services, consultations and help centers</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.Grid}
          onPress={() => router.push('/(Tabs)/LearnMore')}
        >
          <View style={[styles.iconBackground, { backgroundColor: 'rgba(255, 165, 0, 0.1)' }]}>
            <BookOpen size={24} color="#FF8C00" />
          </View>
          <Text style={styles.h2}>Learn More</Text>
          <Text style={styles.p}>Educational resources about GBV awareness and prevention</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.Grid}
          onPress={() => router.push('/(Tabs)/Support')}
        >
          <View style={[styles.iconBackground, { backgroundColor: 'rgba(255, 0, 0, 0.1)' }]}>
            <MessageCircle size={24} color="red" />
          </View>
          <Text style={styles.h2}>Get Support</Text>
          <Text style={styles.p}>Connect with counseling and support groups</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HelpSection

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