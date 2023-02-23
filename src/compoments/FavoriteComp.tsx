import { View, Text } from 'react-native';
import React from 'react';
import { IFavorite } from '../interfaces/favorite';

type FavoriteProp = {
  id: number;
  title: string;
  subtitle: string;
  amount: string;
  percentage: string;
  icon: React.ReactElement;
};

const FavoriteComp: React.FC<IFavorite> = ({
  title,
  subtitle,
  icon,
  amount,
  percentage,
}) => {
  return (
    <View className="w-full">
      <View className="flex flex-row justify-between items-center py-4">
        <View className="flex flex-row gap-4 items-center">
          <View >{icon}</View>
          <View>
            <Text className="font-bold text-xl">{title}</Text>
            <Text className="text-gray-700 ">{subtitle}</Text>
          </View>
        </View>
        <View className="flex items-end">
          <Text className="font-semibold text-gray-700">{amount}</Text>
          <Text className="text-red-500">{percentage}</Text>
        </View>
      </View>
    </View>
  );
};

export default FavoriteComp;
