import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const FavoriteData = [
  {
    id: 1,
    title: 'BTC',
    subtitle: 'Bitcoin',
    amoount: '$35,787.52',
    percentage: '-6.27%',
  },
  {
    id: 2,
    title: 'USTD',
    subtitle: 'TetherUS',
    amoount: '$0.99993',
    percentage: '+2.24%',
  },
  {
    id: 1,
    title: 'ETH',
    subtitle: 'Ethereum',
    amoount: '$2,532.84',
    percentage: '-1.52%',
  },
];

const HeaderComp = () => {
  return (
    <View className="w-full mx-auto">
      <View className="flex flex-row items-center justify-between gap-4">
        <Ionicons name="ios-menu-outline" size={24} color="black" />
        <View className="flex items-center">
          <Text className="text-gray-700">Good Morning</Text>
          <Text className="font-semibold base">Favor</Text>
        </View>
        <Ionicons name="md-notifications-outline" size={24} color="black" />
      </View>
    </View>
  );
};

export default HeaderComp;
