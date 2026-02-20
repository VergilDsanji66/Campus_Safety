import { Tabs } from 'expo-router'
import { File, Home, AlertCircle, Heart, BookOpen } from 'lucide-react-native'
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          marginLeft: 10,
          marginRight: 10,
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: 'white',
          borderRadius: 30,
          borderWidth: 4,
          borderColor: 'purple',
          height: 65,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.25,
          shadowRadius: 10,
          elevation: 5,
          paddingHorizontal: 10,
          paddingBottom: 0,
        },
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
          marginBottom: 5,
        },
        tabBarItemStyle: {
          paddingVertical: 5,
        },
      }}
    >
      <Tabs.Screen 
        name='index' 
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Home color={color} size={size} />
          ),
        }}
      />
      
      <Tabs.Screen 
        name='Report' 
        options={{
          title: 'Report',
          tabBarIcon: ({ color, size }) => (
            <File color={color} size={size} />
          ),
        }}
      />
      
      <Tabs.Screen 
        name='Emergency' 
        options={{
          title: '',
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={styles.middleTab}
              activeOpacity={0.8}
            >
              <View style={styles.middleTabContainer}>
                <AlertCircle color="white" size={32} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      
      <Tabs.Screen 
        name='Support' 
        options={{
          title: 'Support',
          tabBarIcon: ({ color, size }) => (
            <Heart color={color} size={size} />
          ),
        }}
      />
      
      <Tabs.Screen 
        name='LearnMore' 
        options={{
          title: 'Learn More',
          tabBarIcon: ({ color, size }) => (
            <BookOpen color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({
  middleTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: -20,
  },
  middleTabContainer: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: '#ff4444',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
    borderWidth: 4,
    borderColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#ff4444',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
    }),
  },
})