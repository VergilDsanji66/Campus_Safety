//Emergency.jsx
import { StyleSheet, Text, View, TouchableOpacity, Alert, Linking, Animated, Easing, ScrollView } from 'react-native'
import { useState, useRef, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AlertCircle, Phone, Timer, Shield, MapPin, Users, Building2, ShieldAlert} from 'lucide-react-native'

const Emergency = () => {
  const [isActivated, setIsActivated] = useState(false)
  const [countdown, setCountdown] = useState(5)
  
  // Animation values for rings
  const ring1Anim = useRef(new Animated.Value(0)).current
  const ring2Anim = useRef(new Animated.Value(0)).current
  const ring3Anim = useRef(new Animated.Value(0)).current
  const pulseAnim = useRef(new Animated.Value(1)).current

  const emergencyNumbers = [
    { 
      name: 'Campus Help Center', 
      number: '+27151234567',
      relation: 'Security & Emergency',
      icon: Building2
    },
    { 
      name: 'South African Police', 
      number: '10111', 
      relation: 'SAPS Emergency',
      icon: ShieldAlert
    }
  ]

  useEffect(() => {
    // Start continuous ring animation when on the page
    startRingsAnimation()
    
    // Cleanup on unmount
    return () => {
      stopRingsAnimation()
    }
  }, [])

  const startRingsAnimation = () => {
    // Reset animations
    ring1Anim.setValue(0)
    ring2Anim.setValue(0)
    ring3Anim.setValue(0)
    pulseAnim.setValue(1)

    // Create looping animation for rings
    const createRingAnimation = (anim, delay) => {
      return Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(anim, {
            toValue: 1,
            duration: 3000,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          })
        ])
      )
    }

    // Pulse animation for center icon
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        })
      ])
    )

    // Start all animations
    createRingAnimation(ring1Anim, 0).start()
    createRingAnimation(ring2Anim, 1000).start()
    createRingAnimation(ring3Anim, 2000).start()
    pulseAnimation.start()
  }

  const stopRingsAnimation = () => {
    // Stop all animations
    ring1Anim.stopAnimation()
    ring2Anim.stopAnimation()
    ring3Anim.stopAnimation()
    pulseAnim.stopAnimation()
  }

  const startEmergencyCountdown = () => {
    setIsActivated(true)
    let timer = 5
    
    const interval = setInterval(() => {
      timer -= 1
      setCountdown(timer)
      
      if (timer === 0) {
        clearInterval(interval)
        callEmergencyNumbers()
        setIsActivated(false)
        setCountdown(5)
        // Note: rings animation continues running
      }
    }, 1000)
  }

  const callEmergencyNumbers = () => {
    const formatNumber = (number) => {
      return number === '10111' ? number : `tel:${number}`
    }

    Linking.openURL(formatNumber(emergencyNumbers[0].number))
    
    Alert.alert(
      '🚨 Emergency Alert Sent',
      'Campus security and SAPS have been notified. Stay where you are if safe.',
      [
        { 
          text: 'I Understand',
          onPress: () => {
            setTimeout(() => {
              Linking.openURL(formatNumber(emergencyNumbers[1].number))
            }, 1000)
          }
        }
      ]
    )
  }

  const cancelEmergency = () => {
    setIsActivated(false)
    setCountdown(5)
  }

  const ringScale = (animValue) => ({
    transform: [
      {
        scale: animValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 4]
        })
      }
    ],
    opacity: animValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0.8, 0.4, 0]
    })
  })

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Shield color="#FF3B30" size={28} />
            <Text style={styles.title}>SOS Emergency</Text>
          </View>
          <Text style={styles.subtitle}>Press only in case of emergency</Text>
        </View>

        <View style={styles.sosContainer}>
          <Animated.View style={[styles.ring, ringScale(ring1Anim)]} />
          <Animated.View style={[styles.ring, ringScale(ring2Anim)]} />
          <Animated.View style={[styles.ring, ringScale(ring3Anim)]} />
          
          <TouchableOpacity 
            style={styles.sosButton}
            onPress={startEmergencyCountdown}
            activeOpacity={0.8}
            disabled={isActivated}
          >
            <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
              <AlertCircle color="white" size={100} strokeWidth={1.5} />
            </Animated.View>
            <Text style={styles.sosText}>SOS</Text>
          </TouchableOpacity>
        </View>

        {isActivated && (
          <View style={styles.countdownOverlay}>
            <View style={styles.countdownCard}>
              <Timer color="#FF3B30" size={40} />
              <Text style={styles.countdownNumber}>{countdown}</Text>
              <Text style={styles.countdownText}>Calling emergency services...</Text>
              
              <View style={styles.actionButtons}>
                <TouchableOpacity 
                  style={styles.cancelButton}
                  onPress={cancelEmergency}
                >
                  <Text style={styles.cancelText}>CANCEL</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.callNowButton}
                  onPress={() => {
                    callEmergencyNumbers()
                    setIsActivated(false)
                    setCountdown(5)
                  }}
                >
                  <Text style={styles.callNowText}>CALL NOW</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        <View style={styles.contactsSection}>
          <View style={styles.contactsHeader}>
            <Users color="#FF3B30" size={20} />
            <Text style={styles.contactsTitle}>Emergency Contacts</Text>
          </View>
          
          {emergencyNumbers.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <TouchableOpacity 
                key={index} 
                style={styles.contactCard}
                onPress={() => {
                  const number = contact.number === '10111' ? contact.number : `tel:${contact.number}`
                  Linking.openURL(number)
                }}
                activeOpacity={0.7}
              >
                <View style={styles.contactIcon}>
                  <IconComponent color="#FF3B30" size={20} />
                </View>
                <View style={styles.contactInfo}>
                  <Text style={styles.contactName}>{contact.name}</Text>
                  <Text style={styles.contactRelation}>{contact.relation}</Text>
                  <Text style={styles.contactNumber}>{contact.number}</Text>
                </View>
                <Phone color="#FF3B30" size={20} />
              </TouchableOpacity>
            )
          })}
          
          <View style={styles.safetyTips}>
            <Text style={styles.safetyTipsTitle}>📋 Campus Safety Tips</Text>
            <Text style={styles.safetyTip}>• Share your location with friends when walking at night</Text>
            <Text style={styles.safetyTip}>• Save these numbers in your contacts</Text>
          </View>
        </View>

        {/* Location Indicator */}
        <View style={styles.locationContainer}>
          <MapPin color="#666" size={16} />
          <Text style={styles.locationText}>Your location will be shared during emergency</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Emergency

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF3B30',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    marginLeft: 38,
  },
  sosContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
    position: 'relative',
  },
  ring: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: '#FF3B30',
    backgroundColor: 'transparent',
  },
  sosButton: {
    backgroundColor: '#FF3B30',
    width: 180, // Bigger button
    height: 180,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF3B30',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 15,
    zIndex: 10,
  },
  sosText: {
    color: 'white',
    fontSize: 32, // Bigger text
    fontWeight: 'bold',
    marginTop: 5,
    letterSpacing: 2,
  },
  countdownOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.95)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
  },
  countdownCard: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: '80%',
  },
  countdownNumber: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#FF3B30',
    marginVertical: 10,
  },
  countdownText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#333',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelText: {
    color: 'white',
    fontWeight: 'bold',
  },
  callNowButton: {
    flex: 1,
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  callNowText: {
    color: 'white',
    fontWeight: 'bold',
  },
  contactsSection: {
    padding: 20,
  },
  contactsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 15,
  },
  contactsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  contactIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#ffe5e5',
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  contactRelation: {
    fontSize: 13,
    color: '#999',
    marginTop: 2,
  },
  contactNumber: {
    fontSize: 12,
    color: '#FF3B30',
    marginTop: 2,
    fontWeight: '500',
  },
  safetyTips: {
    backgroundColor: '#f0f8ff',
    padding: 15,
    borderRadius: 12,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#e0f0ff',
  },
  safetyTipsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  safetyTip: {
    fontSize: 13,
    color: '#666',
    marginBottom: 4,
    lineHeight: 18,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    padding: 15,
    backgroundColor: '#f8f8f8',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  locationText: {
    color: '#666',
    fontSize: 13,
  },
})

export const tabStyles = StyleSheet.create({
  middleTab: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleTabContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FF3B30',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF3B30',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  middleTabSelected: {
    backgroundColor: '#FF6B6B',
    transform: [{ scale: 1.1 }],
  },
})