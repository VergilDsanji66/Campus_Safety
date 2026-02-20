import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ResourceGrid from '../components/ResourceGrid'
import { Phone, AlertTriangle, Heart, HeartPulse, Scale, Shield, Home, Users } from 'lucide-react-native';

const Support = () => {
  const categories = [
    { name: 'All', icon: null },
    { name: 'Counseling', icon: Heart, color: '#8B5CF6' },
    { name: 'Medical', icon: HeartPulse, color: '#EF4444' },
    { name: 'Legal', icon: Scale, color: '#10B981' },
    { name: 'Security', icon: Shield, color: '#F59E0B' },
    { name: 'Hotlines', icon: Phone, color: '#EC4899' },
    { name: 'Shelters', icon: Home, color: '#6366F1' },
    { name: 'Advocacy', icon: Users, color: '#14B8A6' },
  ];

  const supportResources = [
    {
      id: 1,
      category: 'Counseling',
      header: 'Campus Counseling Center',
      subtitle: 'Free confidential counseling services for all students, individuals and group therapy available',
      phone: '0000 111 2222',
      email: 'counseling@univen.ac.za',
      location: 'Student Service Building',
      time: 'Mon-Fri: 8am-6pm',
      site: 'www.example.com'
    },
    {
      id: 2,
      category: 'Hotlines',
      header: '24/7 Crisis Hotline',
      subtitle: 'Round the clock emergency crisis support and intervention services',
      phone: '0800 123 4667',
      email: '',
      location: '',
      time: '24/7 Available',
      site: ''
    },
    {
      id: 3,
      category: 'Security',
      header: 'Campus Safety',
      subtitle: 'Emergency response and safety services, 24/7 patrol and assistance',
      phone: '0800 999 8888',
      email: '',
      location: 'Security Office Main Gate',
      time: '24/7 Available',
      site: '',
    },
    {
      id: 4,
      category: 'Medical',
      header: 'Student Health Services',
      subtitle: 'Medical care, consultations, and wellness services for all students',
      phone: '0800 5555 666',
      email: 'health@univen.ac.za',
      location: 'Health Center Building',
      time: 'Mon-Fri: 7am-10pm, Sat-Sun: 9am-5pm',
      site: '',
    },
    {
      id: 5,
      category: 'Legal',
      header: 'Student Legal Aid',
      subtitle: 'Free legal advice and representation for students',
      phone: '0800 777 8888',
      email: 'legalaid@univen.ac.za',
      location: 'Law Building, Room 101',
      time: 'Mon-Fri: 9am-4pm',
      site: 'www.legalaid.example.com',
    },
    {
      id: 6,
      category: 'Shelters',
      header: 'Emergency Housing',
      subtitle: 'Temporary accommodation for students in crisis',
      phone: '0800 444 5555',
      email: '',
      location: 'Residence 12',
      time: '24/7 Available',
      site: '',
    },
    {
      id: 7,
      category: 'Advocacy',
      header: 'Student Advocacy Office',
      subtitle: 'Support and representation for student rights and concerns',
      phone: '0800 333 2222',
      email: 'advocacy@univen.ac.za',
      location: 'Student Union Building',
      time: 'Mon-Fri: 8am-5pm',
      site: 'www.studentadvocacy.example.com',
    },
  ];

  const handleCall = (resource) => {
    console.log('Calling:', resource.phone);
  };

  const handleVisit = (resource) => {
    console.log('Visiting:', resource.site);
  };

  const handleCategoryPress = (category) => {
    console.log('Selected category:', category);
  };

  const handleEmergencyCall = () => {
    console.log('Calling 911');
    // In a real app, you would use Linking.openURL('tel:911')
  };

  const handleHotlineCall = () => {
    console.log('Calling hotline');
    // In a real app, you would use Linking.openURL('tel:08001234567')
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.headerTitle}>Get Support</Text>
          <Text style={styles.headerSubtitle}>
            You're not alone. Reach out to professional support services 
            that are here to help you 24/7.
          </Text>
        </View>

        {/* Emergency Support Section */}
        <View style={styles.emergencySection}>
          <View style={styles.emergencyHeader}>
            <AlertTriangle size={24} color="#B91C1C" />
            <Text style={styles.emergencyTitle}>Need Immediate Help?</Text>
          </View>
          
          <Text style={styles.emergencyText}>
            If you're in immediate danger or need urgent support, 
            contact emergency services right away.
          </Text>

          <View style={styles.emergencyButtons}>
            <TouchableOpacity 
              style={[styles.emergencyButton, styles.call911Button]}
              onPress={handleEmergencyCall}
            >
              <Phone size={20} color="#FFFFFF" />
              <Text style={styles.emergencyButtonText}>Call 911</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.emergencyButton, styles.hotlineButton]}
              onPress={handleHotlineCall}
            >
              <Phone size={20} color="#FFFFFF" />
              <Text style={styles.emergencyButtonText}>24/7 Hotline</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.emergencyDisclaimer}>
            Free • Confidential • Available 24/7
          </Text>
        </View>

        {/* Support Services Section */}
        <View style={styles.supportServicesSection}>
          <Text style={styles.sectionTitle}>Support Services</Text>
          <Text style={styles.sectionSubtitle}>
            Browse available support services based on your needs
          </Text>

          <ResourceGrid
            categories={categories}
            resources={supportResources}
            onCallPress={handleCall}
            onVisitPress={handleVisit}
            onCategoryPress={handleCategoryPress}
            customStyles={{
              container: { backgroundColor: 'transparent' },
              card: { borderRadius: 16 },
            }}
          />
        </View>

        {/* Additional Resources Section */}
        <View style={styles.resourcesFooter}>
          <Text style={styles.footerText}>
            All services are free and confidential for students
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Support;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  headerSection: {
    padding: 24,
    paddingBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
    textAlign: 'center'
  },
  emergencySection: {
    margin: 16,
    padding: 20,
    backgroundColor: '#FEE2E2', // Light red background
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  emergencyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  emergencyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#B91C1C',
  },
  emergencyText: {
    fontSize: 14,
    color: '#7F1D1D',
    lineHeight: 20,
    marginBottom: 16,
  },
  emergencyButtons: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  emergencyButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    gap: 8,
  },
  call911Button: {
    backgroundColor: '#DC2626', // Darker red for 911
  },
  hotlineButton: {
    backgroundColor: '#B91C1C', // Slightly darker red for hotline
  },
  emergencyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  emergencyDisclaimer: {
    fontSize: 12,
    color: '#991B1B',
    textAlign: 'center',
    marginTop: 8,
  },
  supportServicesSection: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
    paddingHorizontal: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  resourcesFooter: {
    padding: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
  },
});