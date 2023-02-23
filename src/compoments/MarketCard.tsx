import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';

const MarketCard = () => {
  return (
    <View>
      <View className="flex flex-row justify-between items-center py-4 mb-4 bg-white shadow-md px-4">
        <View className="flex flex-row gap-4 items-center">
          <FontAwesome5 name="bitcoin" size={32} color="#FBEC5D" />
          <View>
            <Text className="font-bold text-xl">BTC</Text>
            <Text className="text-gray-700 ">Bitcoin</Text>
          </View>
        </View>
        <View className="flex items-end flex-row space-x-4">
          <View>
            <Text className="font-semibold text-gray-700">$35,787.52</Text>
            <Text className="text-red-500">-6.27%</Text>
          </View>
          <TouchableOpacity className='bg-emerald-500 px-2 py-2.5 rounded-md'>
            <Text className='text-white font-bold'>+0.62%</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MarketCard;
