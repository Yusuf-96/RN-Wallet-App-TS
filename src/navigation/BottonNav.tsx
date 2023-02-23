import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import MakertScreen from '../screens/MakertScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TransferScreen from '../screens/TransferScreen';
import WalletScreen from '../screens/WalletScreen';

const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#3e2460"
      inactiveColor="#C5C5C5"
      barStyle={{ backgroundColor: '#FCFCFC', }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-wallet-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Transfer"
        component={TransferScreen}
        options={{
          tabBarLabel: 'Transfer',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-swap-horizontal" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={MakertScreen}
        options={{
          tabBarLabel: 'Market',
          tabBarIcon: ({ color }) => (
            <EvilIcons name="chart" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
