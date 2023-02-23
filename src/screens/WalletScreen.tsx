import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import WalletCard from '../compoments/WalletCard';
import GainLoserCard from '../compoments/GainLoserCard';

const WalletScreen = () => {
  return (
    <SafeAreaView className="bg-[#fcfcfc] flex-1">
      <View className='mx-4'>
        <Text className='font-bold text-lg mb-4'>Wallet</Text>
        <WalletCard />
        <GainLoserCard />
        <GainLoserCard />
      </View>
    </SafeAreaView>
  );
};

export default WalletScreen;
