import banners from "@/constants/banners";
import { MOCK_LIST } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useEffect, useRef, useState } from "react";
import { Text, View, Image, ImageSourcePropType, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ItemProps = {
  title: string;
  description: string;
  imgSrc: ImageSourcePropType | undefined;
};

const Item = ({ title, description, imgSrc }: ItemProps) => (
  <View className="flex w-full h-80 my-2 rounded-2xl p-4 bg-black-300/70">
    <View className="h-56">
      <Image
        source={imgSrc}
        className="size-full rounded-2xl border-2 border-white"
      />
      <View className="absolute right-2 top-2 flex flex-row justify-center items-center rounded-full px-1.5 py-0.5 bg-white">
        <Text className="font-rubik-semibold text-base mr-1">4.4</Text>
        <Image source={icons.star} className="size-6" />
      </View>
    </View>
    <View className="flex flex-row mt-2 justify-between items-start">
      <View className="flex flex-col">
        <Text className="font-rubik-medium text-xl text-accent-100">
          {title}
        </Text>
        <Text className="font-rubik-semibold text-md text-accent-100/70">
          {title}
        </Text>
      </View>

      <Image source={icons.heart} className="size-6 mt-1" />
    </View>
  </View>
);

export default function Index() {
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

        <FlatList
          contentContainerClassName="pb-32"
          bounces={false}
          data={MOCK_LIST}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              description={item.description}
              imgSrc={item.src}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
