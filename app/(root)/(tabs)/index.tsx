import banners from "@/constants/banners";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useEffect, useRef, useState } from "react";
import { Text, View, Image, ImageSourcePropType } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type BannerType = {
  [key: number]: ImageSourcePropType | undefined;
};

const MapBanners: BannerType = {
  1: banners.banner_1,
  2: banners.banner_2,
  3: banners.banner_3,
};

export default function Index() {
  const [banner, setBanner] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const changeBanner = () => {
      if (banner > 2) {
        setBanner(1);
      } else {
        setBanner((prev) => (prev += 1));
      }
    };
    intervalRef.current = setInterval(() => {
      changeBanner();
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [banner]);
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-4">
        <View className="flex flex-row justify-between items-center">
          <View className="flex flex-row items-end">
            <Image
              source={images.avatar}
              resizeMode="contain"
              className="w-12 h-12"
            />
            <Text className="font-rubik-medium ml-2 text-2xl text-black-300">
              User Name
            </Text>
          </View>
          <View>
            <Image
              source={icons.bell}
              resizeMode="contain"
              className="w-8 h-8"
            />
          </View>
        </View>

        <View className="flex mt-4">
          <Image source={MapBanners[banner]} className="w-full" />
        </View>
      </View>
    </SafeAreaView>
  );
}
