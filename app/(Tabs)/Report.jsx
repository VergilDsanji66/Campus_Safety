import { Lock, Shield, ChevronDown } from 'lucide-react-native'
import { useState } from 'react'
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  TextInput,
  Modal,
  FlatList,
  Dimensions,
  ScrollView  // Import ScrollView directly from react-native
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width } = Dimensions.get('window')

const INCIDENT_TYPES = [
  'Harassment',
  'Physical Assault',
  'Theft',
  'Threatening Behavior',
  'Discrimination',
  'Verbal Abuse',
  'Property Damage',
  'Cyber Harassment',
  'Stalking',
  'Other'
]

const Report = () => {
  const [incidentType, setIncidentType] = useState('')
  const [description, setDescription] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.content}>
          {/* Header Section */}
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <Shield size={32} color="#6366f1" strokeWidth={1.5} />
            </View>
            <Text style={styles.title}>Report an Incident</Text>
            <Text style={styles.subtitle}>
              Your safety matters. This form is confidential and can be submitted anonymously. 
              Take your time - we're here to listen.
            </Text>
          </View>

          {/* Security Badges */}
          <View style={styles.badgesContainer}>
            <View style={styles.badge}>
              <Lock size={20} color="#6366f1" />
              <Text style={styles.badgeText}>Encrypted & Secure</Text>
            </View>
            <View style={styles.badge}>
              <Shield size={20} color="#6366f1" />
              <Text style={styles.badgeText}>100% Confidential</Text>
            </View>
          </View>

          {/* Form Section */}
          <View style={styles.form}>
            <Text style={styles.sectionTitle}>What Happened?</Text>
            <Text style={styles.hint}>Tell us about the incident. Take your time</Text>
            
            {/* Incident Type Dropdown */}
            <Text style={styles.label}>Type of Incident *</Text>
            <TouchableOpacity 
              style={styles.dropdown}
              onPress={() => setModalVisible(true)}
              activeOpacity={0.7}
            >
              <Text style={incidentType ? styles.selectedText : styles.placeholderText}>
                {incidentType || 'Select incident type'}
              </Text>
              <ChevronDown size={20} color="#9ca3af" />
            </TouchableOpacity>

            {/* Description Input */}
            <Text style={styles.label}>Describe what happened</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Please provide details about the incident..."
              placeholderTextColor="#9ca3af"
              multiline
              numberOfLines={6}
              textAlignVertical="top"
              value={description}
              onChangeText={setDescription}
            />
            
            <Text style={styles.hint}>
              Your words matter. Include any details you remember - date, time, location, 
              people involved, and any witnesses.
            </Text>
          </View>

          {/* Continue Button */}
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Continue →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Incident Type Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Incident Type</Text>
              <TouchableOpacity 
                onPress={() => setModalVisible(false)}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Text style={styles.modalClose}>✕</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={INCIDENT_TYPES}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setIncidentType(item)
                    setModalVisible(false)
                  }}
                  activeOpacity={0.6}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  )
}

export default Report

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginBottom: 60,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eef2ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 16,
  },
  badgesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 32,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
  },
  badgeText: {
    fontSize: 14,
    color: '#4b5563',
    fontWeight: '500',
  },
  form: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1f2937',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 20,
  },
  placeholderText: {
    fontSize: 16,
    color: '#9ca3af',
  },
  selectedText: {
    fontSize: 16,
    color: '#1f2937',
    fontWeight: '500',
  },
  textArea: {
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 14,
    fontSize: 16,
    color: '#1f2937',
    minHeight: 120,
    marginBottom: 12,
  },
  hint: {
    fontSize: 14,
    color: '#6b7280',
    fontStyle: 'italic',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#6366f1',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  modalClose: {
    fontSize: 20,
    color: '#6b7280',
    paddingHorizontal: 8,
  },
  modalItem: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  modalItemText: {
    fontSize: 16,
    color: '#374151',
  },
})