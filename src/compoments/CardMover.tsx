import { View, Text, Dimensions } from 'react-native';
import React from 'react';

const {width} = Dimensions.get('screen')

const CardMover = () => {
  return (
    <View className="py-2 mb-4" style={{ width: width * 0.86 }}>
      <View className="flex-row space-x-4">
        <View className="bg-rose-100 px-4 py-6 w-1/2 rounded-md">
          <View className="w-full">
            <Text>Icon</Text>
            <View className="flex flex-row gap-2">
              <Text className="font-bold">BNB</Text>
              <Text>$0.98</Text>
            </View>
            <View className="flex flex-row gap-2">
              <Text>Graph</Text>
              <Text className="text-rose-600 font-semibold">16.8%</Text>
            </View>
          </View>
        </View>
        <View className="bg-emerald-100 py-6 px-4 w-1/2 rounded-md ">
          <View className="w-full">
            <Text>Icon</Text>
            <View className="flex flex-row gap-2">
              <Text className="font-bold">BNB</Text>
              <Text>$0.98</Text>
            </View>
            <View className="flex flex-row gap-2">
              <Text>Graph</Text>
              <Text className="text-emerald-800 font-semibold">16.8%</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardMover;
