import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BookOpen, AlertTriangle, Heart, ChevronDown, ChevronUp, Eye, HandHeart, Ban, Megaphone} from 'lucide-react-native';

const GBVInfo = [
  {
    id: 1,
    title: 'What is Gender Based Violence',
    icon: AlertTriangle,
    iconColor: '#DC2626',
    subtitle: 'Gender-based violence (GBV) is a serious violation of human rights and a life-threatening health and protection issue. It refers to harmful acts directed at an individual based on their gender.',
    types: [
      'Physical Violence: Hitting, slapping, pushing, or any form of physical harm',
      'Sexual Violence: Rape, sexual assault, harassment, or any non-consensual sexual act',
      'Emotional/Psychological: Verbal abuse, humiliation, controlling behavior, intimidation',
      'Economic Abuse: Controlling access to financial resources, employment, or education',
      'Digital Violence: Online harassment, non-consensual sharing of intimate images',
    ]
  },
  {
    id: 2,
    title: 'Recognizing the Signs',
    icon: Eye,
    iconColor: '#2563EB',
    subtitle: 'Understanding the warning signs of GBV can help identify situations where someone needs help.',
    types: [
      'Physical Signs: Unexplained injuries, frequent absences, changes in appearance',
      'Behavioral Changes: Withdrawal from friends and activities, anxiety, depression',
      'Controlling Relationships: Partner monitoring phone, controlling whereabouts, isolation',
      'Verbal Indicators: Self-blame, making excuses for partner\'s behavior, fear of partner',
      'Digital Signs: Excessive texting, demanding passwords, monitoring social media',
    ]
  },
  {
    id: 3,
    title: 'Understanding Consent',
    icon: HandHeart,
    iconColor: '#7C3AED',
    subtitle: 'Consent is a clear, enthusiastic, and ongoing agreement between participants engaging in sexual activity.',
    types: [
      'Freely Given: Consent is given without pressure, manipulation, or under influence',
      'Reversible: Anyone can change their mind at any time, even in the moment',
      'Informed: All parties understand what they\'re agreeing to',
      'Enthusiastic: Looking for active participation, not just absence of "no"',
      'Specific: Agreeing to one activity doesn\'t imply consent for others',
    ]
  },
  {
    id: 4,
    title: 'Supporting a Survivor',
    icon: Heart,
    iconColor: '#E11D48',
    subtitle: 'How to provide effective support to someone who has experienced gender-based violence.',
    types: [
      'Listen Without Judgment: Believe them and validate their experience',
      'Respect Their Choices: Don\'t pressure them to take actions they\'re not ready for',
      'Provide Resources: Share information about counseling, hotlines, and legal support',
      'Maintain Confidentiality: Don\'t share their story without permission',
      'Check In Regularly: Ongoing support is crucial for recovery',
    ]
  },
  {
    id: 5,
    title: 'Prevention & Bystander Intervention',
    icon: Ban,
    iconColor: '#059669',
    subtitle: 'Strategies to prevent GBV and safely intervene when witnessing potential violence.',
    types: [
      'Direct Intervention: Safely address the situation directly if appropriate',
      'Distraction: Create a diversion to interrupt the situation',
      'Delegate: Ask others for help, including authorities or trained professionals',
      'Delay: Check in with the person after the situation',
      'Document: Record incidents safely when appropriate, never put yourself at risk',
    ]
  }
];

const InfoCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const IconComponent = item.icon;

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity 
        style={styles.cardHeader}
        onPress={() => setExpanded(!expanded)}
        activeOpacity={0.7}
      >
        <View style={styles.headerContent}>
          <View style={[styles.iconContainer, { backgroundColor: `${item.iconColor}20` }]}>
            <IconComponent size={24} color={item.iconColor} />
          </View>
          <Text style={styles.cardTitle}>{item.title}</Text>
        </View>
        {expanded ? (
          <ChevronUp size={20} color="#4B5563" />
        ) : (
          <ChevronDown size={20} color="#4B5563" />
        )}
      </TouchableOpacity>

      {expanded && (
        <View style={styles.cardContent}>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          
          <View style={styles.typesContainer}>
            <Text style={styles.typesHeader}>Types of {item.title}:</Text>
            {item.types.map((type, index) => (
              <View key={index} style={styles.typeItem}>
                <View style={styles.bulletPoint} />
                <Text style={styles.typeText}>{type}</Text>
              </View>
            ))}
          </View>
          
          <View style={styles.resourcesContainer}>
            <Text style={styles.resourcesHeader}>Need Help?</Text>
            <View style={styles.resourceButtons}>
              <TouchableOpacity style={styles.resourceButton}>
                <Text style={styles.resourceButtonText}>Find Support</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.resourceButton}>
                <Text style={styles.resourceButtonText}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const LearnMore = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}
      >
        <View style={styles.headerSection}>
          <View style={styles.headerIconContainer}>
            <BookOpen size={32} color="#B45309" />
          </View>
          <Text style={styles.headerTitle}>Learn About GBV</Text>
          <Text style={styles.headerSubtitle}>
            Knowledge is power. Learn about gender-based violence, 
            how to recognize it, and how to help.
          </Text>
        </View>

        <View style={styles.cardsSection}>
          {GBVInfo.map((item) => (
            <InfoCard key={item.id} item={item} />
          ))}
        </View>

        <View style={styles.emergencyBanner}>
          <Megaphone size={24} color="#FFFFFF" />
          <Text style={styles.emergencyText}>
            In case of emergency, call: 0800 123 4567
          </Text>
          <Text style={styles.emergencySubtext}>
            Available 24/7 • Confidential • Free
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LearnMore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    marginBottom: 80
  },
  headerSection: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FEF3C7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
    textAlign: 'center',
  },
  cardsSection: {
    padding: 16,
    gap: 12,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#F3F4F6',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    flex: 1,
  },
  cardContent: {
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  subtitle: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 16,
  },
  typesContainer: {
    marginBottom: 16,
  },
  typesHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  typeItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    paddingLeft: 4,
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#DC2626',
    marginTop: 6,
    marginRight: 10,
  },
  typeText: {
    fontSize: 14,
    color: '#4B5563',
    flex: 1,
    lineHeight: 20,
  },
  resourcesContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  resourcesHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  resourceButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  resourceButton: {
    flex: 1,
    backgroundColor: '#2563EB',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  resourceButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  emergencyBanner: {
    backgroundColor: '#DC2626',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    gap: 8,
  },
  emergencyText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  emergencySubtext: {
    color: '#FEE2E2',
    fontSize: 14,
    textAlign: 'center',
  },
});