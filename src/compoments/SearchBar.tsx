import { View, Text, TextInput } from 'react-native';
import { Feather} from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View className="w-full mb-4">
      <View className="border border-gray-300 rounded-lg shadow  flex-row py-2.5 px-4 w-full mb-4">
        <Feather name="search" size={20} color="#708090" />
        <TextInput
          className="ml-2 focus:border-red-600 "
          placeholder="Search Coin Pair"
          onFocus={() => {}}
        />
      </View>
      <View className="flex-row items-start justify-between">
        <View className="bg-emerald-500 rounded-full">
          <Text className="px-3  text-white py-1">Favorite</Text>
        </View>
        <Text className="text-gray-600">All Assests</Text>
        <Text className="text-gray-600">24h</Text>
        <Text className="text-gray-600">Market Cap</Text>
      </View>
    </View>
  );
};

export default SearchBar;
