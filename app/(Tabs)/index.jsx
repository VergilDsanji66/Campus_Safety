import { Shield, NotebookText, Phone } from 'lucide-react-native'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import HelpSection from '../screens/HelpSection'
import SafeSection from '../screens/SafeSection'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  const router = useRouter()

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.home}>
          <View style={styles.header}>
            <Shield size={24} color="purple"/>
            <Text style={styles.headerText}>Safe & Confidential Support</Text>
          </View>
          <Text style={styles.h1}>
            You Are <Text style={styles.purpleText}>Not Alone</Text>
          </Text>
          <Text style={styles.p}>
            A safe place for reporting, and resources. We're here to help you navigate through difficult times with compassion and confidentiality
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.Button, styles.reportBTN]} onPress={() => router.push('/(Tabs)/Report')}>
              <NotebookText size={24} color="white"/>
              <Text style={styles.buttonText}>Report Incident</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Button, styles.EMGBTN]} onPress={() => router.push('/(Tabs)/Emergency')}>
              <Phone size={24} color="red"/>
              <Text style={styles.buttonText2}>Emergency Help</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sections */}
        <HelpSection/>
        <SafeSection/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginBottom:  60,
    },
    scrollContent: {
        flexGrow: 1,
    },
    home: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom: 50
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: 'rgba(157, 78, 221, 0.2)',
        padding: 10,
        borderRadius: 20,
    },
    headerText: {
        fontSize: 14,
        color: 'purple',
    },
    h1: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    purpleText: {
        color: 'purple',
    },
    p: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 24,
    },
    buttonContainer: {
        width: '100%',
        gap: 12,
    },
    Button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 12,
        width: '100%',
        gap: 10,
    },
    reportBTN: {
        backgroundColor: 'purple',
    },
    EMGBTN: {
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderWidth: 2,
        borderColor: 'red'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    buttonText2: {
        color: 'red',
        fontSize: 16,
        fontWeight: '600',
    }
})