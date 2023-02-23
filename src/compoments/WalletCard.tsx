import { View, Text, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import React from 'react';

const { width } = Dimensions.get('screen');

const WalletCard = () => {
  return (
    <View className="">
      <View className="bg-emerald-500 mb-10 rounded-lg">
        <View className="px-4 py-6">
          <Text className="text-white mb-4">Total Value (BTC)</Text>
          <Text className="text-white font-bold text-3xl mb-3">2.56758394</Text>
          <Text className="text-white font-medium text-base">
            $25,500.234(+20%)
          </Text>
        </View>
      </View>
      <View className="" style={{ width: width/1.14 }}>
        <View className="flex-row space-x-4 w-1/2 items-center">
          <View className="bg-cyan-200  space-x-2 flex-row py-4 px-4 w-full items-center justify-center rounded-lg">
            <Feather name="arrow-down-left" size={24} color="#36454F" />
            <Text className="font-semibold text-gray-700">Deposit</Text>
          </View>
          <View className="bg-yellow-200 space-x-2  flex-row py-4 px-4 w-full  items-center rounded-lg justify-center">
            <Feather name="arrow-up-right" size={24} color="#36454F" />
            <Text className="font-semibold text-gray-700">Send</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WalletCard;
