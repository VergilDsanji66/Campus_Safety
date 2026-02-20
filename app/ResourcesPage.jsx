import ResourcesGrid from './components/ResourceGrid';
import { Heart, HeartPulse, Scale, Shield, Phone, Globe, ExternalLink, AlertCircle, Home, Users, ChevronRight, ChevronLeft, MapPin, Clock, Mail } from 'lucide-react-native';

const ResourcesPage = () => {
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

  const resources= [
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

  return (
    <ResourcesGrid
      categories={categories}
      resources={resources}
      onCallPress={handleCall}
      onVisitPress={handleVisit}
      onCategoryPress={handleCategoryPress}
      customStyles={{
        container: { backgroundColor: '#F9FAFB' },
        card: { borderRadius: 16 },
      }}
    />
  );
};

export default ResourcesPage