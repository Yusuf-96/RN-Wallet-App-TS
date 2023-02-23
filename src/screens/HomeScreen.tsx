import { FlatList, Text, View } from 'react-native';
import React from 'react';
import HeaderComp from '../compoments/HeaderComp';
import FavoriteComp from '../compoments/FavoriteComp';
import { FontAwesome5 } from '@expo/vector-icons';
import { IFavorite } from '../interfaces/favorite';
import CardMover from '../compoments/CardMover';

const FavoriteData = [
  {
    id: 1,
    title: 'BTC',
    subtitle: 'Bitcoin',
    amoount: '$35,787.52',
    percentage: '-6.27%',
    icon: <FontAwesome5 name="bitcoin" size={32} color="#FBEC5D" />,
  },
  {
    id: 2,
    title: 'USTD',
    subtitle: 'TetherUS',
    amoount: '$0.99993',
    percentage: '+2.24%',
    icon: <FontAwesome5 name="bitcoin" size={32} color="#FBEC5D" />,
  },
  {
    id: 3,
    title: 'ETH',
    subtitle: 'Ethereum',
    amoount: '$2,532.84',
    percentage: '-1.52%',
    icon: <FontAwesome5 name="ethereum" size={24} color="black" />,
  },
];

const HomeScreen = () => {
  return (
    <View className="w-full">
      <View className="px-4">
        <HeaderComp />
        <Text className="font-medium text-gray-700">Favorites</Text>
        <FlatList
          data={FavoriteData}
          keyExtractor={(item: { id: any }) => item.id}
          renderItem={({ item }) => (
            <FavoriteComp
              title={item.title}
              subtitle={item.subtitle}
              amount={item.amoount}
              percentage={item.percentage}
              icon={item.icon}
            />
          )}
        />
      </View>
      <View className="px-4">
        <View className="flex flex-row justify-between items-center">
          <Text className="font-medium text-gray-700">Top Movers</Text>
          <Text className="font-bold text-emerald-600">See all</Text>
        </View>
      </View>
      <CardMover />
    </View>
  );
};

export default HomeScreen;
