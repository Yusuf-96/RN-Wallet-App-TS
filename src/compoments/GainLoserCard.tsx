import { View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const GainLoserCard = () => {
  return (
    <View className="w-full py-2">
      <View className="flex flex-row justify-between items-center py-4 mb-4 bg-white shadow-md px-4">
        <View className="flex flex-row gap-4 items-center">
          <FontAwesome5 name="bitcoin" size={32} color="#FBEC5D" />
          <View>
            <Text className="font-bold text-xl">BTC</Text>
            <Text className="text-gray-700 ">Bitcoin</Text>
          </View>
        </View>
        <View className="flex items-end">
          <Text className="font-semibold text-gray-700">$35,787.52</Text>
          <Text className="text-red-500">-6.27%</Text>
        </View>
      </View>
      <View className="flex flex-row justify-between items-center py-4 bg-white shadow-md px-4">
        <View className="flex flex-row gap-4 items-center">
          <FontAwesome5 name="ethereum" size={24} color="blue" />
          <View>
            <Text className="font-bold text-xl">ETH</Text>
            <Text className="text-gray-700 ">Ethereum</Text>
          </View>
        </View>
        <View className="flex items-end">
          <Text className="font-semibold text-gray-700">$2,532.84</Text>
          <Text className="text-red-500">-1.52%</Text>
        </View>
      </View>
    </View>
  );
};

export default GainLoserCard;
