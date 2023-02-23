import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import SearchBar from '../compoments/SearchBar';
import MarketCard from '../compoments/MarketCard';

const MakertScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#fcfcfc]">
      <View className="mx-4">
        <Text className="font-bold text-lg mb-4">Market</Text>
        <SearchBar />
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
      </View>
    </SafeAreaView>
  );
};

export default MakertScreen;
