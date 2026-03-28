import { View, Text, TouchableOpacity, FlatList , Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Filters from '@/components/Filters';
import { Card, FeaturedCard } from '@/components/Cards';
import Search from '@/components/Search';
import icons from '@/constants/icons';
import images from '@/constants/images';
import { router } from 'expo-router';

const Explore = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        className="flex-1"
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className='px-5'>
            <View className='flex flex-row items-center justify-between mt-5'>
              <TouchableOpacity 
                onPress={() => router.back()}
                className='flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center'
              >
                <Image source={icons.backArrow} className='size-5' />
              </TouchableOpacity>

              <Text className='text-base mr-2 text-center font-rubikMedium text-black-300'>
                Search For Your Ideal Home
              </Text>

              <Image source={icons.bell} className='w-6 h-6' />
            </View>


            <Search />

            <View className='mt-5'>
              <Filters />

              <Text className='text-xl font-rubikBold text-black-300 mt-5'>
                Found 4 Properties
              </Text>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}

export default Explore