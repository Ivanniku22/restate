import { router, useLocalSearchParams } from "expo-router";
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
  Text
} from "react-native";

import icons from "@/constants/icons";
import images from "@/constants/images";


const Property = () => {
  const { id } = useLocalSearchParams();
  const windowHeight = Dimensions.get("window").height;

  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 bg-white"
      >
        <View className="relative w-full" style={{ height: windowHeight / 2 }}>
          <Image source={images.japan} className="size-full" resizeMode="cover" />
          <Image
            source={images.whiteGradient}
            className="absolute top-0 w-full z-40"
          />

          <View
            className="z-50 absolute inset-x-6"
            style={{
              top: Platform.OS === "ios" ? 70 : 20,
            }}
          >
            <View className="flex flex-row items-center w-full justify-between">
              <TouchableOpacity
                onPress={() => router.back()}
                className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
              >
                <Image source={icons.backArrow} className="size-5" />
              </TouchableOpacity>

              <View className="flex flex-row items-center gap-3">
                <Image
                  source={icons.heart}
                  className="size-7"
                  tintColor={"#191D31"}
                />
                <Image source={icons.send} className="size-7" />
              </View>
            </View>
          </View>
        </View>

        <View className="px-5 mt-7 flex gap-2">
            <Text className="text-2xl font-rubik-extrabold">
              Soul Society
            </Text>

            <View className="flex flex-row items-center gap-3">
              <View className="flex flex-row items-center px-4 py-2 bg-primary-100 rounded-full">
                <Text className="text-xs font-rubik-bold text-primary-300">
                  Condos
                </Text>
              </View>

              <View className="flex flex-row items-center gap-2">
                <Image source={icons.star} className="size-5" />
                <Text className="text-black-200 text-sm mt-1 font-rubik-medium">
                  4.8 (128 reviews)
                </Text>
              </View>
            </View>

            <View className="flex flex-row items-center mt-5">
              <View className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10">
                <Image source={icons.bed} className="size-4" />
              </View>
              <Text className="text-black-300 text-sm font-rubik-medium ml-2">
                3 Beds
              </Text>
              <View className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10 ml-7">
                <Image source={icons.bath} className="size-4" />
              </View>
              <Text className="text-black-300 text-sm font-rubik-medium ml-2">
                2 Baths
              </Text>
              <View className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10 ml-7">
                <Image source={icons.area} className="size-4" />
              </View>
              <Text className="text-black-300 text-sm font-rubik-medium ml-2">
                2000 sqft
              </Text>
            </View>

            <View className="w-full border-t border-primary-200 pt-7 mt-5">
              <Text className="text-black-300 text-xl font-rubik-bold">
                Agent
              </Text>

              <View className="flex flex-row items-center justify-between mt-4">
                <View className="flex flex-row items-center">
                  <Image
                    source={images.avatar }
                    className="size-14 rounded-full"
                  />

                  <View className="flex flex-col items-start justify-center ml-3">
                    <Text className="text-lg text-black-300 text-start font-rubik-bold">
                      Zora
                    </Text>
                    <Text className="text-sm text-black-200 text-start font-rubik-medium">
                      zora@silva.com
                    </Text>
                  </View>
                </View>

                <View className="flex flex-row items-center gap-3">
                  <Image source={icons.chat} className="size-7" />
                  <Image source={icons.phone} className="size-7" />
                </View>
              </View>
            </View>

            <View className="mt-7">
              <Text className="text-black-300 text-xl font-rubik-bold">
                Overview
              </Text>
              <Text className="text-black-200 text-base font-rubik mt-2">
                  Luxury condo located in the heart of the city with stunning views of the skyline. This spacious unit features modern amenities, high-end finishes, and a private balcony. Residents can enjoy access to a rooftop pool, fitness center, and 24/7 concierge service. Perfect for those seeking urban living with a touch of elegance.
              </Text>
            </View>

            <View className="mt-7">
              <Text className="text-black-300 text-xl font-rubik-bold">
                Location
              </Text>
              <View className="flex flex-row items-center justify-start mt-4 gap-2">
                <Image source={icons.location} className="w-7 h-7" />
                <Text className="text-black-200 text-sm font-rubik-medium">
                  123 Main Street, New York, NY 10001
                </Text>
              </View>

              <Image
                source={images.map}
                className="h-52 w-full mt-5 rounded-xl"
              />
            </View>
          </View>


      </ScrollView>

      <View className="absolute bg-white bottom-0 w-full rounded-t-2xl border-t border-r border-l border-primary-200 p-7">
          <View className="flex flex-row items-center justify-between gap-10">
            <View className="flex flex-col items-start">
              <Text className="text-black-200 text-xs font-rubik-medium">
                Price
              </Text>
              <Text
                numberOfLines={1}
                className="text-primary-300 text-start text-2xl font-rubik-bold"
              >
                $2,500 / month
              </Text>
            </View>

            <TouchableOpacity className="flex-1 flex flex-row items-center justify-center bg-primary-300 py-3 rounded-full shadow-md shadow-zinc-400">
              <Text className="text-white text-lg text-center font-rubik-bold">
                Book Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
};

export default Property;
