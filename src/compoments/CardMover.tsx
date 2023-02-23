import { View, Text } from 'react-native';
import React from 'react';

const CardMover = () => {
  return (
    <View className="py-4 px-4 w-1/2">
      <View className="flex flex-row space-x-4 w-full ">
        <View className="bg-rose-100 px-4 py-4 w-full">
          <View className="">
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
        <View className="bg-emerald-100 py-4 px-4 w-full">
          <View className="">
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
