import { MOCK_LIST } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import {
  Text,
  View,
  Image,
  ImageSourcePropType,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, Text as Txt, Icon, MD2Colors } from "react-native-paper";

type ItemProps = {
  title: string;
  description: string;
  imgSrc: ImageSourcePropType | undefined;
};

const CardComponent = ({ title, description, imgSrc }: ItemProps) => {
  return (
    <View className="my-2">
      <Card mode="elevated">
        <Card.Title title={title} />
        <View className="flex flex-row border rounded-2xl px-2 py-1 absolute right-4 top-4 items-center bg-slate-100">
          <Text>4.5</Text>
          <Icon source="star" color={MD2Colors.amber500} size={20} />
        </View>
        <Card.Content>
          <Txt variant="bodyMedium">{description}</Txt>
        </Card.Content>
        <Card.Cover source={imgSrc} />
        <Card.Actions>
          <TouchableOpacity className="border rounded-full bg-slate-300 p-1">
            <Icon source="heart" size={20} />
          </TouchableOpacity>
          <TouchableOpacity className="border rounded-full bg-slate-300 p-1">
            <Icon source="share" size={20} />
          </TouchableOpacity>
        </Card.Actions>
      </Card>
    </View>
  );
};

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
            <CardComponent
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
