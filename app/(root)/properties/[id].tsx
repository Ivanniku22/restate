import { router, useLocalSearchParams } from "expo-router";
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  TouchableOpacity,
  View
} from "react-native";

import icons from "@/constants/icons";
import images from "@/constants/images";


const Property = () => {
  const { id } = useLocalSearchParams();
  const windowHeight = Dimensions.get("window").height;

  return (
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

      <View></View>
    </ScrollView>
  );
};

export default Property;
