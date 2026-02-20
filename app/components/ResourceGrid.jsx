import { StyleSheet, Text, View, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Heart, HeartPulse, Scale, Shield, Phone, Globe, ExternalLink, AlertCircle, Home, Users, ChevronRight, ChevronLeft, MapPin, Clock, Mail } from 'lucide-react-native';
import { useState, useRef } from 'react';

const ResourcesGrid = ({ 
  categories = [], 
  resources = [],
  onCallPress,
  onVisitPress,
  onCategoryPress,
  customStyles = {}
}) => {
  const { width } = useWindowDimensions();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const scrollViewRef = useRef(null);

  // Default categories if none provided
  const defaultCategories = [
    { name: 'All', icon: null },
    { name: 'Counseling', icon: Heart, color: '#8B5CF6' },
    { name: 'Medical', icon: HeartPulse, color: '#EF4444' },
    { name: 'Legal', icon: Scale, color: '#10B981' },
    { name: 'Security', icon: Shield, color: '#F59E0B' },
    { name: 'Hotlines', icon: Phone, color: '#EC4899' },
    { name: 'Shelters', icon: Home, color: '#6366F1' },
    { name: 'Advocacy', icon: Users, color: '#14B8A6' },
  ];

  // Use provided categories or defaults
  const categoryList = categories.length > 0 ? categories : defaultCategories;

  const getCategoryColor = (categoryName) => {
    const cat = categoryList.find(c => c.name === categoryName);
    return cat?.color || '#6B7280';
  };

  const getLighterColor = (color) => {
    if (color.startsWith('#')) {
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, 0.1)`;
    }
    return 'rgba(107, 114, 128, 0.1)';
  };

  const handleCategoryPress = (categoryName) => {
    setSelectedCategory(categoryName);
    if (onCategoryPress) {
      onCategoryPress(categoryName);
    }
  };

  const filteredResources = selectedCategory === 'All' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  const numColumns = width > 768 ? 3 : width > 480 ? 2 : 1;

  const scrollToStart = () => {
    scrollViewRef.current?.scrollTo({ x: 0, animated: true });
  };

  const scrollToEnd = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <View style={[styles.container, customStyles.container]}>
      {/* Categories Section with Scroll Indicators */}
      <View style={[styles.categoriesWrapper, customStyles.categoriesWrapper]}>
        <TouchableOpacity 
          style={[styles.scrollIndicator, customStyles.scrollIndicator]} 
          onPress={scrollToStart}
        >
          <ChevronLeft size={20} color="#4B5563" />
        </TouchableOpacity>
        
        <ScrollView 
          ref={scrollViewRef}
          horizontal 
          showsHorizontalScrollIndicator={true}
          persistentScrollbar={true}
          indicatorStyle="black"
          style={[styles.categoriesContainer, customStyles.categoriesContainer]}
          contentContainerStyle={[styles.categoriesContent, customStyles.categoriesContent]}
        >
          {categoryList.map((category) => {
            const IconComponent = category.icon;
            const isSelected = selectedCategory === category.name;
            
            return (
              <TouchableOpacity
                key={category.name}
                style={[
                  styles.categoryChip,
                  isSelected && styles.selectedCategoryChip,
                  customStyles.categoryChip,
                  isSelected && customStyles.selectedCategoryChip
                ]}
                onPress={() => handleCategoryPress(category.name)}
              >
                {IconComponent && (
                  <IconComponent 
                    size={20} 
                    color={isSelected ? '#2563EB' : '#4B5563'}
                    style={[styles.categoryIcon, customStyles.categoryIcon]}
                  />
                )}
                <Text style={[
                  styles.categoryText,
                  isSelected && styles.selectedCategoryText,
                  customStyles.categoryText,
                  isSelected && customStyles.selectedCategoryText
                ]}>
                  {category.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        
        <TouchableOpacity 
          style={[styles.scrollIndicator, customStyles.scrollIndicator]} 
          onPress={scrollToEnd}
        >
          <ChevronRight size={20} color="#4B5563" />
        </TouchableOpacity>
      </View>

      {/* Hint text for scrolling */}
      <Text style={[styles.scrollHint, customStyles.scrollHint]}>← Scroll for more categories →</Text>

      {/* Resources Grid */}
      <ScrollView 
        style={[styles.gridContainer, customStyles.gridContainer]}
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}
      >
        <View style={[styles.grid, { flexDirection: numColumns === 1 ? 'column' : 'row' }, customStyles.grid]}>
          {filteredResources.map((resource) => {
            const categoryColor = getCategoryColor(resource.category);
            const lightBackground = getLighterColor(categoryColor);
            
            return (
              <View 
                key={resource.id} 
                style={[
                  styles.card,
                  customStyles.card,
                  { 
                    backgroundColor: lightBackground,
                    width: numColumns === 1 ? '100%' : `${100 / numColumns}%`,
                  }
                ]}
              >
                <View style={[styles.cardHeader, customStyles.cardHeader]}>
                  <View style={[styles.categoryBadge, { backgroundColor: categoryColor }, customStyles.categoryBadge]}>
                    <Text style={[styles.categoryBadgeText, customStyles.categoryBadgeText]}>{resource.category}</Text>
                  </View>
                </View>
                
                <Text style={[styles.cardTitle, customStyles.cardTitle]}>{resource.header}</Text>
                <Text style={[styles.cardSubtitle, customStyles.cardSubtitle]}>{resource.subtitle}</Text>
                
                {resource.phone && (
                  <View style={[styles.infoRow, customStyles.infoRow]}>
                    <Phone size={16} color="#4B5563" />
                    <Text style={[styles.infoText, customStyles.infoText]}>{resource.phone}</Text>
                  </View>
                )}

                {resource.email && (
                  <View style={[styles.infoRow, customStyles.infoRow]}>
                    <Mail size={16} color="#4B5563" />
                    <Text style={[styles.infoText, customStyles.infoText]}>{resource.email}</Text>
                  </View>
                )}
                
                {resource.location && (
                  <View style={[styles.infoRow, customStyles.infoRow]}>
                    <MapPin size={16} color='#4B5563'/>
                    <Text style={[styles.infoText, customStyles.infoText]}>{resource.location}</Text>
                  </View>
                )}
                
                {resource.time && (
                  <View style={[styles.infoRow, customStyles.infoRow]}>
                    <Clock size={16} color='#4B5563'/> 
                    <Text style={[styles.infoText, customStyles.infoText]}>{resource.time}</Text>
                  </View>
                )}
                
                <View style={[styles.buttonContainer, customStyles.buttonContainer]}>
                  {resource.phone && (
                    <TouchableOpacity 
                      style={[styles.actionButton, styles.callButton, customStyles.callButton]}
                      onPress={() => onCallPress && onCallPress(resource)}
                    >
                      <Phone size={16} color="#FFFFFF" />
                      <Text style={[styles.buttonText, customStyles.buttonText]}>Call</Text>
                    </TouchableOpacity>
                  )}
                  
                  {resource.site && (
                    <TouchableOpacity 
                      style={[styles.actionButton, styles.visitButton, customStyles.visitButton]}
                      onPress={() => onVisitPress && onVisitPress(resource)}
                    >
                      <Globe size={16} color="#2563EB" />
                      <Text style={[styles.buttonText, styles.visitButtonText, customStyles.visitButtonText]}>Visit</Text>
                      <ExternalLink size={12} color="#2563EB" style={styles.externalIcon} />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            );
          })}
        </View>
        
        {filteredResources.length === 0 && (
          <View style={[styles.emptyState, customStyles.emptyState]}>
            <AlertCircle size={48} color="#9CA3AF" />
            <Text style={[styles.emptyStateText, customStyles.emptyStateText]}>No resources found for this category</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default ResourcesGrid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  categoriesWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  scrollIndicator: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  categoriesContainer: {
    flex: 1,
    maxHeight: 60,
  },
  categoriesContent: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    gap: 8,
  },
  scrollHint: {
    textAlign: 'center',
    fontSize: 12,
    color: '#9CA3AF',
    paddingVertical: 4,
    backgroundColor: '#F3F4F6',
    fontStyle: 'italic',
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    marginRight: 8,
  },
  selectedCategoryChip: {
    backgroundColor: '#DBEAFE',
  },
  categoryIcon: {
    marginRight: 6,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4B5563',
  },
  selectedCategoryText: {
    color: '#2563EB',
  },
  gridContainer: {
    flex: 1,
  },
  grid: {
    flexWrap: 'wrap',
    padding: 12,
    gap: 12,
  },
  card: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cardHeader: {
    marginBottom: 12,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
  },
  categoryBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 12,
    lineHeight: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#4B5563',
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    gap: 8,
  },
  callButton: {
    backgroundColor: '#10B981',
  },
  visitButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#2563EB',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  visitButtonText: {
    color: '#2563EB',
  },
  externalIcon: {
    marginLeft: 2,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
    gap: 16,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#9CA3AF',
    textAlign: 'center',
  },
});